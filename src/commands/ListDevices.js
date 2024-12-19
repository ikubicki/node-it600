const Command = require("../command.js");
const devices = require("../devices/index.js");

class ListDevices extends Command {
  constructor() {
    super(Command.READ_ENDPOINT, {
      requestAttr: "readall",
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

module.exports = ListDevices;
