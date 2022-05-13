const express = require('express');
const ClienteController = require ('../controllers/clienteController.js');
const ProdutoController = require ('../controllers/produtoController.js');
const router = express.Router();
 
router.post('/cliente', ClienteController.Insert);
router.get('/cliente', ClienteController.SelectAll);
router.get('/cliente/:id', ClienteController.SelectDetail);
router.put('/cliente/:id', ClienteController.Update);
router.delete('/cliente/:id', ClienteController.Delete);

router.post('/produto', ProdutoController.Insert);
router.get('/produto', ProdutoController.SelectAll);
router.get('/produto/:id', ProdutoController.SelectDetail);
router.put('/produto/:id', ProdutoController.Update);
router.delete('/produto/:id', ProdutoController.Delete);

module.exports = router;