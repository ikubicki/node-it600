const Generic = require("./Generic.js");
const SwitchCommand = require("../commands/Switch");

class Switch extends Generic {
  async switch(onOffValue) {
    return this._client.send(new SwitchCommand(this, onOffValue));
  }

  async switchOn() {
    return this.switch(1);
  }

  async switchOff() {
    return this.switch(0);
  }
}

module.exports = Switch;
