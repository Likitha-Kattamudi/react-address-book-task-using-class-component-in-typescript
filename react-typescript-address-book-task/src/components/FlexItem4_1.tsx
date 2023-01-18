import React, { Component } from "react";
import DisplayDataInAddressBook from "./DisplayDataInAddressBook";
import { IDataInput } from "./IDataInput";
import "./myStyles.css";
type multipleDataAsProps = {
  values: IDataInput;
  data: IDataInput[];
  count: number;
  deleteData: (id: number) => void;
  hideVariable: number;
};
export class FlexItem4_1 extends Component<multipleDataAsProps> {
  render() {
    return (
      <div className="flexItem4-1">
        <div>
          <DisplayDataInAddressBook
            values={this.props.values}
            data={this.props.data}
            deleteData={this.props.deleteData}
            hideVariable={this.props.hideVariable}
          />
        </div>
      </div>
    );
  }
}

export default FlexItem4_1;
