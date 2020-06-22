export default (html, preloadedState) => `
<html>
  <head>
    <title>Netflix Roulette</title>
  </head>
  <body>
    <div id="root">${html}</div>
    <script>
      window.PRELOADED_STATE = ${JSON.stringify(preloadedState).replace(/</g, '\\u003c')}
    </script>
    <script src="/index.js"></script>
  </body>
</html>
`;
