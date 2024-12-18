export const READ_ENDPOINT = '/deviceid/read';
export const WRITE_ENDPOINT = '/deviceid/write';

class Command
{
    endpoint = READ_ENDPOINT
    parameters = {}
    
    constructor(endpoint = READ_ENDPOINT, parameters = {})
    {
        this.endpoint = endpoint
        this.parameters = parameters
    }

    getEndpoint()
    {
        return this.endpoint
    }

    getParameters()
    {
        return this.parameters
    }

    getEncryptedParameters(client)
    {
        let body = JSON.stringify(this.parameters)
        if (client.crypter) {
            body = client.crypter.encrypt(body)
        }
        return body
    }

    async handleEncryptedResponse(client, response)
    {
        if (client.crypter) {
            const data = client.crypter.decrypt(Buffer.from(await response.arrayBuffer()))
            return JSON.parse(data)
        }
        return await response.toJson()
    }
}

export default Command