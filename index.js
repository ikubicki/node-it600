import it600 from "./src/it600/index.js";

async function main()
{

    const crypter = new it600.Crypter({
        euid: process.env.SALUS_EUID
    })

    const client = new it600.Client({
        host: process.env.SALUS_HOST,
        crypter,
    });


    const device = await client.send(new it600.commands.GetDevice(process.env.SALUS_DEV_DEVICE));
    // const deviceX = await client.send(new it600.commands.ReadDevices([device]));
    // const response = await client.send(new it600.commands.ListDevices());
    // console.log(await device.setTemperature(30));
    console.log(device.isRunning)
    console.log(device.currentTemperature)
    console.log(device.temperature)
    console.log(device.humidity)
    console.log(device.mode)

    //console.log(device.modes.OFF)
    //console.log(await device.setMode(device.modes.AUTO));
    //console.log(await device.setLock(1))
    //console.log(device);
}
main();
