import express from 'express';
const router = express.Router();

/* GET home page. */
router.get('/', function (_req, res, next) {
  res.render('index', { title: 'Omotosho Joseph' })
});

export default router;
