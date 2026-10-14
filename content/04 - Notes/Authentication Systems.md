# Authentication Systems
---

Verify identity using one or more factors

- **Knowledge** - Something known (e.g. password)
- **Possession** - Something held (e.g. key)
- **Inherence** - Something inherent (e.g. fingerprint)

## Protocol Design
- **Initiator authentication** - Authenticate early to limit offline password guessing
- **Key separation** - Use distinct keys for different purposes and directions
- **Key freshness** - Use fresh keys/nonces to prevent replay
- **Key contribution** - Both parties contribute to the session key
- **Protocol separation** - Bind messages to roles, directions, and context to prevent reflection attacks

## Protocols
- [Lamport's Hash](/notes/lamports-hash) - One-time password authentication
- [Secure Remote Password](/notes/secure-remote-password) - Mutual authentication and key exchange
- [Diffie-Hellman Key Exchange](/notes/diffie-hellman-key-exchange) - Establishes shared secret over insecure channels
