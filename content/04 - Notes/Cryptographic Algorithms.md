# Cryptographic Algorithms
---

Cryptography protects information by providing **non-repudiation** and the [CIA Triangle](/notes/cia-triangle)

## General Principles
$$
P \xrightarrow{E_K} C \xrightarrow{D_K} P
$$
- $P$ = Plaintext (original message)
- $C$ = Ciphertext (encrypted message)
- $E_K$ = Encryption using key $K$
- $D_K$ = Decryption using key $K$

**Avalanche effect**: Changing one input bit changes approximately half the output bits. Desirable in block ciphers and cryptographic hash functions, but not sufficient to establish security.

## Types of Cryptography
- [Symmetric Key Cryptography](/notes/symmetric-key-cryptography) - Shared secret key
- [Asymmetric Key Cryptography](/notes/asymmetric-key-cryptography) - Mathematically related public and private keys
- [Hash Cryptography](/notes/hash-cryptography) - Produces fixed-length digests for integrity verification
- [Cryptographic Modes of Operation](/notes/cryptographic-modes-of-operation) - Ways to encrypt large messages
