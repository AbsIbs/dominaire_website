const capitalize = (str) => {
  return str.charAt(0).toUpperCase() + str.slice(1);
};

const formatClientTitle = (title) => {
  // Format the client title from the URL to match the title on the backend
  const splitTitle = title.split("-");

  if (splitTitle.length == 1) {
    return capitalize(splitTitle[0]);
  } else {
    return splitTitle.map((item) => capitalize(item)).join(" ");
  }
};

export default formatClientTitle;
