# JS: Building the pipeline

<details><summary>Level 1: Data structure</summary>

You need an **array** to keep step functions in order.

</details>

<details><summary>Level 2: Factory shape</summary>

`createPipeline()` returns an object with at least `.add(fn)` and `.run(initialValue)`.
</details>

<details><summary>Level 3: Add method</summary>

`.add(fn)` should push `fn` into your internal array and return `this` so you can chain adds.
</details>

<details><summary>Level 4: Run method (pseudo-code)</summary>

`let value = initialValue`
for each step in steps:

`value = step(value)`
`return value`
</details>

<details><summary>Level 5: Guard rails</summary>

If `.run` is called with no steps, just return the initial value.
</details>


