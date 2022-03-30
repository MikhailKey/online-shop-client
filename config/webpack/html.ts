export interface HtmlProps {
  htmlAttributes?: string;
  title?: string;
  meta?: string;
  base?: string;
  link?: string;
  style?: string;
  bodyAttributes?: string;
  body?: string;
  noscript?: string;
  script?: string;
}

const html = `
  <!DOCTYPE html>
  <html lang="en">
  <head>
   <title>Online-shop</title>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta http-equiv="X-UA-Compatible" content="IE=edge" />
  </head>
  <body >
    <div id="root">
    </div>
  </body>
  </html>
`;

export default html;
