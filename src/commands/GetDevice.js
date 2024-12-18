import Command, { READ_ENDPOINT } from "../command.js";
import devices from "../devices/index.js";

export default class ListDevices extends Command {
  UniID;
  constructor(UniID) {
    super(READ_ENDPOINT, {
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
