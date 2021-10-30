import React, { Component } from "react";
import { Button, Input, Required } from "../Utils/Utils";
import ApiService from "../../services/api-service";

export default class AddForm extends Component {
  static defaultProps = {
    history: {
      push: () => {}
    }
  };

  state = { error: null, ref: [] };

  componentDidMount() {
    const serialize = c => ({ name: c.name, symbol: c.symbol });
    ApiService.getCompanyRef()
      .catch(error => this.setState({ error }))
      .then(ref => this.setState({ ref: ref.data.map(serialize) }));
  }

  handleSubmit = ev => {
    ev.preventDefault();
    this.setState({ error: null });
    const { symbol } = ev.target;

    ApiService.requestCompany({
      symbol: symbol.value
    })
      .then(res => {
        symbol.value = "";
        this.props.history.push("/visualize");
      })
      .catch(res => {
        this.setState({ error: res.error });
      });
  };

  renderList() {
    const { ref } = this.state;
    return ref.map(company => (
      <option
        value={company.symbol}
        label={company.name}
        key={"company-" + company.symbol}
      />
    ));
  }

  render() {
    const { error } = this.state;
    return (
      <form className="AddForm" onSubmit={this.handleSubmit}>
        <div role="alert">{error && <p className="red">{error}</p>}</div>
        <div className="symbol">
          <label htmlFor="AddForm__symbol">
            Symbol <Required />
          </label>
          <Input
            name="symbol"
            type="text"
            required
            list="companyref"
            id="AddForm__symbol"
          ></Input>
          <datalist id="companyref">{this.renderList()}</datalist>
        </div>
        <Button type="submit">Add Company</Button>
      </form>
    );
  }
}
