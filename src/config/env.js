// import { config } from "dotenv";
// import env from 'env-var';

// config();

// export const envs = {
//     PORT: env.get('PORT').required().asPortNumber(),
//     PUBLIC_PATH: env.get('PUBLIC_PATH').default('public').asString()
// }

require('dotenv').config();
const { get } = require('env-var')

const envs = {
        PORT: get('PORT').required().asPortNumber(),
        PUBLIC_PATH: get('PUBLIC_PATH').default('public').asString()
    }

    module.exports = {
        envs
    }