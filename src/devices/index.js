const Generic = require("./Generic.js");
const it600Repeater = require("./it600Repeater.js");
const it600WC = require("./it600WC.js");
const SAU2AG1ZC = require("./SAU2AG1ZC.js");
const SQ610 = require("./SQ610.js");
const SQ610RF = require("./SQ610RF.js");
const UGE600 = require("./UGE600.js");

const devices = {
  Generic,
  it600Repeater,
  it600WC,
  SAU2AG1ZC,
  SQ610,
  SQ610RF,
  UGE600,
  from({ client, data }) {
    const model = (
      data.sBasicS?.ModelIdentifier ||
      data.sGateway?.ModelIdentifier ||
      "Generic"
    )
      .split("-")
      .join("");
    return (devices[model] || devices.Generic).from({ client, data });
  },
};
module.exports = devices;
