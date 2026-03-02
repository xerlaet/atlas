# Truth Tables
---
When constructing a truth table, start with atomic propositions at the left, and work towards compound propositions

| p   | q   | $\neg p$ | $p \land q$ | $p \lor q$ | $p \oplus q$ | $p \to q$ | $p \leftrightarrow q$ |
| --- | --- | -------- | ----------- | ---------- | ------------ | --------- | --------------------- |
| T   | T   | F        | T           | T          | F            | T         | T                     |
| T   | F   | F        | F           | T          | T            | F         | F                     |
| F   | T   | T        | F           | T          | T            | T         | F                     |
| F   | F   | T        | F           | F          | F            | T         | T                     |
Note that 1/0 can be used instead of T/F which makes more sense for digital circuits

In a truth table with $n$ propositional variables, there are $2^n$ rows and we can construct $2^{2^n}$ distinct (not equivalent) propositions
