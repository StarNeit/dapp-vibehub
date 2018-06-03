import React, { Component } from "react";
import { BootstrapTable, TableHeaderColumn } from "react-bootstrap-table";
import { Button } from "react-bootstrap";

import "./index.css";

export class BotsListTable extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    var _botlist;
    if (this.props.botlist) {
        _botlist = this.props.botlist;
    } else {
        _botlist = [];
    }

    const addressFormat = (cell, row, enumObj, index) => {
        return <a href={"https://ropsten.etherscan.io/address/" + row.publicKey} target="_blank">{row.publicKey}</a>;
    };

    const fundFormat = (cell, row, enumObj, index) => {
        return <div>{row.total_fund/(10**18)}</div>;
    };

    const actionFormat = (cell, row, enumObj, index) => {
        return <div><button className="form-control">Details</button></div>;
    };

    return (
      <div>
        <BootstrapTable
          className="bots-list-table"
          data={_botlist}
          tableStyle={{ border: 0 }}
          trClassName={(row, rowIdx) => {
            return rowIdx % 2 === 0 ? "tr-class-even" : "tr-class-odd";
          }}
          search
          // pagination
        >
          <TableHeaderColumn
            dataField="_id"
            className="td-header-class"
            isKey
            hidden
          >
            ID
          </TableHeaderColumn>
          <TableHeaderColumn
            dataFormat={addressFormat}
            className="td-header-class"
            width="130"
            tdStyle={{ textAlign: "center", lineHeight: "35px" }}
            thStyle={{ textAlign: "center", lineHeight: "35px" }}
          >
            ETH Wallet Address
          </TableHeaderColumn>
          <TableHeaderColumn
            dataFormat={fundFormat}
            className="td-header-class"
            width="70"
            tdStyle={{ textAlign: "center", lineHeight: "35px" }}
            thStyle={{ textAlign: "center", lineHeight: "35px" }}
          >
            Balance
          </TableHeaderColumn>
          <TableHeaderColumn
              dataField="period"
              className="td-header-class"
              width="70"
              tdStyle={{ textAlign: "center", lineHeight: "35px" }}
              thStyle={{ textAlign: "center", lineHeight: "35px" }}
          >
            Period
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="gas"
            className="td-header-class"
            width="70"
            tdStyle={{ textAlign: "center", lineHeight: "35px" }}
            thStyle={{ textAlign: "center", lineHeight: "35px" }}
          >
            Gas
          </TableHeaderColumn>
          <TableHeaderColumn
              dataFormat={actionFormat}
              className="td-header-class"
              width="30"
              tdStyle={{ textAlign: "center", lineHeight: "35px" }}
              thStyle={{ textAlign: "center", lineHeight: "35px" }}
          >
            Action
          </TableHeaderColumn>
        </BootstrapTable>
      </div>
    );
  }
}
