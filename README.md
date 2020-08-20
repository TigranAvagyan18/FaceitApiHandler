# Faceit API Handler

Faceit API Handler is a lightweight node module to handle Faceit API requests and responses

## Content
 - [Features](#features)
 - [Installation](#installation)
 - [Usage](#usage)

## Features

 - Lightweight (1 dependency)
 - Support [Promise API](https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/Promise)
 - Support [Asynchronous calls](https://developer.mozilla.org/en/docs/Learn/JavaScript/Asynchronous)

## Installation

Use the package manager [npm](npmjs.com) to install faceitapi.

```
npm install faceitapi
```

## Usage

```js
const Faceit = require('faceitapi');
const faceit = new Faceit('YOUR-API-KEY');

const resp = await faceit.getPlayerStats('T777A');
console.log(resp);
```

## Promises & Async/Await

Faceit API Handdler supports both interfaces

### Promises

```js
faceit.getPlayerStats('FACEIT-NICKNAME')
  .then(resp=>console.log(resp))
  .catch(e=>console.log(e));
```

### Async/Await

``` 
async () => {
  const resp = await faceit.getPlayerStats('T777A');
  console.log(resp);
}()
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

## License
[MIT](https://choosealicense.com/licenses/mit/)