---
title: Hy there
date: 2021-08-05T17:40:31.971Z
description: This is the description
---
This is the body.

```javascript
const title = React.createElement(
    'h1',
    { id: 'main-title', title: 'This is a title.', class: 'title' },
    'My first React Element!'
);

const desc = React.createElement(
    'p',
    null,
    'I just learned how to create a React node and render it to the DOM.'
)

const header = React.createElement(
    'header',
    null,
    title,
    desc
)

ReactDOM.render(
    header,
    document.getElementById('root')
);
```