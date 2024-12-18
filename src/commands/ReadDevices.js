import Command, { READ_ENDPOINT } from "../command.js";
import devices from "../devices/index.js";

export default class ReadDevices extends Command {
  constructor(devices) {
    if (!Array.isArray(devices)) {
      devices = [devices];
    }
    super(READ_ENDPOINT, {
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
