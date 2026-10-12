# Perf Quick Wins

This repo captures a set of easy, high-impact performance improvements for JavaScript code.

## 10 performance improvements to consider

1. Replace repeated array scans with Set-based membership checks.
2. Memoize expensive pure computations.
3. Avoid reallocating objects inside hot loops.
4. Use early returns to skip unnecessary work.
5. Cache DOM lookups or computed values outside loops.
6. Batch DOM writes instead of mutating the tree repeatedly.
7. Debounce or throttle repeated user-driven events.
8. Prefer O(1) lookups over O(n) scans for frequent access.
9. Lazy-load large assets and defer non-critical rendering.
10. Reduce JSON serialization and repeated network calls.

This project demonstrates the highest-impact, lowest-effort improvement: replacing repeated membership checks with a Set, which reduces duplicate detection from O(n^2) to O(n).
