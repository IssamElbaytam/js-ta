/// <reference path="js/ETFTables.TA.js" />
/// <reference path="js/lib/yui/yahoo-dom-event/yahoo-dom-event.js" />
/// <reference path="js/lib/yui/connection/connection.js" />

/**
* @author ndavis
*/
var lib = YAHOO, Dom = lib.util.Dom, Event = lib.util.Event, ETFTable = {};
ETFTable.expandedData = {}; ETFTable.tempData = {}; ETFTable.initialData = {};
ETFTable.expandComplete = new lib.util.CustomEvent("expandComplete");

Event.onDOMReady(function() {
    
    var callback =
    {
        success: function(o) {
            ETFTable.initialData = YAHOO.lang.JSON.parse(o.responseText).ResultSet;
            var percentComplete;
            taTransform(
                function(value, total) {
                    percentComplete = (100 * value / total);
                },
                function(o) {
                    ETFTable.tempData.expandComplete = true;
                    ETFTable.expandComplete.fire(o);
                });
        },
        failure: function(o) { alert("Huge Problem!!!"); },
        argument: ["ARG_DATA"]
    }
    var sUrl = "js_handlers/DailyHandler.ashx";
    var request = YAHOO.util.Connect.asyncRequest('GET', sUrl, callback, null);
});

// defer instantiation
ETFTable.expandComplete.subscribe( function(evt, args) {
//Event.addListener(ETFTable.expandedData, "expandComplete", function(data) {

    var myDataTableDeferred = new lib.util.Element('dataTableContainer');

    var layout = new lib.widget.Layout({
        units: [
                { position: 'top', height: 70, body: 'top1', gutter: '0px', collapse: false, resize: false },
                { position: 'center', body: 'center1', gutter: '2px', scroll: false },
				{ position: 'left', body: 'menu', header: '', width: 130, gutter: '2px', scroll: true, collapse: true, animate: true },
				{ position: 'bottom', body: 'footer', height: 36, gutter: '2px', scroll: false, collapse: false }
            ]
    });
    layout.on("resize", function() {
        myDataTableDeferred.set('height', (this.getSizes().center.h - 33) + 'px');
    });
    layout.on("render", function() {
        initDataTable(layout.getSizes().center.h - 33);
    });


    // Point to a URL
    var myDataSource = new YAHOO.util.LocalDataSource(args[0]);
    // Set the responseType as JSON
    myDataSource.responseType = lib.util.DataSource.TYPE_JSON;

    // Define the data schema
    myDataSource.responseSchema = {
        resultsList: "Results", // Dot notation to results array
        fields: ["Ticker", "Last", "Previous", "AdjustedClosePrice", "diffEma1Over2", "Volume"], // Field names
        metaFields: {                       // optional or "magic" meta
            totalRecords: "ResultSet.TotalRecords",
            sortDirection: "ResultSet.SortDirection",
            sortKey: "ResultSet.SortKey"
        }
    };
    myDataSource.doBeforeCallback = function(oRequest, oFullResponse, oParsedResponse, oCallback) {
        // do whatever you want with oParsedResponse.
        // The other arguments are there for reference, in case you need some extra information
        // Whatever you return will be what the DataTable gets
        //return transform(oParsedResponse);

        //return transformRawETFData(oParsedResponse);
        //ETFTable.initialData = copy(oParsedResponse);
        //ETFTable.expandedData = copy(oParsedResponse);
        //ETFTable.expandedData.results = [];
        //ETFTable.tempData.expandComplete = false;
        //        var percentComplete;
        //        taTransform(
        //            function(value, total) {
        //                percentComplete = (100 * value / total);
        //            },
        //            function() {
        //                ETFTable.tempData.expandComplete = true;
        //            });
        //        while (ETFTable.tempData.expandComplete == false) {
        //            setTimeout((function() { return; }), 500);
        //        }

        return oParsedResponse;
        //        transform2(0);
        //        var waitIterCounter = 1;
        //        while (!ETFTable.tempData.expandComplete) {
        //            //setTimeout('stillWaiting()', 100);
        //            waitIterCounter = waitIterCounter + 1;
        //        }
        //        waitComplete();
        //        return ETFTable.expandedData;
    };

    var myColumnDefs = [
	        { key: "Ticker", label: "Ticker", sortable: true }
	        , { key: "Last", label: "Last", sortable: true }
			, { key: "Previous", label: "Previous", sortable: true }
	        , { key: "diffEma1Over2", label: "EMA 5/20 %", sortable: true }
    //, { key: "diffEma2Over3", label: "EMA 20/80 %", sortable: true }
    //            , { key: "PercentEMA15Over45", label: "EMA 15/45 %", sortable: true }
    //            , { key: "PercentEMA20Over60", label: "EMA 20/60 %", sortable: true }
    //            , { key: "PercentEMA25Over75", label: "EMA 25/75 %", sortable: true }
    //            , { key: "PercentEMA30Over90", label: "EMA 30/90 %", sortable: true }
    //            , { key: "PercentEMA35Over105", label: "EMA 35/105 %", sortable: true }
    //            , { key: "PercentEMA40Over120", label: "EMA 40/120 %", sortable: true }
    //,{key:"Close", label:"Close"}
	    ];

    var initDataTable = function(h) {

        myDataTableDeferred = new lib.widget.DataTable("dataTableContainer", myColumnDefs, myDataSource, {
            scrollable: true,
            height: h + "px",
            width: "99.9%",
            renderLoopSize: 125
        });
    };

    layout.render();

});

