# Hash Cryptography
---

Hash functions map arbitrary-length data to a fixed-length digest, primarily for **integrity verification**

## Properties
- **One-way**: Computationally infeasible to recover the original input
- **Collision resistance**: Computationally infeasible to find two inputs with the same hash
- **Avalanche effect**: A small input change drastically changes the digest
- **Salting**: mix a random number with each hash, which prevents comparison of a guess with every hash at once

## Applications
- **Integrity**: Verify downloaded or received files
- **Password storage**: Store salted password hashes
- **Authentication**: [HMAC](/notes/hmac) combines a secret key with a hash function

## Algorithms
- [MD5](/notes/md5) - Broken; vulnerable to collision attacks
- [SHA-256](/notes/sha-256) - Secure, widely used cryptographic hash function
