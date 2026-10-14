# DES
---

The **Data Encryption Standard**, a symmetric block cipher standardized in 1977 and widely used before being superseded by stronger algorithms

## Algorithm
- Block size = 64 bits
- Key size = 56 effective bits (64 bits including 8 parity bits)
- Structure = 16-round Feistel network
- Each round combines expansion, key mixing, substitution, and permutation
$$
\begin{align}
L_i &= R_{i-1} \\
R_i &= L_{i-1} \oplus F(R_{i-1}, K_i)
\end{align}
$$
- $L_i$, $R_i$ = Left and right halves after round $i$
- $K_i$ = Round key
- $F$ = Round function

## Security
- 56-bit key is vulnerable to brute force (decrypted in 22 hours in 1999)
- Superseded by [Triple-DES](/notes/triple-des)
- DES is considered insecure and should not be used ($2^{56}$ steps to brute force)
