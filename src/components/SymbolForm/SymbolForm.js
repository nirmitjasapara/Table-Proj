import React, { useState, useEffect } from "react";
import ApiService from "../../services/api-service";
import { Button, Input, Required } from "../Utils/Utils";
import "./SymbolForm.css";

export default function SymbolForm(props) {
  const [symbol, setSymbol] = useState(null);
  const [series, setSeries] = useState([]);
  const [company, setCompany] = useState([]);
  const [error, setError] = useState(null);
  const { setData } = props;

  // On submit find the company for the symbol in the input.
  // If it exists, store the company and fetch the series data for the symbol.
  const handleSubmit = event => {
    event.preventDefault();
    const company = props.companies.find(c => c.symbol === symbol);
    console.log(company);
    if (company) {
      setCompany(company);
      ApiService.getTimeSeries({ symbol })
        .then(t => setSeries(t))
        .catch(e => setError(e));
    } else alert("Invalid Symbol");
  };

  // This gets run after the submit changes series, error, and company.
  // All of which get passed to the Graph component
  useEffect(() => {
    setData({ error, series, company });
  }, [series, error, company, setData]);

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
