import * as React from 'react';
import * as Server from 'react-dom/server';

let Output = () => '<h1>Hello, world!</h1>';

console.log(Server.renderToString(<Output />));