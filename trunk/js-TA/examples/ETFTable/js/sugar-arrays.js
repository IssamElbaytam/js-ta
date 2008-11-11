/*
	* Sugar Arrays (c) Creative Commons 2006
	* http://creativecommons.org/licenses/by-sa/2.5/
	* Author: Dustin Diaz | http://www.dustindiaz.com
	* Reference: http://www.dustindiaz.com/basement/sugar-arrays.html
*/
Function.prototype.method = function (name, fn) {
	this.prototype[name] = fn;
	return this;
};

if ( !Array.prototype.forEach ) {
	Array.
		method(
			'forEach',
			function(fn, thisObj) {
				var scope = thisObj || window;
				for ( var i=0, j=this.length; i < j; ++i ) {
					fn.call(scope, this[i], i, this);
				}
			}
		).
		method(
			'every',
			function(fn, thisObj) {
				var scope = thisObj || window;
				for ( var i=0, j=this.length; i < j; ++i ) {
					if ( !fn.call(scope, this[i], i, this) ) {
						return false;
					}
				}
				return true;
			}
		).
		method(
			'some',
			function(fn, thisObj) {
			    var scope = thisObj || window;
				for ( var i=0, j=this.length; i < j; ++i ) {
			        if ( fn.call(scope, this[i], i, this) ) {
			            return true;
			        }
			    }
			    return false;
			}
		).
		method(
			'map',
			function(fn, thisObj) {
			    var scope = thisObj || window;
			    var a = [];
			    for ( var i=0, j=this.length; i < j; ++i ) {
			        a.push(fn.call(scope, this[i], i, this));
			    }
			    return a;
			}
		).
		method(
			'filter',
			function(fn, thisObj) {
			    var scope = thisObj || window;
			    var a = [];
			    for ( var i=0, j=this.length; i < j; ++i ) {
			        if ( !fn.call(scope, this[i], i, this) ) {
			            continue;
			        }
			        a.push(this[i]);
			    }
			    return a;
			}
		).
		method(
			'indexOf',
			function(el, start) {
			    var start = start || 0;
			    for ( var i=start, j=this.length; i < j; ++i ) {
			        if ( this[i] === el ) {
			            return i;
			        }
			    }
			    return -1;
			}
		).
		method(
			'lastIndexOf',
			function(el, start) {
			    var start = start || this.length;
			    if ( start >= this.length ) {
			        start = this.length;
			    }
			    if ( start < 0 ) {
			         start = this.length + start;
			    }
			    for ( var i=start; i >= 0; --i ) {
			        if ( this[i] === el ) {
			            return i;
			        }
			    }
			    return -1;
			}
		);
}