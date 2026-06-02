# Generate Unique ID
A lightweight JavaScript utility for generating random ID strings with customizable length, character sets, and symbol inclusion/exclusion rules.

Perfect for generating:

- Temporary identifiers
- Form element IDs
- Test data
- Reference codes
- Client-side unique keys


Try the [interactive demo](https://steve-232.github.io/generate-unique-id/)

## Installation
Using npm:
```bash
npm i generate-unique-id
```

Using yarn:
```bash
yarn add generate-unique-id
```

## Usage
### CommonJS
```js
const generateUniqueId = require('generate-unique-id'); 

const id = generateUniqueId(); 

console.log(id); 
// Example output: "8p7m2k1v9q4t5r6s3x0a"
// 20 characters, letters and numbers
```

### ES Modules
```js
import generateUniqueId from 'generate-unique-id'; 

const id = generateUniqueId();

console.log(id)
// Example output: "i0t58pe1iieiqsz6htd0"
// 20 characters, letters and numbers
```

### Examples
```js
// Generate a longer ID
const id1 = generateUniqueId({ 
  length: 32 
}); 
console.log(id1); // "j4w0g8n3x6p9t2v7r5k1m8q4c0y6h2z"

// Numbers only
const id2 = generateUniqueId({ 
  useLetters: false 
}); 
console.log(id2); // "58027491362018475329"

// Add custom symbols
const id3 = generateUniqueId({ 
  includeSymbols: ['@', '#', '|'] 
}); 
console.log(id3); // "g7@r3m#x9|k2v8a"

// Exclude specific characters
const id4 = generateUniqueId({ 
  excludeSymbols: ['0', 'O', '1', 'l'] 
}); 
console.log(id4); // "bxf7qaZ9yprtmv"
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
    <td>Include letters (a-z) in the character pool.</td>
  </tr>
  <tr>
    <td>useNumbers</td>
    <td>boolean</td>
    <td>true</td>
    <td>Include numbers (0-9) in the character pool.</td>
  </tr>
  <tr>
    <td>includeSymbols</td>
    <td>array</td>
    <td>[]</td>
    <td>Additional characters to include in the character pool.</td>
  </tr>
  <tr>
    <td>excludeSymbols</td>
    <td>array</td>
    <td>[]</td>
    <td>Characters to remove from the character pool.</td>
  </tr>
</table>

## Why not UUID?

UUIDs are great for globally unique identifiers, but they are often longer and less readable.

```js
// UUID
550e8400-e29b-41d4-a716-446655440000

// generate-unique-id
x8k2m7q4v9r5t1p6
```
<!-- Use `generate-unique-id` when you need short, customizable random IDs. -->

Use `generate-unique-id` when you need:

- Shorter IDs
- Custom lengths
- Numbers-only IDs
- Custom character sets
- Human-friendly identifiers

## Notes
- Generated IDs are random and intended for general-purpose identification
- This package does not generate RFC-compliant UUIDs
- The probability of collisions is very low for typical use cases, but uniqueness is not mathematically guaranteed

## License
[MIT license](http://www.opensource.org/licenses/MIT)