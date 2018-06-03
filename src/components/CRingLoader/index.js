import React, { Component } from "react";
import { RingLoader } from "react-spinners";
import "./style.css";

export default class CRingLoader extends Component {
  render() {
    const { is_show } = this.props;

    return (
      <div>
        {is_show && (
          <div className={"loading_bar__container"}>
            <RingLoader
              color={"#fff"}
              loading={true}
              size={100}
              className={"loading_bar"}
            />
            <span>LOADING...</span>
          </div>
        )}
      </div>
    );
  }
}
