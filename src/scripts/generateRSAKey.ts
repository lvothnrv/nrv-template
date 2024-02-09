import { generateRSAKey } from '../services/rsaKey';

generateRSAKey().then(console.log).catch(console.error);
