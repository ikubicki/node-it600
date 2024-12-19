const crypto = require("crypto");

class Crypter {
  static iv = Buffer.from([
    0x88, 0xa6, 0xb0, 0x79, 0x5d, 0x85, 0xdb, 0xfc, 0xe6, 0xe0, 0xb3, 0xe9,
    0xa6, 0x29, 0x65, 0x4b,
  ]);
  static algo = "aes-256-cbc";
  static blockSize = 16;

  constructor({ euid }) {
    const key = Buffer.concat([
      crypto.createHash("md5").update(`Salus-${euid.toLowerCase()}`).digest(),
      Buffer.alloc(16),
    ]);
    this.cipherKey = key;
  }

  encrypt(plainText) {
    const cipher = crypto.createCipheriv(
      Crypter.algo,
      this.cipherKey,
      Crypter.iv,
    );
    const padLength =
      Crypter.blockSize - (Buffer.byteLength(plainText) % Crypter.blockSize);
    const padding = Buffer.alloc(padLength, padLength);
    const paddedData = Buffer.concat([Buffer.from(plainText, "utf8"), padding]);
    const encrypted = Buffer.concat([
      cipher.update(paddedData),
      cipher.final(),
    ]);

    // for some reason Salus gateway hates cipher.final. Let's drop it then
    return encrypted.subarray(0, encrypted.length - Crypter.blockSize);
  }

  decrypt(cipherText) {
    const decipher = crypto.createDecipheriv(
      Crypter.algo,
      this.cipherKey,
      Crypter.iv,
    );
    const decrypted = Buffer.concat([
      decipher.update(cipherText),
      decipher.final(),
    ]);

    // response from Salus gateway comes without the padding
    return decrypted.toString("utf8");
  }
}

module.exports = Crypter;
