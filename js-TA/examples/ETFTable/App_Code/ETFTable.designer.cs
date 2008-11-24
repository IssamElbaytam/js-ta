﻿#pragma warning disable 1591
//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated by a tool.
//     Runtime Version:2.0.50727.1433
//
//     Changes to this file may cause incorrect behavior and will be lost if
//     the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

using System;
using System.Collections.Generic;
using System.ComponentModel;
using System.Data;
using System.Data.Linq;
using System.Data.Linq.Mapping;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;



[System.Data.Linq.Mapping.DatabaseAttribute(Name="ETFTable")]
public partial class ETFTableDataContext : System.Data.Linq.DataContext
{
	
	private static System.Data.Linq.Mapping.MappingSource mappingSource = new AttributeMappingSource();
	
  #region Extensibility Method Definitions
  partial void OnCreated();
  partial void InsertDaily(Daily instance);
  partial void UpdateDaily(Daily instance);
  partial void DeleteDaily(Daily instance);
  #endregion
	
	public ETFTableDataContext() : 
			base(global::System.Configuration.ConfigurationManager.ConnectionStrings["ETFTableConnectionString1"].ConnectionString, mappingSource)
	{
		OnCreated();
	}
	
	public ETFTableDataContext(string connection) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public ETFTableDataContext(System.Data.IDbConnection connection) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public ETFTableDataContext(string connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public ETFTableDataContext(System.Data.IDbConnection connection, System.Data.Linq.Mapping.MappingSource mappingSource) : 
			base(connection, mappingSource)
	{
		OnCreated();
	}
	
	public System.Data.Linq.Table<Daily> Dailies
	{
		get
		{
			return this.GetTable<Daily>();
		}
	}
}

[Table(Name="dbo.Daily")]
public partial class Daily : INotifyPropertyChanging, INotifyPropertyChanged
{
	
	private static PropertyChangingEventArgs emptyChangingEventArgs = new PropertyChangingEventArgs(String.Empty);
	
	private string _Ticker;
	
	private System.DateTime _Date;
	
	private decimal _OpenPrice;
	
	private decimal _HighPrice;
	
	private decimal _LowPrice;
	
	private decimal _ClosePrice;
	
	private System.Nullable<long> _Volume;
	
	private System.Nullable<decimal> _AdjustedClosePrice;
	
    #region Extensibility Method Definitions
    partial void OnLoaded();
    partial void OnValidate(System.Data.Linq.ChangeAction action);
    partial void OnCreated();
    partial void OnTickerChanging(string value);
    partial void OnTickerChanged();
    partial void OnDateChanging(System.DateTime value);
    partial void OnDateChanged();
    partial void OnOpenPriceChanging(decimal value);
    partial void OnOpenPriceChanged();
    partial void OnHighPriceChanging(decimal value);
    partial void OnHighPriceChanged();
    partial void OnLowPriceChanging(decimal value);
    partial void OnLowPriceChanged();
    partial void OnClosePriceChanging(decimal value);
    partial void OnClosePriceChanged();
    partial void OnVolumeChanging(System.Nullable<long> value);
    partial void OnVolumeChanged();
    partial void OnAdjustedClosePriceChanging(System.Nullable<decimal> value);
    partial void OnAdjustedClosePriceChanged();
    #endregion
	
	public Daily()
	{
		OnCreated();
	}
	
	[Column(Storage="_Ticker", DbType="VarChar(10) NOT NULL", CanBeNull=false, IsPrimaryKey=true)]
	public string Ticker
	{
		get
		{
			return this._Ticker;
		}
		set
		{
			if ((this._Ticker != value))
			{
				this.OnTickerChanging(value);
				this.SendPropertyChanging();
				this._Ticker = value;
				this.SendPropertyChanged("Ticker");
				this.OnTickerChanged();
			}
		}
	}
	
	[Column(Storage="_Date", DbType="SmallDateTime NOT NULL", IsPrimaryKey=true)]
	public System.DateTime Date
	{
		get
		{
			return this._Date;
		}
		set
		{
			if ((this._Date != value))
			{
				this.OnDateChanging(value);
				this.SendPropertyChanging();
				this._Date = value;
				this.SendPropertyChanged("Date");
				this.OnDateChanged();
			}
		}
	}
	
	[Column(Storage="_OpenPrice", DbType="Decimal(12,5) NOT NULL")]
	public decimal OpenPrice
	{
		get
		{
			return this._OpenPrice;
		}
		set
		{
			if ((this._OpenPrice != value))
			{
				this.OnOpenPriceChanging(value);
				this.SendPropertyChanging();
				this._OpenPrice = value;
				this.SendPropertyChanged("OpenPrice");
				this.OnOpenPriceChanged();
			}
		}
	}
	
	[Column(Storage="_HighPrice", DbType="Decimal(12,5) NOT NULL")]
	public decimal HighPrice
	{
		get
		{
			return this._HighPrice;
		}
		set
		{
			if ((this._HighPrice != value))
			{
				this.OnHighPriceChanging(value);
				this.SendPropertyChanging();
				this._HighPrice = value;
				this.SendPropertyChanged("HighPrice");
				this.OnHighPriceChanged();
			}
		}
	}
	
	[Column(Storage="_LowPrice", DbType="Decimal(12,5) NOT NULL")]
	public decimal LowPrice
	{
		get
		{
			return this._LowPrice;
		}
		set
		{
			if ((this._LowPrice != value))
			{
				this.OnLowPriceChanging(value);
				this.SendPropertyChanging();
				this._LowPrice = value;
				this.SendPropertyChanged("LowPrice");
				this.OnLowPriceChanged();
			}
		}
	}
	
	[Column(Storage="_ClosePrice", DbType="Decimal(12,5) NOT NULL")]
	public decimal ClosePrice
	{
		get
		{
			return this._ClosePrice;
		}
		set
		{
			if ((this._ClosePrice != value))
			{
				this.OnClosePriceChanging(value);
				this.SendPropertyChanging();
				this._ClosePrice = value;
				this.SendPropertyChanged("ClosePrice");
				this.OnClosePriceChanged();
			}
		}
	}
	
	[Column(Storage="_Volume", DbType="BigInt")]
	public System.Nullable<long> Volume
	{
		get
		{
			return this._Volume;
		}
		set
		{
			if ((this._Volume != value))
			{
				this.OnVolumeChanging(value);
				this.SendPropertyChanging();
				this._Volume = value;
				this.SendPropertyChanged("Volume");
				this.OnVolumeChanged();
			}
		}
	}
	
	[Column(Storage="_AdjustedClosePrice", DbType="Decimal(12,5)")]
	public System.Nullable<decimal> AdjustedClosePrice
	{
		get
		{
			return this._AdjustedClosePrice;
		}
		set
		{
			if ((this._AdjustedClosePrice != value))
			{
				this.OnAdjustedClosePriceChanging(value);
				this.SendPropertyChanging();
				this._AdjustedClosePrice = value;
				this.SendPropertyChanged("AdjustedClosePrice");
				this.OnAdjustedClosePriceChanged();
			}
		}
	}
	
	public event PropertyChangingEventHandler PropertyChanging;
	
	public event PropertyChangedEventHandler PropertyChanged;
	
	protected virtual void SendPropertyChanging()
	{
		if ((this.PropertyChanging != null))
		{
			this.PropertyChanging(this, emptyChangingEventArgs);
		}
	}
	
	protected virtual void SendPropertyChanged(String propertyName)
	{
		if ((this.PropertyChanged != null))
		{
			this.PropertyChanged(this, new PropertyChangedEventArgs(propertyName));
		}
	}
}
#pragma warning restore 1591