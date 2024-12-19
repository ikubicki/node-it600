const Device = require("../device.js");

class Generic extends Device {
  ModelIdentifier;
  DeviceName;
  FirmwareVersion;
  MACAddress;
  OnlineStatus;

  static from({ client, data }) {
    return super.from({ client, data }).import({
      ModelIdentifier: data.sBasicS?.ModelIdentifier || "Generic",
      DeviceName: JSON.parse(data.sZDO?.DeviceName || "{}")?.deviceName,
      FirmwareVersion: data.sZDO?.FirmwareVersion,
      MACAddress: data.sZDO?.MACAddress,
      OnlineStatus: data.sZDOInfo?.OnlineStatus_i,
    });
  }

  get name() {
    return this.DeviceName;
  }
}

module.exports = Generic;
