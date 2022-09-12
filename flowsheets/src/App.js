import logo from './logo.svg';
import './App.css';
import {HeaderRow} from './HeaderRow.js';
import React from 'react';

class TableSheet extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return(
          <table>
            <HeaderRow></HeaderRow>
          </table>
      );
  }
}

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Welcome to Flowsheets!</h1>
          <div id = "screen">
              <h2>Year 2022 Sheet</h2>
              <h2 id = "cellsCounter"></h2>
              <div id ="tablesArea">
                <button onclick='populateRow("Expenses Table")'>Add Expenses</button>
                <button onclick='populateRow("Income Table")'>Add Income</button>
                <TableSheet id="ExpensesTable"></TableSheet>
                <TableSheet id="IncomeTable"></TableSheet>
              </div>
          </div>        
        </header>
      </div>
    );
  }s
}

export default App;
