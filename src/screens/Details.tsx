import React, { useState, useEffect } from "react";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";
import DateFnsUtils from "@date-io/date-fns";
import Card from "../components/Card";

import Button from "../components/Button";
import { faHouse } from "@fortawesome/free-solid-svg-icons";
import { faBuilding } from "@fortawesome/free-solid-svg-icons";
import { faWarehouse } from "@fortawesome/free-solid-svg-icons";

import {
  MuiPickersUtilsProvider,
  KeyboardDatePicker,
} from "@material-ui/pickers";

import { createStyles, makeStyles, Theme } from "@material-ui/core/styles";
import states from "../components/List/stateList";
import residencies from "../components/List/recidencyList";
import occupations from "../components/List/occupationList";
import industries from "../components/List/industryList";
import educations from "../components/List/educationList";
import Deductibilities from "../components/List/deductibility";
import "./Details.css";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      "& .MuiTextField-root": {
        margin: theme.spacing(1),
        width: "25ch",
      },
    },
  })
);

const Details = () => {
  const [firstName, setFirstName] = useState("");
  const [middleName, setMiddleName] = useState("");
  const [lastName, setLastName] = useState("");
  const [address, setAddress] = useState("");
  const [unit, setUnit] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipCode, setZipCode] = useState<Number | null>(0);
  const [phoneNum, setPhoneNum] = useState(0);
  const [email, setEmail] = useState("");
  const [deductible, setDeductible] = useState("1000");
  const [selectedDate, setSelectedDate] = React.useState<Date | null>(
    new Date()
  );
  const [residencyStatus, setResidencyStatus] = useState("Primary");
  const [industry, setIndustry] = useState("Select");
  const [occupation, setOccupation] = useState("Select");
  const [education, setEducation] = useState("Select");
  const [errMessageFirstName, setErrMessageFirstName] = useState("");
  const [errMessageLastName, setErrMessageLastName] = useState("");
  const [errMessageAddress, setErrMessageAddress] = useState("");
  const [errMessageCity, setErrMessageCity] = useState("");
  const [errMessageState, setErrMessageState] = useState("");
  const [errMessageZipCode, setErrMessageZipCode] = useState("");
  const [errMessagePhoneNum, setErrMessagePhoneNum] = useState("");
  const [errMessageEmail, setErrMessageEmail] = useState("");
  const [errMessageIndustry, setErrMessageIndustry] = useState("");
  const [errMessageOccupation, setErrMessageOccupation] = useState("");
  const [errMessageEducation, setErrMessageEducation] = useState("");

  const handleInput = (event: React.ChangeEvent<HTMLInputElement>) => {
    switch (event.target.id) {
      case "firstname":
        setFirstName(event.target.value);
        break;
      case "middlename":
        setMiddleName(event.target.value);
        break;
      case "lastname":
        setLastName(event.target.value);
        break;
      case "streetaddress":
        setAddress(event.target.value);
        break;
      case "unit":
        setUnit(event.target.value);
        break;
      case "city":
        setCity(event.target.value);
        break;
      case "zipcode":
        setZipCode(parseInt(event.target.value));
        break;
      case "phonenumber":
        setPhoneNum(parseInt(event.target.value));
        break;
      case "emailaddress":
        setEmail(event.target.value);
        break;
    }
  };

  const handleState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setState(event.target.value);
  };
  const handleDeductible = (event: React.ChangeEvent<HTMLInputElement>) => {
    setDeductible(event.target.value);
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log(selectedDate?.toLocaleDateString().toString());
  };

  const handleResidency = (event: React.ChangeEvent<HTMLInputElement>) => {
    setResidencyStatus(event.target.value);
  };

  const handleIndustry = (event: React.ChangeEvent<HTMLInputElement>) => {
    console.log(event.target.id);
    setIndustry(event.target.value);
  };

  const handleOccupation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setOccupation(event.target.value);
  };
  const handleEducation = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEducation(event.target.value);
  };

  const ValidateFirstName = () => {
    if (firstName === null || firstName === "") {
      setErrMessageFirstName("First name can't be blank");
    } else if (firstName.length < 4) {
      setErrMessageFirstName("first name should contain min 3 characters");
    } else if (firstName.match(/\d/)) {
      setErrMessageFirstName("first name can't contain numbers");
    } else {
      setErrMessageFirstName("");
    }
  };

  const ValidateLastName = () => {
    if (lastName === null || lastName === "") {
      setErrMessageLastName("last name can't be blank");
    } else if (lastName.length < 4) {
      setErrMessageLastName("last name should contain min 3 characters");
    } else if (lastName.match(/\d/)) {
      setErrMessageLastName("last name can't contain numbers");
    } else {
      setErrMessageLastName("");
    }
  };

  const ValidateStreetAddress = () => {
    if (address === null || address === "") {
      setErrMessageAddress("Address can't be left Blank");
    } else {
      setErrMessageAddress("");
    }
  };

  const ValidateCity = () => {
    if (city === null || city === "") {
      setErrMessageCity("city can't be left Blank");
    } else if (city.match(/\d/)) {
      setErrMessageCity("city can't contain numbers");
    } else {
      setErrMessageCity("");
    }
  };

  const ValidateZipCode = () => {
    if (zipCode === null) {
      setErrMessageZipCode("zip code can't be empty");
    } else if (zipCode.toString().length > 6) {
      setErrMessageZipCode("Zip code can't be greater than 6 digits.");
    } else {
      setErrMessageZipCode("");
    }
  };

  const ValidatePhoneNum = () => {
    if (phoneNum.toString().length < 1) {
      setErrMessagePhoneNum("Phone field can't be empty");
      console.log(phoneNum.toString().length);
    } else if (phoneNum.toString().length > 11) {
      setErrMessagePhoneNum("Phone number can't be greater than 10 digits.");
    } else {
      setErrMessagePhoneNum("");
      console.log(phoneNum.toString().length);
    }
  };

  const ValidateEmail = () => {
    if (email === "" || email === null) {
      setErrMessageEmail("Email can't be empty");
    } else if (!email.match("^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$")) {
      setErrMessageEmail("Email is invalid");
    } else {
      setErrMessageEmail("");
    }
  };
  const ValidateIndustry = () => {
    if (industry === "Select") {
      setErrMessageIndustry("Please select a valid option.");
    } else {
      setErrMessageIndustry("");
    }
  };

  const ValidateOccupation = () => {
    if (occupation === "Select") {
      setErrMessageOccupation("Please select a valid option.");
    } else {
      setErrMessageOccupation("");
    }
  };

  const ValidateEducation = () => {
    if (education === "Select") {
      setErrMessageEducation("Please select a valid option.");
    } else {
      setErrMessageEducation("");
    }
  };

  const ValidateState = () => {
    if (state === "Select") {
      setErrMessageState("Please select a valid option.");
    } else {
      setErrMessageState("");
    }
  };
  useEffect(() => {
    ValidateFirstName();
    ValidateLastName();
    ValidateStreetAddress();
    ValidateCity();
    ValidateZipCode();
    ValidatePhoneNum();
    ValidateEmail();
    ValidateIndustry();
    ValidateOccupation();
    ValidateEducation();
    ValidateState();
  });

  return (
    <div>
      <div className="container">
        <div className="main_div">
          <div className="input_div">
            <label htmlFor="firstname" className="label_style">
              First Name<i className="input_required">*</i>
            </label>
            <input
              id="firstname"
              type="text"
              className="input_style"
              value={firstName}
              onChange={handleInput}
            />
            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessageFirstName}
            </p>
          </div>

          <div className="input_div">
            <label htmlFor="middlename" className="label_style">
              Middle Name
            </label>
            <input
              value={middleName}
              id="middlename"
              type="text"
              className="input_style"
              onChange={handleInput}
            />
          </div>

          <div className="input_div">
            <label htmlFor="lasttname" className="label_style">
              Last Name<i className="input_required">*</i>
            </label>
            <input
              id="lastname"
              type="text"
              className="input_style"
              onChange={handleInput}
            />
            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessageLastName}
            </p>
          </div>
        </div>

        <div className="main_div">
          <div className="input_div_address">
            <label htmlFor="streetaddress" className="label_style">
              Street address
              <i className="input_required">*</i>
            </label>
            <input
              id="streetaddress"
              type="text"
              className="input_style_address"
              onChange={handleInput}
            />

            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessageAddress}
            </p>
          </div>

          <div className="input_div">
            <label htmlFor="unit" className="label_style">
              Unit #
            </label>
            <input
              id="unit"
              type="text"
              className="input_style"
              onChange={handleInput}
              value={unit}
            />
          </div>
        </div>

        <div className="main_div">
          <div className="input_div">
            <label htmlFor="city" className="label_style">
              City<i className="input_required">*</i>
            </label>
            <input
              id="city"
              type="text"
              className="input_style"
              onChange={handleInput}
            />
            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessageCity}
            </p>
          </div>

          {/* <div className="input_div">
            <label htmlFor="state" className="label_style">
              State<i className="input_required">*</i>
            </label>
            <input
              id="state"
              type="text"
              className="input_style"
              onChange={handleInput}
            />
          </div> */}

          <div className="dropdown_div">
            <TextField
              id="state"
              select
              label="State"
              placeholder="State"
              value={state}
              onChange={handleState}
              style={{ width: 200 }}
            >
              {states.map((option) => (
                <MenuItem key={option.key} value={option.name}>
                  {option.name}
                </MenuItem>
              ))}
            </TextField>

            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessageState}
            </p>
          </div>

          <div className="input_div">
            <label htmlFor="zipcode" className="label_style">
              Zip Code<i className="input_required">*</i>
            </label>
            <input
              id="zipcode"
              type="number"
              className="input_style"
              onChange={handleInput}
            />

            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessageZipCode}
            </p>
          </div>
        </div>

        <div className="main_div">
          <div className="input_div_phone">
            <label htmlFor="phonenumber" className="label_style">
              Phone Number<i className="input_required">*</i>
            </label>
            <input
              id="phonenumber"
              type="number"
              className="input_style_phone"
              onChange={handleInput}
            />

            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessagePhoneNum}
            </p>
          </div>

          <div className="input_div_email">
            <label htmlFor="emailaddress" className="label_style">
              Email Address<i className="input_required">*</i>
            </label>
            <input
              id="emailaddress"
              type="email"
              className="input_style_email"
              onChange={handleInput}
            />

            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessageEmail}
            </p>
          </div>
        </div>

        <div className="main_div">
          <div className="dropdown_div">
            <TextField
              required
              id="deductible"
              select
              label="Preferred Deductible"
              value={deductible}
              onChange={handleDeductible}
              style={{ width: 200 }}
            >
              {Deductibilities.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>

          <div className="dropdown_div_dob">
            <MuiPickersUtilsProvider utils={DateFnsUtils}>
              <KeyboardDatePicker
                required
                variant="inline"
                format="MM/dd/yyyy"
                margin="normal"
                id="date-picker-inline"
                label="Date Of Birth"
                value={selectedDate}
                onChange={handleDateChange}
                KeyboardButtonProps={{
                  "aria-label": "change date",
                }}
              />
            </MuiPickersUtilsProvider>
          </div>
          <div className="dropdown_div">
            <TextField
              id="residenystatus"
              select
              label="Residency Status"
              placeholder="Primary"
              value={residencyStatus}
              onChange={handleResidency}
              style={{ width: 200 }}
            >
              {residencies.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>

        <div className="main_div">
          <div className="dropdown_div">
            <TextField
              required
              id="industry"
              select
              label="Industry"
              value={industry}
              onChange={handleIndustry}
              style={{ width: 200 }}
            >
              {industries.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessageIndustry}
            </p>
          </div>

          <div className="dropdown_div">
            <TextField
              required
              id="occupation"
              select
              label="Occupation"
              value={occupation}
              onChange={handleOccupation}
              style={{ width: 200 }}
            >
              {occupations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessageOccupation}
            </p>
          </div>
          <div className="dropdown_div">
            <TextField
              required
              id="education"
              select
              label="Education"
              value={education}
              onChange={handleEducation}
              style={{ width: 200 }}
            >
              {educations.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>

            <p style={{ fontSize: "10px", color: "red", fontWeight: "bold" }}>
              {errMessageEducation}
            </p>
          </div>
        </div>
        <div className="main_div_card">
          <Card
            icon={faHouse}
            header="House"
            content="This may be a single-family home, townhouse or duplex you own and live in"
          />
          <Card
            icon={faBuilding}
            header="Condo"
            content="This is likely a multi-family building or complex in which you own a unit"
          />
          <Card
            icon={faWarehouse}
            header="HO5"
            content="The HO5 is an open perils insurance policy for a single-family home or duplex"
          />
        </div>
      </div>
      {/* <Button variant="contained">Continue</Button> */}
      <Button />
    </div>
  );
};

export default Details;
