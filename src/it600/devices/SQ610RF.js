import SQ610 from "./SQ610.js";

class SQ610RF extends SQ610 {
  BatteryLevel;

  static from({ client, data }) {
    return super.from({ client, data }).import({
      BatteryLevel: data.sIT600TH.BatteryLevel,
    });
  }
}

export default SQ610RF;
