const { json } = require('express');
var express = require('express');
var router = express.Router();
const storage = require('../utils/FarmManagement');
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.post('/', async(req,res) =>{
  const stgMgt = new storage();
  stgMgt.addPorteur(req.body.id, req.body.wallet).then((resp) =>{
     return res.send(resp); 
  });
});
router.get('/:id',async(req,res) =>{
  const stgMgt = new storage();
  stgMgt.getPorteur(req.params.id)
  .then((resp) =>{
    return res.send(resp);    
  });
});

module.exports = router;
