import React from 'react';

export class HeaderRow extends React.Component {
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

  render() {
    return(
      <tr>
        <th>Select</th>
        <th>Item</th>
        <th>{ this.renderMonthColumn(0) }</th>
        <th>{ this.renderMonthColumn(1) }</th>
        <th>{ this.renderMonthColumn(2) }</th>
        <th>{ this.renderMonthColumn(3) }</th>
        <th>{ this.renderMonthColumn(4) }</th>
        <th>{ this.renderMonthColumn(5) }</th>
        <th>{ this.renderMonthColumn(6) }</th>
        <th>{ this.renderMonthColumn(7) }</th>
        <th>{ this.renderMonthColumn(8) }</th>
        <th>{ this.renderMonthColumn(9) }</th>
        <th>{ this.renderMonthColumn(10) }</th>
        <th>{ this.renderMonthColumn(11) }</th>
        <th>Annual Summation</th>
        <th>Monthly Average</th>
      </tr>
    );
  }
}