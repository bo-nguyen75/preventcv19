const express = require("express");
const router = express.Router();

const newsController = require("../app/controllers/NewsController");

router.delete('/:id', newsController.destroy);
router.put('/:id', newsController.update);
router.post('/', newsController.add);
router.get("/", newsController.index);

module.exports = router;
