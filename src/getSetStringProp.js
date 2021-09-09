/**
 * Thank you jason!
 *
 * https://stackoverflow.com/questions/8051975/access-object-child-properties-using-a-dot-notation-string
 */

export default function (obj, desc, value) {
  var arr = desc ? desc.split(".") : [];

  while (arr.length && obj) {
    var comp = arr.shift();
    var match = new RegExp("(.+)\\[([0-9]*)\\]").exec(comp);

    // handle arrays
    if (match !== null && match.length == 3) {
      var arrayData = {
        arrName: match[1],
        arrIndex: match[2],
      };
      if (obj[arrayData.arrName] !== undefined) {
        if (typeof value !== "undefined" && arr.length === 0) {
          obj[arrayData.arrName][arrayData.arrIndex] = value;
        }
        obj = obj[arrayData.arrName][arrayData.arrIndex];
      } else {
        obj = undefined;
      }

      continue;
    }

    // handle regular things
    if (typeof value !== "undefined") {
      if (obj[comp] === undefined) {
        obj[comp] = {};
      }

      if (arr.length === 0) {
        obj[comp] = value;
      }
    }

    obj = obj[comp];
  }

  return obj;
}
