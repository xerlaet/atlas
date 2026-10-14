# XEX
---

A tweakable block cipher construction that combines encryption with a position-dependent tweak

## Algorithm
$$
\begin{align}
C_i &= E_K(P_i \oplus T_i) \oplus T_i \\
P_i &= D_K(C_i \oplus T_i) \oplus T_i
\end{align}
$$
- $P_i$ = Plaintext block
- $C_i$ = Ciphertext block
- $T_i$ = Tweak derived from block position
- $E_K, D_K$ = Encryption and decryption using key $K$

## Security
- Tweaks make encryption depend on block position
- Does not provide integrity or authenticity
- Commonly used as the basis for XTS storage encryption
