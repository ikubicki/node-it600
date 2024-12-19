const Command = require("../command.js");

class MoveToLevel extends Command {
  constructor(device, levelValue) {
    super(Command.WRITE_ENDPOINT, {
      requestAttr: "write",
      id: [
        {
          data: device.ident,
          sLevelS: {
            SetMoveToLevel: `${levelValue.toString(16).padStart(2, "0")}FFFF`,
          },
        },
      ],
    });
  }
}

module.exports = MoveToLevel;
