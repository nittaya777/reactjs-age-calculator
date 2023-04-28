import "./App.css";
import { HiArrowDown } from "react-icons/hi";
import { useState } from "react";
import AgeString from "./AgeString";
import AgeSelect from "./AgeSelect";
import {CalculateAge} from './fnc'


function App() {
  const [isInvalid, setIsInvalid] = useState({});
  const [dob, setDateOfBirth] = useState({});
  const [val, setVal] = useState({
    year: null,
    month: null,
    day: null,
  });

  const handleChange = (e) => {
    const regex = /^[0-9\b]+$/;
    if (e.target.value === "" || !regex.test(e.target.value)) {
      setIsInvalid((prev) => ({ ...prev, [e.target.name]: true }));
    } else {
      setIsInvalid((prev) => ({ ...prev, [e.target.name]: false }));
      setVal((prev) => ({ ...prev, [e.target.name]: [e.target.value] }));
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let err = false;
    const regex = /^[0-9\b]+$/;
    for (const key in val) {
      if (val[key] === "" || !regex.test(val[key])) {
        err = true;
        setIsInvalid((prev) => ({ ...prev, [key]: true }));
      } else {
        err = false;
        setIsInvalid((prev) => ({ ...prev, [key]: false }));
      }
    }
    if (!err) {
      const ageObj = CalculateAge(`${val.month} ${val.day} ${val.year}`);
      setDateOfBirth(ageObj);
    }
  };
  return (
    <div className="container">
      <h1>Age Calculate</h1>
      <div>
        <div className="card">
          <div className="flex-container">
            <div className="flex-item">
              <label>Day</label>
              <input
                type="text"
                name="day"
                placeholder="dd"
                className={isInvalid.day ? "invalid" : ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex-item">
              <label>Month</label>
              <input
                type="text"
                name="month"
                placeholder="mm"
                className={isInvalid.month ? "invalid" : ""}
                onChange={handleChange}
              />
            </div>
            <div className="flex-item">
              <label>Year</label>
              <input
                type="text"
                name="year"
                placeholder="yyyy"
                className={isInvalid.year ? "invalid" : ""}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="state-btn">
            <hr />
            <button className="circle-btn" onClick={handleSubmit}>
              <HiArrowDown size="45" />
            </button>
          </div>
          <AgeString dob={dob} />
        </div>
      </div>

      <AgeSelect/>
     
    </div>
  );
}

export default App;
