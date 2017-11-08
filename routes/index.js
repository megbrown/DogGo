'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.use(require('./select'));
router.use(require('./rides'));
router.use(require('./shelters'));
router.use(require('./dogs'));

module.exports = router;