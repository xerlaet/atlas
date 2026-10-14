# One-Time Pad
---

A **stream cipher** that combines plaintext with a truly random key that is as long as the message and used only once

## Algorithm
$$
\begin{align}
C &= P \oplus K \\
P &= C \oplus K
\end{align}
$$
- $P$, $C$ = Plaintext and ciphertext bits
- $K$ = Random key of equal length to the plaintext

## Security
- Provides **perfect secrecy** if the key is truly random, secret, message-length, and never reused
- Key distribution and secure storage are difficult
- Reusing a key can expose relationships between plaintexts
