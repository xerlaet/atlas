# RC4
---

A **stream cipher** designed by Ron Rivest in 1987 that generates a pseudorandom byte stream and XORs it with plaintext. It was once widely used in SSL/TLS

## Algorithm
1. **Key-Scheduling Algorithm (KSA)**: Initializes and permutes a 256-byte state array using the key
2. **Pseudo-Random Generation Algorithm (PRGA)**: Updates the state and generates one keystream byte at a time
3. **Encryption**: XORs each plaintext byte with the corresponding keystream byte
$$
C_i = P_i \oplus K_i
$$
- $P_i$, $C_i$ = Plaintext and ciphertext bytes
- $K_i$ = Generated keystream byte

## Security
- Keystream has statistical biases that can reveal plaintext
- Weaknesses enabled practical attacks against protocols such as WEP
- Deprecated and prohibited in modern TLS
