import React, { useEffect, useState } from "react";
import "./Form.css";

const Form = () => {
  const [email, setemail] = useState("");

  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <div className="Form-container">
      <h5 className="heading1">Contact us</h5>
      <h2 className="heading2">Make an appointment</h2>

      <h2 className="heading3">Book Appointment</h2>

      <div className="form">
        <div className="firstsection">
          <input
            required={true}
            placeholder="Full Name *"
            className="firstname"
            name="FirstName"
          />
          <input
            required={true}
            placeholder="Email *"
            className="firstname"
            name="FirstName"
            type="email"
            value={email}
            onChange={(t) => setemail(t)}
          />
        </div>

        <div className="firstsection2">
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "500",
            }}
          >
            <p>Name *</p>
            <input
              required={true}
              placeholder="Full Name *"
              className="firstname"
              name="FirstName"
            />
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "500",
            }}
          >
            <p>Email address *</p>
            <input
              required={true}
              placeholder="example@gmail.com"
              className="firstname"
              name="FirstName"
              type="email"
            />
          </div>
        </div>

        <div
          className="firstsection2"
          style={{ margin: 20, marginRight: 0, marginLeft: 0 }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "500",
            }}
          >
            <p>Department *</p>
            <select className="selectoption" value="Please Select">
              <option value="">Please Select</option>
              <option value="Value1">Please Select2</option>
              <option value="Value2">Please Select3</option>
            </select>
          </div>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              fontWeight: "500",
            }}
          >
            <p>Time *</p>
            <select className="selectoption" value="Please Select">
              <option value="">4:00 Available</option>
              <option value="Value1">Please Select2</option>
              <option value="Value2">Please Select3</option>
            </select>
          </div>
        </div>

        <div
          className="firstsection"
          style={{ margin: 20, marginRight: 0, marginLeft: 0 }}
        >
          <select className="selectoption" value="Please Select">
            <option value="">Please Select</option>
            <option value="Value1">Please Select2</option>
            <option value="Value2">Please Select3</option>
          </select>
          <select className="selectoption" value="Please Select">
            <option value="">4:00 Available</option>
            <option value="Value1">Please Select2</option>
            <option value="Value2">Please Select3</option>
          </select>
        </div>

        <div className="firstsection">
          <textarea className="message" name="message" placeholder="Message" />
        </div>
      </div>

      <div className="button">
        <button className="appointment">Book appointment</button>
      </div>
    </div>
  );
};

export default Form;
