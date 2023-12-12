import { h } from "preact";
import { Router } from "express";
import useRouter from "../helpers/router";
import axios from "axios";

const adminRoute = Router();
const router = useRouter(adminRoute);

const AdminNav = () => {
  return (
    <nav>
      <a
        hx-get="/admin/posts"
        hx-trigger="click"
        hx-target="#admin-container"
        hx-swap="innerHTML"
        href="#posts"
      >
        Posts
      </a>
    </nav>
  );
};

const API_URL = "http://localhost:4000";
const Posts = () => {
  // Show all posts in the Admin Area
  router({
    method: "get",
    path: "/posts",
    render(req, res) {
      return (
        <div>
          <h1>Showing the posts to the page</h1>
        </div>
      );
    },
  });
};
const Admin = () => {
  return (
    <div>
      <AdminNav />
      <div id="admin-container"></div>
      {Posts()}
    </div>
  );
};

adminRoute.get("/", (req, res) => {
  res.renderJsx(<Admin />);
});

export default adminRoute;
