# Network Security
---

email is best
one book/notebook no loose papers

[CIA Triangle](/notes/cia-triangle)

A solution
**Technical aspect**: flawless protocols, infrastructure, os, applications
**Policy aspect**: perfect policy
**Human aspect**: every user is a security expert

Security is a money hole. How much should you spend?

## Crypto
[Cryptographic Algorithms](/notes/cryptographic-algorithms)

Ciphertext attacks:
- try every key to decrypt it (how to distinguish cleartext vs gibberish)
- Knowing <plaintext,ciphertext> pairs
- Choosing a plaintext and the system responds with the corresponding ciphertext
- $d(s\mid m)$ doesn't work well because the attacker can simply compute $d(s\mid m \mid \bar{m})$

Performance
- public key crypto is slow. So generally it's used in setting up secret symmetric keys

Current algorithms are **computationally secure** vs **unconditional security**
