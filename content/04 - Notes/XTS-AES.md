# XTS-AES
---

A block cipher mode based on XEX that encrypts data in storage devices using position-dependent tweaks

## Algorithm
$$
\begin{align}
T_i &= \alpha^i E_{K_2}(I) \\
C_i &= E_{K_1}(P_i \oplus T_i) \oplus T_i
\end{align}
$$
- $P_i$ = Plaintext block
- $C_i$ = Ciphertext block
- $K_1, K_2$ = Independent AES keys
- $I$ = Data-unit identifier, such as a disk sector number
- $T_i$ = Tweak for block position $i$
- $\alpha^i$ = Finite-field multiplication used to derive successive tweaks

## Security
- Designed for disk and storage encryption
- Supports data units whose length is not a multiple of the block size
- Does not provide integrity or authenticity
