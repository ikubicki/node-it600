const it600 = require("../../src/index.js");
require('dotenv').config()

async function main()
{
    const crypter = new it600.Crypter(process.env.SALUS_EUID);

    const client = new it600.Client(process.env.SALUS_HOST, crypter);


    const device = await client.send(new it600.commands.GetDevice(process.env.SALUS_DEV_DEVICE));
    // const deviceX = await client.send(new it600.commands.ReadDevices([device]));
    // const response = await client.send(new it600.commands.ListDevices());
    // console.log(await device.setTemperature(21));
    console.log('name:', device.name)
    console.log('isRunning:', device.isRunning)
    console.log('currentTemperature:', device.currentTemperature)
    console.log('temperature:', device.temperature)
    console.log('humidity:', device.humidity)
    console.log('mode:', device.mode)
    

    //console.log(device.modes.OFF)
    //console.log(await device.setMode(device.modes.AUTO));
    //console.log(await device.setLock(1))
    //console.log(device);
}
main();
