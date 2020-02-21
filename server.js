const express = require('express');
const path = require('path');

const app = express();

const port = process.env.PORT || 8080;

app.use(express.static(__dirname + '/dist/findmyfood'));

app.get('/*', function(req,res) {

  res.sendFile(path.join(__dirname+'/dist/findmyfood/index.html'));
});


app.listen(port, () => {
  console.log(`>Ready on http://localhost:${port}`);
});
