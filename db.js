const Pool = require('pg').Pool

const pool = new Pool({
    user: 'wqmiextntxgztw',
    password: '3dd6abd58a9edfaf4fb01d9715e90b0b26d6bcb35a626d6608c7f054b91a1f70',
    host:'ec2-52-212-228-71.eu-west-1.compute.amazonaws.com',
    port: 5432,
    database: 'dds0qv1pfvp9oo',
    ssl: {rejectUnauthorized: false}
})

module.exports = pool
