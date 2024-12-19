const SQ610 = require("./SQ610.js");

class SQ610RF extends SQ610 {
  BatteryLevel;

  static from({ client, data }) {
    return super.from({ client, data }).import({
      BatteryLevel: data.sIT600TH.BatteryLevel,
    });
  }
}

module.exports = SQ610RF;
