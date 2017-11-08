'use strict';

const { Router } = require('express');
const router = Router();

router.get('/', (req, res, next) => {
  res.render('index');
});

router.use(require('./dogRoute'));
router.use(require('./rideRoute'));
router.use(require('./shelterRoute'));

module.exports = router;