# Stretch: Memoize mode (concept + outline)

Goal: If the same input is run again, return the cached result.

- You need a `cache` that survives between calls to `.run` (a closure or property).
- Keys: use the input string; Values: the computed output.

Outline:
1) If memoize is ON and `cache[input]` exists → return `cache[input]`.
2) Else compute by running steps → store in `cache[input]` → return it.
