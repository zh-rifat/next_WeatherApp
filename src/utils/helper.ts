export const formatTime = (timeStamp: number) => {
  const date = new Date(timeStamp * 1000);
  let hours = date.getHours()%12;
  if (hours === 0) {
    hours = 12;
  }
  const minutes = "0" + date.getMinutes();
  const amPm = date.getHours() >= 12 ? "PM" : "AM";
  const formattedTime = hours + ":" + minutes.slice(-2) + " " + amPm;
  return formattedTime;
};
export const splitStringAtFirstSpace = (string: string) => {
  const firstSpaceIndex = string.indexOf(" ");
  if (firstSpaceIndex === -1) {
    return [string, ""];
  } else {
    return [
      string.slice(0, firstSpaceIndex),
      string.slice(firstSpaceIndex + 1),
    ];
  }
};
