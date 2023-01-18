import React, { Component } from "react";
import "./myStyles.css";
import Edit from "./edit1.jpg";
import Delete from "./delete2.png";
import Swal from "sweetalert2";
import MicrosoftTeamsImage from "./MicrosoftTeams-image.png";
import Contacts from "./Contacts";
import FlexItem4_1 from "./FlexItem4_1";
import { IDataInput } from "./IDataInput";

interface stateTypeInBottomComponent {
  countAsProps: number;
  data: IDataInput[];
  Id: number;
  previousId: number;
  controlVariable: number;
  address: string;
  isValid: boolean;
  values: typeOfValuesObject;
  y: IDataInput[];
  x: number;
  hideVariable: number;
}
type typeOfValuesObject = {
  name: string;
  email: string;
  mobile: string;
  landLine: string;
  webSite: string;
  address: string;
};
export class Bottom extends Component<any, stateTypeInBottomComponent> {
  constructor(props: any) {
    super(props);
    var c = 0;
    var y: IDataInput[];
    const initialFieldValues = {
      name: "",
      email: "",
      mobile: "",
      landLine: "",
      webSite: "",
      address: "",
    };
    var data: IDataInput[] = [];
    var Id: number;
    this.state = {
      countAsProps: 0,
      data: data,
      Id: 0,
      previousId: 0,
      controlVariable: 0,
      address: "",
      isValid: false,
      values: initialFieldValues,
      y: [],
      hideVariable: 1,
      x: 0,
    };
  }

  componentDidMount() {
    this.setState({ y: JSON.parse(localStorage.getItem("data")!) || [] });
    this.setState({ data: this.state.y });
    this.setState({ isValid: true });
    this.setState({ controlVariable: 0 });
    this.setState({ Id: -1 });
    this.setState({ x: 1 });
  }

  render() {
    const imgStyling = { paddingTop: "3px" };
    let count = 0;
    const handleClickOfMainAddButton = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      this.setState({ hideVariable: 0 });
      if (this.state.Id != -1 && this.state.Id != undefined) {
        var removeBackgroundColor = document.getElementById(
          this.state.Id.toString()
        ) as HTMLDivElement;
        removeBackgroundColor.style.backgroundColor = "white";
      }
      document.getElementsByClassName("flexItem4-3")[0].innerHTML = "";
      var id1 = document.getElementById("addNewMember") as HTMLButtonElement;
      id1.classList.remove("hoverOnDivision2");
      id1.classList.add("homeButtonStyling");
      var id2 = document.getElementById("homeButton") as HTMLButtonElement;
      id2.classList.remove("homeButtonStyling");
      var id3 = document.getElementsByClassName(
        "flexItem4-2"
      )[0] as HTMLDivElement;
      id3.style.display = "block";
      var hideIcons = document.getElementsByClassName(
        "flexItem4-4"
      )[0] as HTMLDivElement;
      hideIcons.style.display = "none";
    };

    var id2 = document.getElementsByClassName(
      "homeButtonStyling"
    )[0] as HTMLButtonElement;

