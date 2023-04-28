export const CalculateAge = (birthday) => {
  //milliseconds in a year 1000*24*60*60*365.24 = 31556736000;
  let today = new Date();
  let dob = new Date(birthday);
  let diffMillisec = today.getTime() - dob.getTime();

  //convert milliseconds into years
  let years = Math.floor(diffMillisec / 31556736000);

  //1 day has 86400000 milliseconds
  let days_diff = Math.floor((diffMillisec % 31556736000) / 86400000);

  //1 month has 30.4167 days
  let months = Math.floor(days_diff / 30.4167);
  let days = Math.floor(days_diff % 30.4167);

  return {
    years,
    months,
    days,
  };
};

export const generateArray = (start, end) => {
  let arr = [];
  for (start; start <= end; start++) {
    arr.push(start);
  }
  return arr;
};
