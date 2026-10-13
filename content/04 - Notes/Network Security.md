# Network Security
---

**Passive attack**: intruder eavesdrops but doesn't modify anything
**Active attack**: intruder may transmit, replay, modify, or delete messages
**Man in the middle** (MITM) attack: attacker acts as a relay

## Foundations
- [Network Layers](/notes/network-layers)

## Cryptography
- [Cryptographic Algorithms](/notes/cryptographic-algorithms)

[Communication Session Establishment](/notes/communication-session-establishment)
[IPsec](/notes/ipsec)

---

Ciphertext attacks:
- try every key to decrypt it (how to distinguish cleartext vs gibberish)
- Knowing <plaintext,ciphertext> pairs
- Choosing a plaintext and the system responds with the corresponding ciphertext
- $d(s\mid m)$ doesn't work well because the attacker can simply compute $d(s\mid m \mid \bar{m})$

Performance
- public key crypto is slow. So generally it's used in setting up secret symmetric keys

Current algorithms are **computationally secure** vs **unconditional security**


## Authentication
### KDC vs CA
**Key Distribution Centers** (KDC) are trusted holders of secret keys
- fast, but has to be online
**Certificate Authorities** (CAs) generates certificates that everyone trusts
- can be offline and is simple/scaleable
- if compromised, cannot decrypt conversations just impersonate nodes
- **Certificate revocation lists** (CRLs) are pretty self explanatory

KDCs preferred for LANs, CAs for WAN

**Salting**: mix a random number with each hash, which prevents comparison of a guess with every hash at once

What you know/have/are (passwords, cards, fingerprint scan)

**Secure Remote Password** (SRP)

Swap keys for different communications, and/or use different keys for authentication vs communication etc

Use different keys for client->server and server->client, or different numbers (e.g. even and odd) to prevent attack where server asks client to encrypt something, client asks a second server to do it for them

Client should be the first to authenticate, so they can't do an offline dictionary attack against whatever encryption you have

protocol failing if attacker can get private key in a year for captured communication is bad

[Diffie-Hellman Key Exchange](/notes/diffie-hellman-key-exchange)

Needham-Schroeder and extended
Otway-Rees algorithm
Kerberos

perfect forward secrecy, don't know signature key to not accuse

Oligarchy model
Anarchy model

A solution
**Technical aspect**: flawless protocols, infrastructure, os, applications
**Policy aspect**: perfect policy
**Human aspect**: every user is a security expert

Security is a money hole. How much should you spend?

[CIA Triangle](/notes/cia-triangle)

email is best
one book/notebook no loose papers

Project
- 1 server, 2 clients
- main thread: accept Alice -> hand off socket -> accept bob
- no CA/PKI to build
- long term keys can be preloaded
- private keys stay private
- hosts stay uncompromised
- server doesn't have to be authenticated by clients
- available primatives: RSA, diffie-Hellman, keyed hashes, standard PRNGs
- No: passwords or RSA secret transport, RSA/AES?DES/ChaCha20 for confidentiality, no CSPRNGs or TLS/SSL/SSH
