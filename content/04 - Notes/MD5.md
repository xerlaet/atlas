# MD5
---

A **cryptographic hash function** that produces a 128-bit (16-byte) digest from arbitrary-length input

## Algorithm
$$
H = \operatorname{MD5}(M)
$$
- $M$ = Input message
- $H$ = 128-bit hash digest

## Security
- Fast, but vulnerable to **collision attacks**, where different inputs produce the same hash
- Broken for cryptographic security and should not be used for digital signatures or integrity protection against attackers
- Still encountered in legacy systems and non-security checksums
