import Command, { WRITE_ENDPOINT } from "../command.js";

export default class SetHeatingSetpoint extends Command {
  constructor(device, heatingSetpointValue) {
    if (heatingSetpointValue < 15) {
      throw new Error("SetHeatingSetpoint: value cannot be smaller than 15");
    }
    if (heatingSetpointValue > 36) {
      throw new Error("SetHeatingSetpoint: value cannot be smaller than 36");
    }
    super(WRITE_ENDPOINT, {
      requestAttr: "write",
      id: [
        {
          data: device.ident,
          sIT600TH: {
            SetHeatingSetpoint_x100:
              ((Math.round(heatingSetpointValue * 2) / 2) * 100) | 20,
          },
        },
      ],
    });
  }

  async handleEncryptedResponse(client, response) {
    return super
      .handleEncryptedResponse(client, response)
      .then((result) => result.status === "success");
  }
}
