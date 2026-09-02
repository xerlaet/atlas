# Cryptographic Algorithms
---

Algorithms for secure communication

A desireable property of an encryption algorithm is the **avalanche effect**, where changing one input bit results in changing approximately half of the output bits (all different doesn't work because binary)

## Symmetric Key
[DES](/notes/des)
[AES](/notes/aes)

Assume everyone knows the algorithm
$$
Y=E_{K}(X),X=D_{K}(Y)
$$

**Electronic Codebook Book** (ECB): $c_{i}=E_{K_{1}}(m_{1})$
Advantages: errors or changed bits in a block only affect that block
Disadvantages: repetitions in the plain text will repeat in the cipher text

**Cipher Block Chaining** (CBC): $c_{i}=E_{K_{1}}(m_{i} \oplus c_{i-1})$
Advantages: changing the document will require work to re-encrypt it
Disadvantages: attackers can still change any two blocks to something random

CRC can help avoid this problem

**Counter** (CTR): $c_{i}=m_{i}\oplus E_{k_{1}}(IV+i-1)$
Advantages: easy to update the document based on just one block
Disadvantages: if the $(m,c)$ pair is discovered, the IV encryption string shouldn't be used again

**XOR Encrypt XOR** (XEX): $c_{i}=B_{\text{mod}}E_{K_{2}}\oplus (E_{K_{2}}\oplus m_{i})$ - you can use the disk block address as the IV number

## Asymmetric Key
[RSA](/notes/rsa)

Use cases: standard encryption, digital signature by private encrypting the hash of a file (non-repudiation as well), authentication by decrypting a random number, 

## Hashing Functions
[MD5](/notes/md5) (broken)
[SHA-256](/notes/sha-256)

Used to check downloaded or received data, or for a password file

A keyed hash function uses the text and key in combination to produce the hash

A standard for hash functions is that the probability of finding a collision should be roughly $\frac{1}{2^{\text{bit length}}}$

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