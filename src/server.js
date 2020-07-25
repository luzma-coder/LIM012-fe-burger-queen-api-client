// import { jsonServer } from 'json-server';
// import { jsonServer } from 'json-server';
// server.js
import { create, router as _router } from 'json-server';
const server = create()
const router = _router('db.json')
// const middlewares = jsonServer.defaults()
// const middlewares = defaults()
// server.use(middlewares)
server.use(router);
server.listen(3000/auth, () => {
  router.render = (req, res) => {
    res.status(500).jsonp({
      error: "error message here"
    });
  }
});
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
// server.use(jsonServer.bodyParser)
// server.use((req, res, next) => {
//   if (req.method === 'POST') {
//     req.body.createdAt = { token: "kmdghsjdho43930"};
//   }
//   // Continue to JSON Server router
//   next()
// })

