# HMAC
---

A **message authentication code (MAC)** that combines a cryptographic hash function with a secret key to verify message integrity and authenticity

## Algorithm
$$
\operatorname{HMAC}(K,M) =
H\left((K' \oplus \text{opad}) \parallel
H((K' \oplus \text{ipad}) \parallel M)\right)
$$
- $K$ = Secret key, normalized to the hash's block size as $K'$
- $M$ = Message
- $H$ = Hash function, e.g. SHA-256
- $\text{ipad}$ = Inner padding constant
- $\text{opad}$ = Outer padding constant

## Security
- Provides **integrity** and **message authentication** to parties sharing the secret key
- Anyone with the key can generate or verify an HMAC, so it does not provide non-repudiation
- HMAC-SHA-256 is a common secure choice
- Unlike a plain hash, an attacker without the key cannot feasibly forge a valid HMAC
