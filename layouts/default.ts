import render from "preact-render-to-string";

export default (req, res, next) => {
  res.render = (component) => {
    res.send(render(component));
  };

  res.renderJsx = (component) => {
    const appString = render(component);
    res.send(
      `<!DOCTYPE html>
      <head>
        <script src="https://unpkg.com/htmx.org@1.9.9" integrity="sha384-QFjmbokDn2DjBjq+fM+8LUIVrAgqcNW2s0PjAxHETgRn9l4fvX31ZxDxvwQnyMOX" crossorigin="anonymous"></script>
      </head>
      <html>
        <body>
          <div id="root">
            ${appString}
          </div>
        </body>
      </html>`
    );
  };
  next();
};
