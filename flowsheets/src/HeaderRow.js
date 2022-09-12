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