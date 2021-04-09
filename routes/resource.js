var express = require('express');
var router = express.Router();
// Require controller modules.
var api_controller = require('../controllers/api');
var electronic_controller = require('../controllers/electronic');
/// API ROUTE ///
// GET resources base.
router.get('/', api_controller.api);
/// electronic ROUTES ///
// POST request for creating a electronic.
router.post('/electronic', electronic_controller.electronic_create_post);
// DELETE request to delete electronic.
router.delete('/electronic/:name', electronic_controller.electronic_delete);
// PUT request to update electronic.
router.put('/electronic/:item', electronic_controller.electronic_update_put);
// GET request for one electronic item.
router.get('/electronic/:id', electronic_controller.electronic_detail);
// GET request for list of all electronic items.
router.get('/electronic', electronic_controller.electronic_list);
module.exports = router;