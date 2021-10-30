import React, { Component } from "react";
import Graph from "../../components/Graph/Graph";
import SymbolForm from "../../components/SymbolForm/SymbolForm";
import ApiService from "../../services/api-service";
import "./HomePage.css";

export default class HomePage extends Component {
  state = {
    companies: [],
    data: { error: null, series: [] },
    error: null
  };
  // Get and Store the symbols list. On error, an error message shows
  componentDidMount() {
    ApiService.getAllSymbols()
      .then(c => this.setState({ companies: c }))
      .catch(e => this.setState({ error: e }));
  }
  // Callback function passed to symbolform to set the time series data
  setData = data => {
    this.setState({ data: data });
  };
  render() {
    return this.state.error ? (
      <p className="red">Error getting company list</p>
    ) : (
      <main className="visualize-page-main">
        <SymbolForm companies={this.state.companies} setData={this.setData} />
        <Graph data={this.state.data} />
      </main>
    );
  }
}
