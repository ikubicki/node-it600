const Command = require("../command.js");

class SetFanMode extends Command {
  constructor(device, fanModeValue) {
    super(Command.WRITE_ENDPOINT, {
      requestAttr: "write",
      id: [
        {
          data: device.ident,
          sFanS: {
            FanMode: fanModeValue,
          },
        },
      ],
    });
  }
}

module.exports = SetFanMode;
