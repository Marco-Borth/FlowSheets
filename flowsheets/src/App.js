import logo from './logo.svg';
import './App.css';
import React from 'react';

class HeaderRow extends React.Component {
  renderMonthColumn(i) {

    const d = new Date();
    d.setDate(1);
    d.setMonth(i);
    return(
      <th>
        {d.toLocaleString("en-US", { month: "short", year:"numeric" })}
      </th>
    );
  }

  renderMonths() {
    return(
      <div className='MonthColumns'>
        { this.renderMonthColumn(0) }
              { this.renderMonthColumn(1) }
              { this.renderMonthColumn(2) }
              { this.renderMonthColumn(3) }
              { this.renderMonthColumn(4) }
              { this.renderMonthColumn(5) }
              { this.renderMonthColumn(6) }
              { this.renderMonthColumn(7) }
              { this.renderMonthColumn(8) }
              { this.renderMonthColumn(9) }
              { this.renderMonthColumn(10) }
              { this.renderMonthColumn(11) }
      </div>
    );
  }

  render() {
      return(
          <tr>
              <th>Select</th>
              <th>Item</th>
              { this.renderMonths() }
              <th>Annual Summation</th>
              <th>Monthly Average</th>
          </tr>
      );
  }
}

class TableSheet extends React.Component {
  constructor(props) {
      super(props);
  }

  render() {
      return(
          <table id="Expenses Table">
                  <tr>
                    <button onclick='populateRow("Expenses Table")'>Add Expenses</button>
                    <button onclick='populateRow("Income Table")'>Add Income</button>
                  </tr>
                  
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
                  <TableSheet></TableSheet>
                  <table id="Expenses Table">
                    <button onclick='populateRow("Expenses Table")'>Add Expenses</button>
                  </table>
                  <table id="Income Table">
                    <button onclick='populateRow("Income Table")'>Add Income</button>
                  </table>
              </div>
          </div>        
        </header>
      </div>
    );
  }s
}

export default App;
