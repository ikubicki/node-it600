import Command, { WRITE_ENDPOINT } from "../command.js";

export default class Lock extends Command {
  constructor(device, lockValue) {
    super(WRITE_ENDPOINT, {
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
