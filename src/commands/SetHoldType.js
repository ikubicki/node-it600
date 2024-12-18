import Command, { WRITE_ENDPOINT } from "../command.js";

export default class SetHoldType extends Command {
  constructor(device, holdTypeValue) {
    super(WRITE_ENDPOINT, {
      requestAttr: "write",
      id: [
        {
          data: device.ident,
          sIT600TH: {
            SetHoldType: holdTypeValue,
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
