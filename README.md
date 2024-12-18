# node-it600
This library allows you to use node to connect to your Salus Controls devices.

Due to lack of other setup I could only provide a support for SQ610xx thermostats.

If you want to enhance the functionality, feel free to fork it and create MR to merge it back.

### Usage

To use the library you need to instantiate `it600.Crypter` class and pass the EUID of your Gateway.

With this, you can instantiate the `it600.Client` class, that accepts `host`, `crypter` and optionally `port` (defaults to 80).

Once you will have an instance of client, you can use `send(command)` method, that accepts an instance of the command class.

### Examples

#### Instantiation of the client:

```
    const crypter = new it600.Crypter({
        euid: '0000000000000000'
    })

    const client = new it600.Client({
        host: '192.168.1.2',
        crypter,
    });
```
#### Listing devices

```
    client.send(new it600.commands.ListDevices())
        .then(devices => 
            console.log(
                devices.map(d => d.DeviceName || 'Unknown device')
            )
        );

```
#### Getting a device and setting a temperature
```
    const device = await client.send(
        new it600.commands.getDevice('0000000000000000')
    );
    device.setTemperature(21).then(console.log);

```