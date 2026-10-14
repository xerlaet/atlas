# Electronic Codebook (ECB)
---

A [block cipher mode](/notes/cryptographic-modes-of-operation) that encrypts each block independently using the same key

## Algorithm
$$
\begin{align}
C_i &= E_K(P_i) \\
P_i &= D_K(C_i)
\end{align}
$$
- $P_i$ = Plaintext block
- $C_i$ = Ciphertext block
- $E_K, D_K$ = Encryption and decryption using key $K$

## Security
- Identical plaintext blocks produce identical ciphertext blocks
- Reveals patterns in structured data
- Does not provide integrity or authenticity
- **Not recommended** for secure encryption
