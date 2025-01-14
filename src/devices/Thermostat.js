const Generic = require("./Generic.js");
const constants = require("../constants.js");
const SetHeatingSetpoint = require("../commands/SetHeatingSetpoint.js");
const SetHoldType = require("../commands/SetHoldType.js");
const Lock = require("../commands/Lock.js");

class Thermostat extends Generic {
  modes = constants.holdtype;

  LocalTemperature_x100;
  AutoCoolingSetpoint_x100;
  CoolingSetpoint_x100;
  AutoHeatingSetpoint_x100;
  HeatingSetpoint_x100;
  RunningState;
  // ScheduleType
  // ProgramOperationMode
  HoldType;
  // LockKey
  SunnySetpoint_x100;

  static from({ client, data }) {
    return super.from({ client, data }).import({
      LocalTemperature_x100: data.sIT600TH.LocalTemperature_x100 / 100,
      AutoCoolingSetpoint_x100: data.sIT600TH.AutoCoolingSetpoint_x100 / 100,
      CoolingSetpoint_x100: data.sIT600TH.CoolingSetpoint_x100 / 100,
      AutoHeatingSetpoint_x100: data.sIT600TH.AutoHeatingSetpoint_x100 / 100,
      HeatingSetpoint_x100: data.sIT600TH.HeatingSetpoint_x100 / 100,
      RunningState: data.sIT600TH.RunningState,
      // ScheduleType: data.sIT600TH.ScheduleType,
      // ProgramOperationMode: data.sIT600TH.ProgramOperationMode,
      HoldType: data.sIT600TH.HoldType,
      // LockKey: data.sIT600TH.LockKey,
      SunnySetpoint_x100: data.sIT600TH.SunnySetpoint_x100,
    });
  }

  get isRunning() {
    return this.RunningState === 1;
  }

  get temperature() {
    return this.HeatingSetpoint_x100;
  }

  get currentTemperature() {
    return this.LocalTemperature_x100;
  }

  get humidity() {
    return this.SunnySetpoint_x100;
  }

  get mode() {
    return this.HoldType;
  }

  async setLock(lockValue) {
    return this._client.send(new Lock(this, lockValue));
  }

  async setTemperature(temperatureValue) {
    return this._client.send(new SetHeatingSetpoint(this, temperatureValue));
  }

  async setMode(modeValue) {
    return this._client.send(new SetHoldType(this, modeValue));
  }
}

module.exports = Thermostat;
