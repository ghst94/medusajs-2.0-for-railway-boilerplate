import { createRequire } from 'module';
const require = createRequire(import.meta.url);
const config = require('./medusa-config.mjs');
export default config;
