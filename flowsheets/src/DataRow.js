import React from 'react';

export class DataRow extends React.Component {
  constructor(props) {
    super(props);
  }

  addDataCell(i) {
    return(
      <td>
        {"$0.00"}
      </td>
    );
  }

  render() {
    return(
      <tr>
        <th><select></select></th>
        <th><select></select></th>
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
        { this.addDataCell(0) }
      </tr>
    );
  }
}