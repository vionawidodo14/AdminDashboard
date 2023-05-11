import React, { useState } from "react";
import "./Card.css";
import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import { motion, AnimateSharedLayout } from "framer-motion";
import { UilTimes } from "@iconscout/react-unicons";
import Chart from "react-apexcharts";
import { useEffect } from "react";
import { UilUsdSquare, UilMoneyWithdrawal } from "@iconscout/react-unicons";

// parent Card


const RevenueCard = () => {
  const [props, setProps] = useState({
    title: "Revenue",
    color: {
      backGround: "linear-gradient(180deg, #FF919D 0%, #FC929D 100%)",
      boxShadow: "0px 10px 20px 0px #FDC0C7",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
  })
  const [options, setOptions] = useState({
    chart: {
      type: "area",
      height: "auto",
    },

    dropShadow: {
      enabled: false,
      enabledOnSeries: undefined,
      top: 0,
      left: 0,
      blur: 3,
      color: "#000",
      opacity: 0.35,
    },

    fill: {
      colors: ["#fff"],
      type: "gradient",
    },
    dataLabels: {
      enabled: false,
    },
    stroke: {
      curve: "smooth",
      colors: ["white"],
    },
    tooltip: {
      x: {
        format: "dd/MM/yy HH:mm",
      },
    },
    grid: {
      show: true,
    },
    xaxis: {
      type: "date",
      categories: [],
    },
    yaxis: {
      min: 0,
      labels: {
        formatter: (value) => { return value * 1 },
      },
    }
  })
  const [expanded, setExpanded] = useState(false);
  const [total, setTotal] = useState(0)
  const [series, setSeries] = useState([{
    name: "Revenue",
    data: [],
  }])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch('https://uber-food-clone-a209f-default-rtdb.firebaseio.com/transaction.json').then((res) => res.json()).then(json => {

      // setTransactions(json)

      let allDates = Object.keys(json).filter(id => json[id].date).map(id => {
        return json[id].date
      })

      const dates = [...new Set(allDates)]
      let seriesData = dates.map(item => Object.keys(json).filter(id => json[id].date == item))

      seriesData = seriesData.map(i => {
        let total = 0
        for (const item of i) {
          total += json[item].totalPrice
        }
        return total
      })

      let tot = 0
      for (const item of seriesData) {
        tot += item
      }

      setTotal(tot)
      setOptions({
        ...options,
        xaxis: {
          type: "datetime",
          categories: dates
        }
      })

      setSeries([{
        ...series,
        data: seriesData
      }])
    });

  }

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} options={options} total={total} series={series} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} total={total} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded, total }) {
  const Png = param.png;
  return (
    <motion.div
      className="CompactCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
      onClick={setExpanded}
    >
      {/* <div className="radialBar"> */}
      <span>{param.title}</span>
      {/* </div> */}
      <div className="detail">
        <Png />
        <span>{total}</span>
        <span>Orders (All Time)</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded, options, series }) {


  return (
    <motion.div
      className="ExpandedCard"
      style={{
        background: param.color.backGround,
        boxShadow: param.color.boxShadow,
      }}
      layoutId="expandableCard"
    >
      <div style={{ alignSelf: "flex-end", cursor: "pointer", color: "white" }}>
        <UilTimes onClick={setExpanded} />
      </div>
      <span>{param.title}</span>
      <div className="chartContainer">
        <Chart options={options} series={series} type="area" />
      </div>
      <span>All Time</span>
    </motion.div>
  );
}

export default RevenueCard;