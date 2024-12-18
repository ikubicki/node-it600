import Command, { WRITE_ENDPOINT } from "../command.js";

export default class Switch extends Command {
  constructor(device, switchValue) {
    super(WRITE_ENDPOINT, {
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
