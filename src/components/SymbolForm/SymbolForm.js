import React, { useState, useEffect } from "react";
import ApiService from "../../services/api-service";
import { Button, Input, Required } from "../Utils/Utils";
import "./SymbolForm.css";

export default function SymbolForm(props) {
  const [symbol, setSymbol] = useState(null);
  const [series, setSeries] = useState([]);
  const [error, setError] = useState(null);

  const handleSubmit = event => {
    event.preventDefault();
    if (props.companies.find(c => c.symbol == symbol)) {
      ApiService.getTimeSeries({ symbol })
        .then(t => setSeries(t))
        .catch(e => setError(e));
    } else alert("Invalid Symbol");
  };

  useEffect(() => {
    props.setData({ error, series });
  }, [series, error]);

  return (
    <section>
      <form className="SymbolForm" onSubmit={handleSubmit}>
        <div className="symbol">
          <label htmlFor="AddForm__symbol">
            Symbol <Required />
          </label>
          <Input
            name="symbol"
            type="text"
            required
            list="companies"
            onChange={e => setSymbol(e.target.value)}
            id="SymbolForm__symbol"
          ></Input>
          <datalist id="companies">
            {props.companies.map(company => (
              <option
                value={company.symbol}
                label={company.name}
                key={"company-" + company.symbol}
              />
            ))}
          </datalist>
        </div>
        <Button type="submit">Show Graph</Button>
      </form>
    </section>
  );
}
