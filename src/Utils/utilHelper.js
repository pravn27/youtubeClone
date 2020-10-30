// Total number of views count format
const COUNT_ABBRS = ["", "K", "M", "G", "T", "P", "E", "Z", "Y"];
export const formatViewsCount = (count, withAbbr = false, decimals = 2) => {
  const i = 0 === count ? count : Math.floor(Math.log(count) / Math.log(1000));
  let result = parseFloat((count / Math.pow(1000, i)).toFixed(decimals));
  if (withAbbr) {
    result += `${COUNT_ABBRS[i]}`;
  }
  return result;
};

// uploaded message format time
export const messageFormat = (text) => {
  const wordsList = text.split(" ");
  if (wordsList[0] === "Streamed") {
    wordsList.shift();
    return wordsList.join(" ");
  }
  return text;
};
