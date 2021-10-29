import React, { useState, useEffect } from "react";
import Graph from "../../components/Graph/Graph";
import SymbolForm from "../../components/SymbolForm/SymbolForm";
import ApiService from "../../services/api-service";
import { useParams } from "react-router-dom";
import "./HomePage.css";

export default function HomePage() {
  const params = useParams();
  const [companies, setCompanies] = useState([]);
  const [data, setData] = useState({ error: null, series: [] });
  const [error, setError] = useState(null);
  useEffect(() => {
    ApiService.getAllSymbols()
      .then(c => setCompanies(c))
      .catch(e => setError(e));
  }, [params.symbol]);
  return (
    <main className="visualize-page-main">
      <SymbolForm companies={companies} setData={setData} />
      <Graph data={data} />
    </main>
  );
}
