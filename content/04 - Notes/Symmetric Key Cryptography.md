# Symmetric Key Cryptography
---

Both parties share a secret key used for encryption and decryption
$$
P \xrightarrow{E_K} C \xrightarrow{D_K} P
$$
The main challenge is securely distributing the key

## Classical Ciphers
- [Caesar Cipher](/notes/caesar-cipher) - Shifts letters by a fixed amount
- [Mono-Alphabetic Cipher](/notes/mono-alphabetic-cipher) - Replaces each letter with a fixed substitute
- [Poly-Alphabetic Cipher](/notes/poly-alphabetic-cipher) - Uses multiple substitution alphabets
- [One-Time Pad](/notes/one-time-pad) - Uses a truly random, single-use key
- [Rail Fence Cipher](/notes/rail-fence-cipher) - Rearranges letters using a zigzag pattern
- [Product Cipher](/notes/product-cipher) - Combines substitution and permutation operations

## Modern Block Ciphers
- [DES](/notes/des) - Legacy cipher with an insecure 56-bit key
- [Triple-DES](/notes/triple-des) - Applies DES three times; deprecated
- [AES](/notes/aes) - Modern block cipher with 128-bit blocks and 128-, 192-, or 256-bit keys

## Stream Ciphers
- [Stream Cipher](/notes/stream-cipher) - Encrypts data using a pseudorandom keystream
- [RC4](/notes/rc4) - Deprecated stream cipher with exploitable weaknesses
