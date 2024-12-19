export declare class Crypter {
  constructor(euid: string): void;
  public encrypt(plainText: string): Buffer;
  public decrypt(cipherText: string): string;
}

export declare class Client {
  constructor(
    host: string,
    crypter?: Crypter | undefined,
    port?: number | undefined,
  ): void;
  public async send(command: Command): Promise<any>;
}

export declare class Command {
  constructor(): void;
  public getEndpoint(): string;
  public getParameters(): any;
  public getEncryptedParameters(client: Client): string;
  public handleEncryptedResponse(client: Client, response: any): Promise<any>;
}

export declare const Client: Client;
export declare const Crypter: Crypter;

export declare const commands: {
  GetDevice: any;
  ListDevices: any;
  ReadDevices: any;
};

export declare const devices: {
  Generic: any;
  ControlModule: any;
  Gateway: any;
  Repeater: any;
  Switch: any;
  Thermostat: any;
  models: any;
  from({ client: Client, data: any }): any;
};
