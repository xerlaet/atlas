# Triple-DES
---

A symmetric block cipher that applies [DES](/notes/des) three times to extend its effective security without replacing the underlying algorithm

## Algorithm
$$
\begin{align}
C &= E_{K_3}(D_{K_2}(E_{K_1}(P))) \\
P &= D_{K_1}(E_{K_2}(D_{K_3}(C)))
\end{align}
$$
- $P$, $C$ = Plaintext and ciphertext blocks
- $E_K$, $D_K$ = DES encryption and decryption with key $K$
- Common variants use two or three independent keys

## Security
- 64-bit block size makes it vulnerable to birthday-bound attacks on large amounts of data
- Much slower than AES
- Deprecated; Superseded by [AES](/notes/aes)
