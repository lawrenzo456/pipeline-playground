# HTML hints

> Reveal one at a time.

<details><summary>Hint: Input</summary>
Add: `<input type="text" id="user-input" placeholder="Type something...">`
</details>

<details><summary>Hint: Run button</summary>
Add: `<button id="run-btn" type="button">Run Pipeline</button>`
</details>

<details><summary>Hint: Step buttons</summary>
Use data attributes so JS can tell which step was clicked:

<button data-step="toUpperCase" type="button">Uppercase</button>
<button data-step="trim" type="button">Trim</button>
<button data-step="appendExclamation" type="button">Append "!"</button>

</details> <details><summary>Hint: Where to show steps</summary> 

`<ul id="step-list"></ul>` </details> <details><summary>Hint: Where to show output</summary> `<pre id="output">No result yet.</pre>` </details>`