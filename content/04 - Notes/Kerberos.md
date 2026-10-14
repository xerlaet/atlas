# Kerberos
---

A **trusted intermediary protocol** that uses a Key Distribution Center (KDC) to authenticate users and distribute session keys

![TikZ Diagram](/attachments/tikz-f0a1985cb7468f04e3bad7a42daa1020.svg)

## Security
- **Trusted KDC**: Must securely manage long-term keys shared with each user
- **Session key**: $K_{AB}$ protects communication between Alice and Bob
- **Ticket**: Lets Alice present credentials Bob can verify without contacting the KDC again
- **Limitation**: Basic Kerberos does not inherently prevent replay attacks unless freshness checks, such as timestamps and replay caches, are used
