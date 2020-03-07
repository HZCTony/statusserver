var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res, next) {


});


router.post('/', function(req, res, next) {
  const { spawn } = require('child_process');
  const ls = spawn('bash', ['rx.sh']);

  ls.stdout.on('data', (data) => {
    let currentNetworkInput = Number(`${data}`);
    console.log(currentNetworkInput);
    res.json({'output': currentNetworkInput});
    });
    
    ls.stderr.on('data', (data) => {
      console.error(`stderr: ${data}`);
    });
    
    ls.on('close', (code) => {
      console.log(`child process exited with code ${code}`);
    });  

});


module.exports = router;
