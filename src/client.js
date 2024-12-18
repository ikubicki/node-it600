class Client {
  host;
  port;
  crypter;

  constructor({ host, crypter, port = 80 }) {
    this.host = host;
    this.port = port;
    this.crypter = crypter;
  }

  async send(command) {
    const url = `http://${this.host}:${this.port}${command.getEndpoint()}`;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: command.getEncryptedParameters(this),
    };

    //console.log('HTTP', { url, options, rawBody: JSON.stringify(command.getParameters()) })
    return fetch(url, options)
      .then((response) => {
        if (response.status === 200) {
          return command.handleEncryptedResponse(this, response);
        }
        return response;
      })
      .catch((e) => {
        console.error(e);
      });
  }
}

export default Client;
