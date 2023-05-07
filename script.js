const express = require('express');
const app = express();
const port = 3000;
const fs = require("fs")
const bodyParser = require("body-parser");

app.use(express.static(__dirname ));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
  
app.get("/index", (req, res) => {
    res.sendFile("index.html", {root: __dirname });
}); 

 app.use(express.static(__dirname));
 
 //detta hanterar error
app.use(function(err, req, res, next) {
    console.error(err.stack);
    res.status(500).send('nått tokigt hände!');
  });
  
  //startar servern
  app.listen(port, () => {
    console.log(`Servern är lyssnar på port ${port}`);
  });

  //skickar datan till server
app.post("/index", (req, res) => {
    
  const jsonData = JSON.stringify(req.body, null, 2);
  //skriver json sträng till fil
  fs.writeFileSync("data.json", jsonData, (err) => {
      
      if(err){
          console.log(err);
      }
  });
}); 