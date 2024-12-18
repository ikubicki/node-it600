class Device
{

    ident
    _client

    constructor(ident, _client)
    {
        this.ident = ident
        this._client = _client
    }
    
    import(data)
    {
        Object.keys(data).forEach(key => {
            this[key] = data[key]
        })
        return this
    }

    static from({ client, data })
    {
        return new this(data.data, client)
    }
}

export default Device