const Command = require("../command.js");

class Switch extends Command {
  constructor(device, switchValue) {
    super(Command.WRITE_ENDPOINT, {
      requestAttr: "write",
      id: [
        {
          data: device.ident,
          sOnOffS: {
            SetOnOff: switchValue,
          },
        },
      ],
    });
  }
}

module.exports = Switch;
