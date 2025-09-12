# Stretch: Async steps (concept + outline)

Some steps might return a Promise (e.g., wait 500ms, then capitalize).

- Make `.run` `async`.
- Loop through steps with `await` so each step finishes before the next begins.

Pseudo-shape:
```js
let value = initialValue;
for (const step of steps) {
  value = await step(value);
}
return value;

