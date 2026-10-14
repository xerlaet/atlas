# Asymmetric Key Cryptography
---

Both parties use a mathematically related public-private key pair
$$
P \xrightarrow{E_{K_{\text{pub}}}} C \xrightarrow{D_{K_{\text{priv}}}} P
\qquad \qquad
P \xrightarrow{E_{K_{\text{priv}}}} C \xrightarrow{D_{K_{\text{pub}}}} P
$$
The public key can be shared; the private key must remain secret

## Applications
- **Encryption**: Public key encrypts; private key decrypts
- **Digital signatures**: Private key signs; public key verifies
- **Key exchange**: Establishes shared secrets over insecure channels (because symmetric key is faster)
- **Authentication**: Proves control of a private key

## Algorithms
- [RSA](/notes/rsa) - Supports encryption and digital signatures
- [DSA](/notes/dsa) - Deprecated way to create and verify digital signatures
- [Diffie-Hellman Key Exchange](/notes/diffie-hellman-key-exchange) - Establishes shared secrets using modular exponentiation
