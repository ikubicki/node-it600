import Client from "./client.js";
import commands from "./commands/index.js";
import Crypter from "./crypter.js";
import Device from "./device.js";
import 'dotenv/config'

export default {
    Client,
    Crypter,
    Device,
    commands,
}