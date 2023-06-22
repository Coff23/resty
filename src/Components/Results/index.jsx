import React from "react";
import JSONPretty from "react-json-pretty";
let JSONPrettyMon = require('react-json-pretty/dist/acai')

function Results(props) {
  return (
    <section>
      {
        props.loading
          ? <div>Loading</div>
          : < pre > {props.data ? <JSONPretty id="json-pretty" theme={JSONPrettyMon} data={props.data} /> : null}</pre>
      }
    </section >
  );
}

export default Results;
