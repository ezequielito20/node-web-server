
import { envs }  from "./config/env.js";
import { startServer } from "./server/server.js";

const main = () =>{
    startServer({
        port: envs.PORT,
        public_path: envs.PUBLIC_PATH
    })
    
}

// Funcion agnostica (porque no tiene nombre) autoconvocada
(async () => {
    main()
})()

// const { envs } = require('./config/env')
// const { startServer } = require('./server/server')

// const main = ()=>{
//     startServer({
//         port: envs.PORT,
//         public_path: envs.PUBLIC_PATH
//     })
//     // console.log(envs);
    
// }

// (async () => {
//         main()
//     })()