// import environment variables
require('dotenv').config();

// import modules
const app = require('./app');
require('./database');

// principal function of api
async function main(){
    await app.listen(app.get('port'));
    console.log('server on port',app.get('port'));
}

main();