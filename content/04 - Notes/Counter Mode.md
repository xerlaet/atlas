# Counter Mode (CTR)
---

A [block cipher mode](/notes/cryptographic-modes-of-operation) that encrypts counter values to generate a keystream, which is XORed with plaintext

## Algorithm
$$
\begin{align}
C_i &= P_i \oplus E_K(T_i) \\
P_i &= C_i \oplus E_K(T_i)
\end{align}
$$
- $P_i$ = Plaintext block
- $C_i$ = Ciphertext block
- $T_i$ = Unique counter block
- $E_K$ = Encryption using key $K$

## Security
- Never reuse a counter block with the same key
- Supports parallel encryption and decryption
- Does not provide integrity or authenticity
