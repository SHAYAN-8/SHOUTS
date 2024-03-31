const useTime = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];

  const now = new Date();
  const date = now.getDate();
  const month = months[now.getMonth()];
  let hours = now.getHours();
  let minutes = now.getMinutes();

  // Add leading zero if minutes is less than 10
  minutes = minutes < 10 ? "0" + minutes : minutes;

  const timeFormat = hours >= 12 ? "pm" : "am";
  hours = hours % 12;
  hours = hours ? hours : 12; // Handle midnight (0 hours)

  const time = `${date} ${month}, ${hours}:${minutes} ${timeFormat}`;

  return time;
};
export default useTime;
