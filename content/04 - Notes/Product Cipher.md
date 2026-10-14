# Product Cipher
---

A cipher that combines multiple operations, typically **substitution** and **transposition**, to achieve stronger security than either operation alone

## Algorithm
$$
P \xrightarrow{S} \xrightarrow{P} C
$$
- $S$ = Substitution operation
- $P$ = Permutation or transposition operation
- $C$ = Ciphertext

Repeated rounds of substitution and permutation create **confusion** and **diffusion**

## Security
- Combining operations can obscure relationships between plaintext, ciphertext, and key
- Modern block ciphers commonly use repeated substitution and permutation-like transformations
- Security depends on the design and key, not simply on combining operations
