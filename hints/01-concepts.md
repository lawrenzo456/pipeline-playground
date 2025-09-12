# Concepts: What is a pipeline?

A pipeline is a **sequence of steps** where each step takes a value and returns a new value.
Example:
- Input: `" hello "`
- Step 1: trim → `"hello"`
- Step 2: uppercase → `"HELLO"`
- Step 3: append "!" → `"HELLO!"`

You’re building two things:
1) A **place to store steps** in order.
2) A way to **run** those steps on some input.
