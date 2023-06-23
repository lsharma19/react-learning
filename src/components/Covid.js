import React, { useEffect, useState } from "react";
import "./Covid.scss";

export const Covid = () => {
  const [data, setData] = useState([]);
  const getCovidData = async () => {
    try {
      const res = await fetch("https://data.covid19india.org/data.json");
      const actualData = await res.json();
      console.log(actualData.statewise[0]);
      setData(actualData.statewise[0]);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getCovidData();
  }, []);
  return (
    <section className="main-section">
      <h1 className="live-text">
        <span className="red-circle"></span> Live
      </h1>
      <h2>Covid-19 Coronovirus Tracker</h2>

      <ul>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>Our</span> country
              </p>
              <p className="card__total card__small">INDIA</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>Total</span> recovered
              </p>
              <p className="card__total card__small">{data.recovered}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>Total</span> Confirmed
              </p>
              <p className="card__total card__small">{data.confirmed}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>Total</span> Death
              </p>
              <p className="card__total card__small">{data.deaths}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>Total</span> Active
              </p>
              <p className="card__total card__small">{data.active}</p>
            </div>
          </div>
        </li>
        <li className="card">
          <div className="card__main">
            <div className="card__inner">
              <p className="card__name">
                <span>Last</span> Updated
              </p>
              <p className="card__total card__small">{data.lastupdatedtime}</p>
            </div>
          </div>
        </li>
      </ul>
    </section>
  );
};

export default Covid;