function taTransform(progressFn, callbackFn) {
    ETFTable.expandedData = copy(ETFTable.initialData)
    var data = ETFTable.expandedData.Results;
    var length = data.length;
    var i = 0;
    var timeoutFreq = 2000;
    var timeoutLength = 0;
    var callbackCalled = false;
    
    (function() {
        var start;
        start = new Date().getTime();
        for (; i < length; i++) {
            var series = data[i].Closes.split(',');
            //            with (data[i]) {
            //linR5 = TA.LinearReg(series.slice(0, 82), 5);
            //linR10 = TA.LinearReg(series.slice(0, 82), 10);
            //linR20 = TA.LinearReg(series.slice(0, 82), 20);
            //linR40 = TA.LinearReg(series.slice(0, 82), 40);
            //linR80 = TA.LinearReg(series.slice(0, 82), 80);

            emaOfLinR5 = TA.EMAverage(series.slice(0, 25), 3);
            //emaOfLinR10 = TA.EMAverage(linR10.slice(0, 12), 8);
            emaOfLinR20 = TA.EMAverage(series.slice(0, 40), 3);
            //emaOfLinR40 = TA.EMAverage(linR40.slice(0, 42), 8);
            //emaOfLinR80 = TA.EMAverage(linR80.slice(0, 82), 3);

            data[i].diffEma1Over2 = TA.Helpers.roundDecimal(TA.Helpers.percentDiff(emaOfLinR5[0], emaOfLinR20[0]), 3);
            //data[i].diffEma2Over3 = TA.Helpers.roundDecimal(TA.Helpers.percentDiff(emaOfLinR20[0], emaOfLinR80[0]), 3);
            //            }
            ETFTable.expandedData.Results[i] = data[i];
            if (new Date().getTime() - start > timeoutFreq) {
                i++;
                setTimeout(arguments.callee, timeoutLength);
                break;
            }
        }
        progressFn(i, length);
        if (i >= length && callbackCalled == false) {
            callbackFn(ETFTable.expandedData);
            callbackCalled = true;
        }
    })();
    return true;
}


//function returnEval(codeToEval) {
//    return
//}

function stillWaiting() {
    document.getElementById('menu-list').style.display = 'hidden';
}
//function waitComplete() {
//    document.getElementById('menu-list').style.display = 'block';
//}

function copy(obj) {
    return lib.lang.JSON.parse( lib.lang.JSON.stringify( obj ) );
}