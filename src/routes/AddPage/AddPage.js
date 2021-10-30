import React, { Component } from "react";
import AddForm from "../../components/AddForm/AddForm";
import { Section } from "../../components/Utils/Utils";
import "./AddPage.css";

export default class AddPage extends Component {
  render() {
    return (
      <main className="add-page-main">
        <Section className="AddPage">
          <h2>Follow Stock</h2>
          <p className="explanation">
            Please add the symbol of the company you want to follow. You can
            also type in a part of the company's name and click the appropriate
            company in the dropdown.
          </p>
          <AddForm onAddSuccess={this.handleAddSuccess} />
        </Section>
      </main>
    );
  }
}