    const handleClickOfCloseButton = () => {
      id2.classList.remove("homeButtonStyling");
    };
    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      let { name, value } = e.target;
      if (name == "name" && value != undefined && value != "") {
        value = value[0].toUpperCase() + value.substring(1);
      }
      this.setState({
        values: {
          ...this.state.values,
          [name]: value,
        },
      });
    };

    var handleAddressInput = (
      event: React.ChangeEvent<HTMLTextAreaElement>
    ) => {
      this.setState({ address: (event.target as HTMLTextAreaElement).value });
      var add = (event.target as HTMLTextAreaElement).value;
      this.state.values.address = add;
    };
    const handleClickOfSubAddButton = (
      event: React.MouseEvent<HTMLButtonElement>
    ) => {
      event.preventDefault();
      formValidation();
    };

    const formValidation = () => {
      count = 0;
      console.log(this.state.values);
      if (
        this.state.values.name == "" ||
        this.state.values.mobile == "" ||
        this.state.values.landLine == "" ||
        this.state.values.email == "" ||
        this.state.values.address == "" ||
        this.state.values.webSite == ""
      ) {
        Swal.fire({
          title: "Error",
          icon: "error",
          text: "Please fill all the required fields below",
        });
      }
      if (
        this.state.values.name == "" ||
        this.state.values.address == "" ||
        this.state.values.webSite == ""
      ) {
      } else {
        count = count + 1;
      }
      if (this.state.values.email != "") {
        var regx1 = /^([a-z])([a-z 0-9]+)@([a-z]+)\.([a-z]+)$/;
        if (!regx1.test(this.state.values.email)) {
          Swal.fire({
            title: "Error",
            html:
              "<ul id=sweetAlertFormat>" +
              "<li>Email Format Should be xyz123@gmail.com</li>" +
              "<li>MobileNumber should be 10 digits</li>" +
              "<li>LandLine should be 12 digits</li>" +
              "</ul>",
            icon: "error",
          });
        } else {
          count = count + 1;
        }
      }
      if (this.state.values.mobile != "") {
        var regx2 = /^[7-9][0-9]{9}$/;
        if (!regx2.test(this.state.values.mobile)) {
          Swal.fire({
            title: "Error",
            icon: "error",
            html:
              "<ul id=sweetAlertFormat>" +
              "<li>Email Format Should be xyz123@gmail.com</li>" +
              "<li>MobileNumber should be 10 digits</li>" +
              "<li>LandLine should be 12 digits</li>" +
              "</ul>",
          });
        } else {
          count = count + 1;
        }
      }
      if (this.state.values.landLine != "") {
        var regx3 = /^[0][0-9]{11}$/;
        if (!regx3.test(this.state.values.landLine)) {
          Swal.fire({
            title: "Error",
            html:
              "<ul id=sweetAlertFormat>" +
              "<li>Email Format Should be xyz123@gmail.com</li>" +
              "<li>MobileNumber should be 10 digits</li>" +
              "<li>LandLine should be 12 digits</li>" +
              "</ul>",
            icon: "error",
          });
        } else {
          count = count + 1;
        }
      }
      if (count == 4) {
        Swal.fire({
          title: "Success",
          icon: "success",
          text: "Form is successfully submitted",
        });
        this.setState({ countAsProps: 4 });
        var id2 = document.getElementById("homeButton") as HTMLButtonElement;
        id2.classList.add("homeButtonStyling");
        if (this.state.controlVariable == 1) {
          deleteDataInBottom();
        }
        acceptData();
      }
    };

    let acceptData = () => {
      this.setState({ y: JSON.parse(localStorage.getItem("data")!) || [] });
      this.setState({ data: this.state.y });
      this.state.data.push(this.state.values);
      this.setState({ data: this.state.data });
      localStorage.setItem("data", JSON.stringify(this.state.data));
      createTasks();
    };
    let createTasks = () => {
      this.setState({ hideVariable: 1 });
      this.setState({ y: JSON.parse(localStorage.getItem("data")!) || [] });
      this.setState({ data: JSON.parse(localStorage.getItem("data")!) || [] });
      this.setState({ isValid: true });
      resetForm();
    };
    let resetForm = () => {
      (document.getElementById("name") as HTMLInputElement).value = "";
      (document.getElementById("email") as HTMLInputElement).value = "";
      (document.getElementById("webSite") as HTMLInputElement).value = "";
      (document.getElementById("mobile") as HTMLInputElement).value = "";
      (document.getElementById("landLine") as HTMLInputElement).value = "";
      (document.getElementById("address") as HTMLTextAreaElement).value = "";

      var id1 = document.getElementById("addNewMember") as HTMLButtonElement;
      id1.classList.add("hoverOnDivision2");
      id1.classList.remove("homeButtonStyling");
      var id2 = document.getElementById("homeButton") as HTMLButtonElement;
      id2.classList.add("homeButtonStyling");
      var flexItem4_2 = document.getElementsByClassName(
        "flexItem4-2"
      )[0] as HTMLDivElement;
      flexItem4_2.style.display = "none";
      var flexItem4_4 = document.getElementsByClassName(
        "flexItem4-4"
      )[0] as HTMLDivElement;
      flexItem4_4.style.display = "block";
    };

    const deleteData = (id: number) => {
      this.setState({ Id: id });
    };

    const deleteDataInBottom = () => {
      if (this.state.controlVariable == 1) {
        var id1 = document.getElementById(
          this.state.Id.toString()
        ) as HTMLDivElement;
        id1.style.backgroundColor = "white";
        this.state.data.splice(this.state.previousId, 1);
        localStorage.clear();
        localStorage.setItem("data", JSON.stringify(this.state.data));
        this.setState({ data: JSON.parse(localStorage.getItem("data")!) });
        this.setState({ controlVariable: 0 });
        createTasks();
        this.setState({ Id: -1 });
      } else {
        if (this.state.Id != undefined && this.state.Id != -1) {
          Swal.fire({
            title: "Are you sure, you want to delete the record?",
            showDenyButton: true,
            showCancelButton: false,
            confirmButtonText: `Ok`,
            denyButtonText: `Cancel`,
          }).then((result) => {
            if (result.isConfirmed) {
              if (this.state.Id != undefined && this.state.Id != -1) {
                document.getElementsByClassName("flexItem4-3")[0].innerHTML =
                  "";
                this.state.data.splice(this.state.Id, 1);
                localStorage.clear();
                localStorage.setItem("data", JSON.stringify(this.state.data));
                this.setState({
                  data: JSON.parse(localStorage.getItem("data")!),
                });
                createTasks();
                var id1 = document.getElementById(
                  this.state.Id.toString()
                ) as HTMLDivElement;
                id1.style.backgroundColor = "white";
                this.setState({ Id: -1 });
              }
            } else {
              Swal.fire("Record not deleted");
            }
          });
        }
      }
    };

    const editDataInBottom = () => {
      if (this.state.Id != -1 && this.state.Id != undefined) {
        let flexItem4_2 = document.getElementsByClassName(
          "flexItem4-2"
        )[0] as HTMLDivElement;
        flexItem4_2.style.display = "block";
        let flexItem4_4 = document.getElementsByClassName(
          "flexItem4-4"
        )[0] as HTMLDivElement;
        flexItem4_4.style.display = "none";
        let flexItem4_3 = document.getElementsByClassName(
          "flexItem4-3"
        )[0] as HTMLDivElement;
        flexItem4_3.innerHTML = "";
        this.state.data.map((x: any, y: any) => {
          if (y == this.state.Id) {
            this.setState({ values: x }, () => {
              (document.getElementById("name") as HTMLInputElement).value =
                this.state.values.name;
              (document.getElementById("email") as HTMLInputElement).value =
                this.state.values.email;
              (document.getElementById("webSite") as HTMLInputElement).value =
                this.state.values.webSite;
              (document.getElementById("mobile") as HTMLInputElement).value =
                this.state.values.mobile;
              (document.getElementById("landLine") as HTMLInputElement).value =
                this.state.values.landLine;
              (
                document.getElementById("address") as HTMLTextAreaElement
              ).value = this.state.values.address;
            });
          }
        });

        this.setState({ controlVariable: 1 });
        this.setState({ previousId: this.state.Id });
        this.setState({ Id: this.state.Id });
      }
    };

    if (this.state.x == 1) {
      createTasks();
      this.setState({ x: 0 });
    }
    return (
      <div>
        <div className="container2">
          <div className="item2-1">
            <button
              className=" homeButtonStyling hoverOnDivision1 buttonStyling1 "
              id="homeButton"
            >
              Home
            </button>
          </div>
          <div className="item2-1">
            <button
              className="hoverOnDivision2 hoverOnDivision1 buttonStyling1 "
              id="addNewMember"
              onClick={handleClickOfMainAddButton}
            >
              +Add
            </button>
          </div>
          <div id="item2-2">
            <img
              src={MicrosoftTeamsImage}
              alt="MicrosoftImage"
              width="20px"
              height="20px"
              style={imgStyling}
            />
          </div>
        </div>
        <Contacts />
        <div className="container4">
          {this.state.isValid ? (
            <FlexItem4_1
              values={this.state.values}
              data={this.state.data}
              count={this.state.countAsProps}
              deleteData={deleteData}
              hideVariable={this.state.hideVariable}
            />
          ) : null}
          <div className="flexItem4-2">
            <form>
              <table className="mainTableStyling">
                <thead></thead>
                <tbody>
                  <tr>
                    <td className="alignLeft">Name</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input
                        onChange={handleInputChange}
                        id="name"
                        name="name"
                        className="tableStyling1"
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="alignLeft">Email</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input
                        id="email"
                        name="email"
                        className="tableStyling1"
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="alignLeft">Mobile</td>
                    <td className="alignLeft">Landline</td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        id="mobile"
                        name="mobile"
                        className="tableStyling2"
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                    </td>
                    <td>
                      <input
                        id="landLine"
                        name="landLine"
                        className="tableStyling2"
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="alignLeft">Website</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <input
                        id="webSite"
                        name="webSite"
                        className="tableStyling1"
                        onChange={handleInputChange}
                        autoComplete="off"
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="alignLeft">Address</td>
                  </tr>
                  <tr>
                    <td colSpan={2}>
                      <textarea
                        rows={6}
                        cols={30}
                        name="address"
                        className="tableStyling1"
                        id="address"
                        onChange={handleAddressInput}
                        autoComplete="off"
                      ></textarea>
                    </td>
                  </tr>
                  <tr>
                    <td colSpan={3}>
                      <button
                        type="submit"
                        id="button1"
                        onClick={handleClickOfSubAddButton}
                      >
                        Add
                      </button>
                      <button id="button2" onClick={handleClickOfCloseButton}>
                        Close
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </form>
          </div>
          <div className="flexItem4-3"></div>
          <div className="flexItem4-4">
            <table>
              <thead></thead>
              <tbody>
                <tr>
                  <td>
                    <img
                      src={Edit}
                      width="15px"
                      height="15px"
                      id="editDetails"
                      onClick={() => editDataInBottom()}
                    />
                  </td>
                  <td>
                    <span className="editDeleteStyling">EDIT</span>
                  </td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td>
                    <img
                      src={Delete}
                      width="15px"
                      height="25px"
                      id="deleteDetails"
                      onClick={() => deleteDataInBottom()}
                    />
                  </td>
                  <td>
                    <span className="editDeleteStyling">DELETE</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default Bottom;
