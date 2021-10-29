import React, { useState, useEffect } from "react";
import Plot from "react-plotly.js";
import "./Graph.css";

export default function Graph(props) {
  const [x, setX] = useState([]);
  const [y, setY] = useState([]);

  useEffect(() => {
    let xarr = Array.from({ length: props.data.series.length });
    let yarr = Array.from({ length: props.data.series.length });
    props.data.series.forEach((point, i) => {
      xarr[i] = point.datetime;
      yarr[i] = point.price;
    });
    setX(xarr);
    setY(yarr);
  }, [props.data.series]);
  return (
    <section>
      {props.data.error || !x.length ? (
        <p className="red">{props.data.error}</p>
      ) : (
        <Plot
          className="graph"
          data={[
            {
              x,
              y,
              type: "scatters",
              mode: "lines",
              marker: { color: "red" }
            }
          ]}
          layout={{
            width: window.innerWidth - 40,
            height: 400,
            title: props.data.company.name,
            plot_bgcolor: "#000",
            paper_bgcolor: "#000",
            font: {
              color: "#fff"
            },
            margin: {
              l: "40",
              b: "40"
            }
          }}
        />
      )}
    </section>
  );
}
