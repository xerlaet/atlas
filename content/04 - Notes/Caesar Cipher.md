# Caesar Cipher
---

A **substitution cipher** that shifts each letter by a fixed number of positions in the alphabet. It was used by the Romans for military communications

## Algorithm
$$
\begin{align}
C &= (P + k) \bmod 26 \\
P &= (C - k) \bmod 26
\end{align}
$$
- $P$, $C$ = Plaintext and ciphertext letters represented 0-25
- $k$ = Shift key

## Security
- Only 25 possible nontrivial keys, making brute force trivial
- Vulnerable to frequency analysis because each letter always maps to the same letter
