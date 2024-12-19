const Command = require("../command.js");
const devices = require("../devices/index.js");

class ReadDevices extends Command {
  constructor(devices) {
    if (!Array.isArray(devices)) {
      devices = [devices];
    }
    super(Command.READ_ENDPOINT, {
      requestAttr: "deviceid",
      id: devices.map((device) => {
        if (device.ident) {
          return { data: device.ident };
        }
        return undefined;
      }),
    });
  }

  async handleEncryptedResponse(client, response) {
    return super.handleEncryptedResponse(client, response).then((data) => {
      return (data.id || []).map((device) =>
        devices.from({ client, data: device }),
      );
    });
  }
}

module.exports = ReadDevices;
