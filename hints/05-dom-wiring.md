# DOM wiring

<details><summary>Hint 1: Query elements</summary>

`document.getElementById('user-input')`, `document.querySelectorAll('[data-step]')`
</details>

<details><summary>Hint 2: Button clicks</summary>

For each step button, read its `data-step`, map that to a transform, and call `pipeline.add(...)`.
</details>

<details><summary>Hint 3: Updating the UI</summary>

When a step is added, append an `<li>` with the step name to `#step-list`.
</details>

<details><summary>Hint 4: Running</summary>

On Run click: read the input’s value, call `pipeline.run(value)`, and show the result in `#output`.
</details>
