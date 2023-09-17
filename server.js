const express = require("express")
const server = express()
const PORT = 8383

server.use(express.static('public'))

server.get('/info', (req, res) => {
    res.status(200).send({
        info: "preset text 😁"
    })
})

server.listen(PORT, () => console.log(`Server has been started on port: ${PORT}`))