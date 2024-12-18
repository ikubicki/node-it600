import Command, { WRITE_ENDPOINT } from "../command.js";

export default class SetFanMode extends Command
{
    constructor(device, fanModeValue)
    {
        super(WRITE_ENDPOINT, {
            requestAttr: 'write',
            id: [{
                data: device.ident,
                sFanS: {
                    FanMode: fanModeValue
                }
            }]
        })
    }
}