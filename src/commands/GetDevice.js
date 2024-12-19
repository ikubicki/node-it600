const Command = require("../command.js");
const devices = require("../devices/index.js");

class ListDevices extends Command {
  UniID;
  constructor(UniID) {
    super(Command.READ_ENDPOINT, {
      requestAttr: "readall",
    });
    this.UniID = UniID;
  }

  async handleEncryptedResponse(client, response) {
    return super.handleEncryptedResponse(client, response).then((data) => {
      const device = (data.id || []).find((d) => d.data.UniID === this.UniID);
      if (device) {
        return devices.from({ data: device, client });
      }
      return false;
    });
  }
}

module.exports = ListDevices;
