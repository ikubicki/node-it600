import Command, { WRITE_ENDPOINT } from "../command.js";

export default class MoveToLevel extends Command
{
    constructor(device, levelValue)
    {
        super(WRITE_ENDPOINT, {
            requestAttr: 'write',
            id: [{
                data: device.ident,
                sLevelS: {
                    SetMoveToLevel: `${levelValue.toString(16).padStart(2, '0')}FFFF`
                }
            }]
        })
    }
}