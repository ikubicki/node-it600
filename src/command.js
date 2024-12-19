class Command {
  static READ_ENDPOINT = "/deviceid/read";
  static WRITE_ENDPOINT = "/deviceid/write";

  endpoint = Command.READ_ENDPOINT;
  parameters = {};

  constructor(endpoint = Command.READ_ENDPOINT, parameters = {}) {
    this.endpoint = endpoint;
    this.parameters = parameters;
  }

  getEndpoint() {
    return this.endpoint;
  }

  getParameters() {
    return this.parameters;
  }

  getEncryptedParameters(client) {
    let body = JSON.stringify(this.parameters);
    if (client.crypter) {
      body = client.crypter.encrypt(body);
    }
    return body;
  }

  async handleEncryptedResponse(client, response) {
    if (client.crypter) {
      const data = client.crypter.decrypt(
        Buffer.from(await response.arrayBuffer()),
      );
      return JSON.parse(data);
    }
    return await response.toJson();
  }
}

module.exports = Command;
