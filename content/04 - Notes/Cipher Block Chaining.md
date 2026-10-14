# Cipher Block Chaining (CBC)
---

A [block cipher mode](/notes/cryptographic-modes-of-operation) that XORs each plaintext block with the previous ciphertext block before encryption

## Algorithm
$$
\begin{align}
C_i &= E_K(P_i \oplus C_{i-1}) \\
P_i &= D_K(C_i) \oplus C_{i-1}
\end{align}
$$
- $P_i$ = Plaintext block
- $C_i$ = Ciphertext block
- $C_0$ = Initialization vector (IV)
- $E_K, D_K$ = Encryption and decryption using key $K$

## Security
- Requires an unpredictable, unique IV for each encryption under a given key
- Requires padding when plaintext length is not a multiple of the block size
- Encryption is sequential; decryption can be parallelized
- Does not provide integrity or authenticity; use authenticated encryption when possible
