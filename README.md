# Generate Unique ID
Generate a unique random ID string. GUI demo can be found [here](https://steve-232.github.io/generate-unique-id/).
## Installation
Using npm:
```js
npm i generate-unique-id
```

Using yarn:
```js
yarn add generate-unique-id
```

Using classic "src"
```html
<script src="path/to/the/file/generateUniqueId.js"></script>
```

## Usage
```js
const generateUniqueId = require('generate-unique-id');

// example 1
const id1 = generateUniqueId();

// example 2
const id2 = generateUniqueId({
  length: 32,
  useLetters: false
});

// example 3
const id3 = generateUniqueId({
  includeSymbols: ['@','#','|'],
  excludeSymbols: ['0']
});
```

## Options
<table>
  <tr>
    <th>Option</th>
    <th>Type</th>
    <th>Default</th>
    <th>Description</th>
  </tr>
  <tr>
    <td>length</td>
    <td>number</td>
    <td>20</td>
    <td>Length of the generated ID.</td>
  </tr>
  <tr>
    <td>useLetters</td>
    <td>boolean</td>
    <td>true</td>
    <td>Use letters (English alphabet) as part of the generated ID.</td>
  </tr>
  <tr>
    <td>useNumbers</td>
    <td>boolean</td>
    <td>true</td>
    <td>Use numbers as part of the generated ID.</td>
  </tr>
  <tr>
    <td>includeSymbols</td>
    <td>array</td>
    <td>[]</td>
    <td>Use additional letters as part of the generated ID.</td>
  </tr>
  <tr>
    <td>excludeSymbols</td>
    <td>array</td>
    <td>[]</td>
    <td>Do not use these symbols as part of the generated ID.</td>
  </tr>
</table>

## License
[MIT license](http://www.opensource.org/licenses/MIT)
