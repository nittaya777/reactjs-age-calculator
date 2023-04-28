import React, { useState } from "react";
import { HiArrowDown } from "react-icons/hi";
import AgeString from "./AgeString";
import { CalculateAge, generateArray } from "./fnc";

const Input = ({ name, arr, handleChange, val }) => {
  let options = arr.map((item) => (
    <option value={item} key={item}>
      {item}
    </option>
  ));
  return (
    <select name={name} onChange={handleChange} value={val}>
      {options}
    </select>
  );
};

const AgeSelect = () => {
  const [dob, setDateOfBirth] = useState({});

  const [selectedDay, setSelectedDay] = useState("1");
  const [selectedMonth, setSelectedMonth] = useState("Jan");
  const [selectedYear, setSelectedYear] = useState("1970");

  const days = generateArray(1, 31);
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const years = generateArray(1970, new Date().getFullYear());

  const handleDaysChange = (e) => {
    setSelectedDay(e.target.value);
  };
  const handleMonthsChange = (e) => {
    setSelectedMonth(e.target.value);
  };
  const handleYearsChange = (e) => {
    setSelectedYear(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const ageObj = CalculateAge(`${selectedMonth} ${selectedDay} ${selectedYear}`);
    setDateOfBirth(ageObj);
  };

  return (
    <div className="select-card">
      <div className="card">
        <div className="flex-container">
          <div className="flex-item">
            <label>Day</label>
            <Input
              name="day"
              arr={days}
              handleChange={handleDaysChange}
              val={selectedDay}
            />
          </div>
          <div className="flex-item">
            <label>Month</label>
            <Input
              name="month"
              arr={months}
              handleChange={handleMonthsChange}
              val={selectedMonth}
            />
          </div>
          <div className="flex-item">
            <label>Year</label>
            <Input
              name="year"
              arr={years}
              handleChange={handleYearsChange}
              val={selectedYear}
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
  );
};
export default AgeSelect;
