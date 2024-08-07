const capitalizeFirstLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
};

const FormatClientTitle = ({ title }) => {
  // Change the client title from the url to match the name on the backend
  const splitTitle = title.split("-");
  return splitTitle.map((word) => capitalizeFirstLetter(word)).join(" ");
};

export default FormatClientTitle;
