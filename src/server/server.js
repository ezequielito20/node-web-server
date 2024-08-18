// import {express} from "express"
// import {path} from "path"

// export const startServer = (options) => {
//     const { port, public_path = 'public'} = options
//     console.log(port);
//     console.log(public_path);
    
// }

const express = require('express')
const path = require('path')

const startServer = (options) => {
    const {port, public_path = 'public'} = options
    const app = express()


    // en express para poder usar los middleware se usa la palabra use
    app.use(express.static(public_path))

    app.get('*', (req, res) => {
        const indexPath = path.join(__dirname + `../../../${public_path}/index.html`)
        res.sendFile(indexPath)

    })

    app.listen(port, () =>{
        console.log(port);
        
    })
    
}

module.exports = {
    startServer
}
