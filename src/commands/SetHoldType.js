const Command = require("../command.js");

class SetHoldType extends Command {
  constructor(device, holdTypeValue) {
    super(Command.WRITE_ENDPOINT, {
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

module.exports = SetHoldType;
