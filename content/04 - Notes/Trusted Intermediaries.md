# Trusted Intermediaries
---

## Key Distribution Center (KDC)
- Distributes symmetric session keys to communicating parties
- Alice and the KDC share $K_{A,KDC}$
- For Alice and Bob, distributes $K_{AB}$ securely to Alice and a ticket for Bob
- Compromise may expose distributed session keys
- Common in managed networks
- [Kerberos](/notes/kerberos) - Ticket-based network authentication
- [Needham-Schroeder Protocol](/notes/needham-schroeder-protocol) - Mutual authentication using a trusted server
- [Otway-Rees Protocol](/notes/otway-rees-protocol) - Mutual authentication with session key distribution

## Certificate Authority (CA)
- Signs certificates binding identities to public keys
- Certificates can be revoked via a Certificate Revocation List (CRL)
- Compromise can enable impersonation but does not inherently expose past session keys
- Scales well across organizations and the public Internet
- [Public Key Infrastructure](/notes/public-key-infrastructure) - Manages public keys and digital certificates

## Proxies
Intermediaries that inspect or modify traffic, sometimes intentionally deployed to:
- Filter websites
- Cache content
- Scan for malware
- Detect data leaks
