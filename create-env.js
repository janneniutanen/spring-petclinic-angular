const { writeFileSync } = require('fs');

const environmentFileContents = `export const environment = {
  production: ${Boolean(process.env.production)},
  REST_API_URL: '${process.env.REST_API_URL || 'http://localhost:9966/petclinic/api/'}'
};`;
const targetEnvFile = './src/environments/environment.prod.ts';

writeFileSync(targetEnvFile, environmentFileContents);

