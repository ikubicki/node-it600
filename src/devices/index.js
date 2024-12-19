const ControlModule = require("./ControlModule.js");
const Coordinator = require("./Coordinator.js");
const Gateway = require("./Gateway.js");
const Generic = require("./Generic.js");
const Repeater = require("./Repeater.js");
const Switch = require("./Switch.js");
const Thermostat = require("./Thermostat");

const it600Repeater = require("./models/it600Repeater.js");
const it600WC = require("./models/it600WC.js");
const SAU2AG1ZC = require("./models/SAU2AG1ZC.js");
const SQ610 = require("./models/SQ610.js");
const SQ610RF = require("./models/SQ610RF.js");
const UGE600 = require("./models/UGE600.js");

const devices = {
  ControlModule,
  Coordinator,
  Gateway,
  Generic,
  Repeater,
  Switch,
  Thermostat,
  models: {
    it600Repeater,
    it600WC,
    SAU2AG1ZC,
    SQ610,
    SQ610RF,
    UGE600,
  },
  from({ client, data }) {
    const model = (
      data.sBasicS?.ModelIdentifier ||
      data.sGateway?.ModelIdentifier ||
      "Generic"
    )
      .split("-")
      .join("");
    return (devices.models[model] || devices.Generic).from({ client, data });
  },
};
module.exports = devices;
