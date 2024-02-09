import fs from 'fs';
import path from 'path';
import crypto from 'crypto';

const safeFolderPath = path.join(process.cwd(), '.safe');
const publicKeyPath = path.join(safeFolderPath, 'public_key.pem');
const privateKeyPath = path.join(safeFolderPath, 'private_key.pem');

const generateRSAKey = async () => {
  if (!fs.existsSync(safeFolderPath)) {
    fs.mkdirSync(safeFolderPath);
  }

  if (fs.existsSync(publicKeyPath) || fs.existsSync(privateKeyPath)) {
    return 'RSA keys already exist ❌ Please delete them in order to create new keys.';
  }

  const { publicKey, privateKey } = crypto.generateKeyPairSync('rsa', {
    modulusLength: 2048,
    publicKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
    privateKeyEncoding: {
      type: 'pkcs1',
      format: 'pem',
    },
  });

  fs.writeFileSync(publicKeyPath, publicKey);
  fs.writeFileSync(privateKeyPath, privateKey);

  return 'RSA keys were created successfully ✅';
};

const encryptWithRSA = async (text: string) => {
  if (fs.existsSync(publicKeyPath)) {
    const publicKey = fs.readFileSync(publicKeyPath, 'utf-8');
    const bufferText = Buffer.from(text, 'utf-8');
    const encrypted = crypto.publicEncrypt(publicKey, bufferText);
    return encrypted.toString('base64');
  }
  throw new Error('Public key not found.');
};

const decryptWithRSA = async (encryptedText: string) => {
  if (fs.existsSync(privateKeyPath)) {
    const privateKey = fs.readFileSync(privateKeyPath, 'utf-8');
    const bufferEncryptedText = Buffer.from(encryptedText, 'base64');
    const decrypted = crypto.privateDecrypt(privateKey, bufferEncryptedText);
    return decrypted.toString('utf-8');
  }
  throw new Error('Private key not found.');
};

export { generateRSAKey, encryptWithRSA, decryptWithRSA };
