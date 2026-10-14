# Stream Cipher
---

A symmetric cipher that encrypts data one bit or byte at a time by combining plaintext with a pseudorandom **keystream**

## Algorithm
$$
\begin{align}
C &= P \oplus K \\
P &= C \oplus K
\end{align}
$$
- $P$, $C$ = Plaintext and ciphertext bits or bytes
- $K$ = Keystream generated from a secret key and often a nonce

## Security
- Keystream must be unpredictable to an attacker
- Never reuse the same keystream for different plaintexts
- Encryption alone does not provide integrity or authentication
