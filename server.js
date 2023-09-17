const express = require("express")
const server = express()
const bodyParser = require('body-parser')
const PORT = 8383

server.use(express.static('public'))
server.use(bodyParser.json())
server.use(bodyParser.urlencoded({ extended: false }))

let dasboardvals = {
    rightsignal: false,
    leftsignal: false,
    hazard: false, 
}

function replaceByValue( jsonObj, field, oldvalue, newvalue ) {
    for( var k = 0; k < jsonObj.length; ++k ) {
             jsonObj[k][field] = (newvalue *1)+k;

    }
    return jsonObj;
}

//POST Requests
server.post('/test', (req, res) =>{
    let data = req.body;
    res.send('Data Received: ' + JSON.stringify(data))

    if (data.rightsignal == 1) {
        dasboardvals["rightsignal"] = true
    } else {
        dasboardvals["rightsignal"] = false
    }
    
    if (data.leftsignal == 1) {
        dasboardvals["leftsignal"] = true
    } else {
        dasboardvals["leftsignal"] = false
    }

    if (data.hazard == 1) {
        dasboardvals["hazard"] = true
    } else {
        dasboardvals["hazard"] = false
    }
    console.log(dasboardvals)
})

//GET Requests
server.get('/dashboardinfo', (req, res) => {
    res.status(200).send(dasboardvals)
})

server.get('/ping', (req, res) => {
    res.status(200).send("pong")
})

server.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`))