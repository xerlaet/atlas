# Cipher Algorithms
---

## Cipher Algorithms
Caesar Cipher
- used by the Roman military
- shift all letters by some value
- $E(p)=(p+k)\text{mod} (26)$

Mono-alphabetic cipher
- Each plaintext letter maps to a different random ciphertext letter, $26!$ keys now
- This can be broken by accounting for usage frequency for each letter

Poly-alphabetic cipher (e.g. Vigenere cipher)
- Line up the plaintext with a repeating cipher
- $E_{i}=(P_{i}+K_{i})\text{mod}26$

One-time pad
- Use a truly random key each time
- Unconditionally secure? Problems distributing keys?

Transposition ciphers
- write letters diagonally over a number of rows, read cipher as row by row

Product ciphers
- mix substitution or transposition ciphers together multiple times in a row
- bridge into modern crypto algorithms

Block vs stream ciphers
- block ciphers operate on blocks of text at a time, stream ciphers operate a bit or byte at a time (such as for real time systems)
