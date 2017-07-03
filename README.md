# map-assign

`Object.assign` for `Map`-like collections

## Up and running

Get the package right from GitHub repository:

`npm install --save shvaikalesh/map-assign`

Use `default` export:

`import mapAssign from "map-assign"`

## Example

```js
// works with plain objects too
let params = mapAssign(new Map, {list: "animated"})
let url = new URL("https://api.dribbble.com/v1/shots")

// duck typing: any object with `set` method will do
mapAssign(url.searchParams, params, {sort: "views"})

console.log(`${url}`)
// => "https://api.dribbble.com/v1/shots?list=animated&sort=views"
```
