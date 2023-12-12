import express, { Request, Response, Express } from "express";
import { h } from "preact";
import render from "preact-render-to-string";
import defaultLayout from "./layouts/default";
import useRoute from "./helpers/router";

import adminRoute from "./pages/admin";
import { App } from "./pages/index";
import { About } from "./pages/about";

const server = express();
const router = useRoute(server);

const port = 1234;

server.use(defaultLayout);
server.use("/admin", adminRoute);

server.get("/", (req: Request, res: Response) => {
  res.renderJsx(<App router={router} />);
});

server.get("/about", (req: Request, res: Response) => {
  res.renderJsx(<About router={router} />);
});

server.listen(port, () => console.log(`Server is running on port ${port}`));
