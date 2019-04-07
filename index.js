require('dotenv/config') /// ZAWSZE PIERWSZE
require('./db/connect')
// require('./startAgenda')
require('./initPassport') // MUSI BYC PRZED SERVEREM
require('./server')
// require('./initWebPush')
