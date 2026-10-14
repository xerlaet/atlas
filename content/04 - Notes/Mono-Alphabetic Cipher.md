# Mono-Alphabetic Cipher
---

A **substitution cipher** that replaces each plaintext letter with a fixed ciphertext letter according to a permutation of the alphabet

## Algorithm
$$
\begin{align}
C &= \pi(P) \\
P &= \pi^{-1}(C)
\end{align}
$$
- $P$, $C$ = Plaintext and ciphertext letters represented 0-25
- $\pi$ = Key defining a permutation of the alphabet
- $\pi^{-1}$ = Inverse permutation used for decryption

## Security
- Up to $26!$ possible substitution keys
- Vulnerable to frequency analysis because each letter always maps to the same letter
- Preserves letter frequencies and patterns, such as repeated letters
