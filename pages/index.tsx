import { h } from "preact";

export const App = ({ router }) => {
  return (
    <div>
      <h1>Hello world!</h1>
      <button
        hx-get="/clicked"
        hx-trigger="click"
        hx-target="#parent-div"
        hx-swap="outerHTML"
      >
        Click Me!
      </button>
      {router({
        method: "get",
        path: "/clicked",
        render(req, res) {
          return <div>You just clicked it!</div>;
        },
      })}
      <div id="parent-div">You haven't clicked it yet!</div>
    </div>
  );
};
