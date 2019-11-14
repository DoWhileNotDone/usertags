var express = require('express');
var router = express.Router();

let tags_controller = require('../application/controllers/tags');
/* GET tags listing. */
router.get('/tags', tags_controller.get_all_tags);

/* GET tag listing. */
router.get('/tags/:tag_id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})', tags_controller.get_tag);

/* Create tags listing. */
router.get('/tags/new', tags_controller.show_create_form);
router.post('/tags/new', tags_controller.create_tag);

/* Update tags listing. */
router.get('/tags/:tag_id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/edit', tags_controller.show_update_form);
router.post('/tags/:tag_id([0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12})/edit', tags_controller.update_tag);

module.exports = router;
