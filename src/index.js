module.exports = function check(str, bracketsConfig) {
  if (typeof str !== 'string') return false;
  let bracket = "";
  let liken = "";
  let count;

  while (count !== bracketsConfig.length) {
      count = 0;
      for (i = 0; i < bracketsConfig.length; i++) {
      bracket = bracketsConfig[i][0] + bracketsConfig[i][1];
      liken = str.replace(bracket, "");
      if (str === liken) {
        count++;
      }
      str = liken;
    }
  }

  if (str.length === 0) {
      return true; 
  } else {
      return false;
  }
}
