const getTimeString = (milliseconds: number) => {
  const date = new Date(milliseconds);
  return `
  ${date.getMinutes().toString().padStart(2, "0")}:${date
    .getSeconds()
    .toString()
    .padStart(2, "0")}:${date.getMilliseconds().toString().padStart(2, "0")}`;
};
export default getTimeString;
