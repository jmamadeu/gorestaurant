import express from 'express';

const routes = express.Router();

routes.get('/', (_, res) => {
  return res.json({ ok: true });
});

export default routes;
