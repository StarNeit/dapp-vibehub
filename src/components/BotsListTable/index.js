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

    const statusFormat = (cell, row, enumObj, index) => {
      var status = row.verified;

      if (!status) {
        return <div className="status_credit">DEPLOYED</div>;
      } else{
        return <div className="status_deposit">PENDING</div>;
      }
    };

    const txFormat = (cell, row, enumObj, index) => {
        return <a href={"https://ropsten.etherscan.io/tx/" + row.tx} target="_blank">{row.tx}</a>;
    };

    const fundFormat = (cell, row, enumObj, index) => {
        return <div>{row.total_fund/(10**18)}</div>;
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
            dataFormat={txFormat}
            className="td-header-class"
            width="150"
            tdStyle={{ textAlign: "center", lineHeight: "35px" }}
            thStyle={{ textAlign: "center", lineHeight: "35px" }}
          >
            TxHash
          </TableHeaderColumn>
          <TableHeaderColumn
            dataFormat={fundFormat}
            className="td-header-class"
            width="70"
            tdStyle={{ textAlign: "center", lineHeight: "35px" }}
            thStyle={{ textAlign: "center", lineHeight: "35px" }}
          >
            Total Fund
          </TableHeaderColumn>
          <TableHeaderColumn
            dataField="remaining_fund"
            className="td-header-class"
            width="70"
            tdStyle={{ textAlign: "center", lineHeight: "35px" }}
            thStyle={{ textAlign: "center", lineHeight: "35px" }}
          >
            Remaining Fund
          </TableHeaderColumn>
          <TableHeaderColumn
              dataField="period"
              className="td-header-class"
              width="30"
              tdStyle={{ textAlign: "center", lineHeight: "35px" }}
              thStyle={{ textAlign: "center", lineHeight: "35px" }}
          >
            Period
          </TableHeaderColumn>
          <TableHeaderColumn
            dataFormat={statusFormat}
            className="td-header-class"
            width="30"
            tdStyle={{ textAlign: "center", lineHeight: "35px" }}
            thStyle={{ textAlign: "center", lineHeight: "35px" }}
          >
            Status
          </TableHeaderColumn>
          <TableHeaderColumn
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
