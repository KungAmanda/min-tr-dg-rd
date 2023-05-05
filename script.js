const http = require('http')
const fs = require('fs')
const express = require('express')
const port = 3000
const app = new express()
app.use(express.static(__dirname))


app.listen(port, function(error){
    if(error) {
        console.log('knasus' , error)
    } else {
        console.log('server is listening on port' + port)
    }
})