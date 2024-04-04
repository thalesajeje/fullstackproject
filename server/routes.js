const express = require("express");
const EntryController = require("./controllers/EntryController");

const router = express.Router();

router.get('/entries', EntryController.index);
router.post('/entries', EntryController.store);
router.patch('/entries/:entry', EntryController.update);
router.delete('/entries/:entry', EntryController.destroy);

module.exports = router;
