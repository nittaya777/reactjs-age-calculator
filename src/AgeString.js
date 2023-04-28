const AgeString = ({ dob }) => {
    return (
      <div className="stats">
        <div>
          <span>{!isNaN(dob.years) ? dob.years : "--"}</span> years
        </div>
        <div>
          <span>{!isNaN(dob.months) ? dob.months : "--"}</span> months
        </div>
        <div>
          <span>{!isNaN(dob.days) ? dob.days : "--"}</span> days
        </div>
      </div>
    );
  };
  export default AgeString;