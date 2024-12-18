export declare class Client {
  public async send(command: Command): Promise<any>;
}

export declare class Crypter {
  public encrypt(plainText: string): Buffer;
  public decrypt(cipherText: string): string;
}

export declare class Command {
  public getEndpoint(): string;
  public getParameters(): any;
  public getEncryptedParameters(client: Client): string;
  public handleEncryptedResponse(client: Client, response: any): Promise<any>;
}

export declare const Client: Client;
export declare const Crypter: Crypter;
export declare const commands: {
  GetDevice: Command;
  ListDevices: Command;
  Lock: Command;
  MoveToLevel: Command;
  ReadDevices: Command;
  SetFanMode: Command;
  SetHeatingSetpoint: Command;
  SetHoldType: Command;
  Switch: Command;
};
