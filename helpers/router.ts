export default (server) => {
  const routes = {};

  const route = (method: String, path: String, middleware: Function) =>
    routes[path]
      ? undefined
      : (function () {
          server[method](path, middleware);
        })();

  const router = ({ method, path, render }) =>
    route(method, path, (req, res) => {
      res.render(render(req, res));
    });

  return router;
};
