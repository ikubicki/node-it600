const Command = require("../command.js");

class Lock extends Command {
  constructor(device, lockValue) {
    super(Command.WRITE_ENDPOINT, {
      requestAttr: "write",
      id: [
        {
          data: device.ident,
          sIT600TH: {
            LockKey_a: lockValue > 0 ? 1 : 0,
          },
        },
      ],
    });
  }
}

module.exports = Lock;
