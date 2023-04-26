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


const SalesCard = () => {
  const [props, setProps] = useState({
    title: "Sales",
    color: {
      backGround: "linear-gradient(180deg, #bb67ff 0%, #c484f3 100%)",
      boxShadow: "0px 10px 20px 0px #e0c6f5",
    },
    barValue: 70,
    value: "25,970",
    png: UilUsdSquare,
  })

  const [expanded, setExpanded] = useState(false);

  return (
    <AnimateSharedLayout>
      {expanded ? (
        <ExpandedCard param={props} setExpanded={() => setExpanded(false)} />
      ) : (
        <CompactCard param={props} setExpanded={() => setExpanded(true)} />
      )}
    </AnimateSharedLayout>
  );
};

// Compact Card
function CompactCard({ param, setExpanded }) {
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
      <div className="radialBar">
        <CircularProgressbar
          value={param.barValue}
          text={`${param.barValue}%`}
        />
        <span>{param.title}</span>
      </div>
      <div className="detail">
        <Png />
        <span>${param.value}</span>
        <span>Last 24 hours</span>
      </div>
    </motion.div>
  );
}

// Expanded Card
function ExpandedCard({ param, setExpanded }) {
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
      categories: [
        "2018-09-19",
        "2018-09-19",
        "2018-09-19",
        "2018-09-19",
        "2018-09-19",
        "2018-09-19",
        "2018-09-19",
      ],
    },
  })

  const [transactions, setTransactions] = useState({})
  const [series, setSeries] = useState([{
    name: "Sales",
    data: [1, 2, 1, 1],
  }])
  useEffect(() => {
    fetchData()
  }, [])

  const fetchData = () => {
    fetch('https://uber-food-clone-a209f-default-rtdb.firebaseio.com/transaction.json').then((res) => res.json()).then(json => {

      setTransactions(json)

      const dates = Object.keys(json).map(id => {
        return json[id].date
      })

      setOptions({
        ...options,
        xaxis: {
          type: "datetime",
          categories: dates
        }
      })


    });

  }
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
      <span>Last 24 hours</span>
    </motion.div>
  );
}

export default SalesCard;