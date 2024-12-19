const commands = require("../commands/index.js");
const Generic = require("./Generic.js");

class Switch extends Generic {
  async switch(onOffValue) {
    return this._client.send(new commands.Switch(this, onOffValue));
  }

  async switchOn() {
    return this.switch(1);
  }

  async switchOff() {
    return this.switch(0);
  }
}

module.exports = Switch;
