import Command, { READ_ENDPOINT } from "../command.js";
import devices from "../devices/index.js";

export default class ListDevices extends Command {
  constructor() {
    super(READ_ENDPOINT, {
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
