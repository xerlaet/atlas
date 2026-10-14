# Secure Remote Password (SRP)
---

A **password-authenticated key exchange** (PAKE) that authenticates client and server while establishing a shared session key without transmitting the password

![TikZ Diagram](/attachments/tikz-43f4652420566344363117805d582da0.svg)

## Security
- **Password protection**: Password is never transmitted
- **Mutual authentication**: Both parties prove knowledge of the derived session key
- **Verifier-based**: Server stores a password-derived verifier instead of the password
- **Limitation**: Weak passwords and compromised endpoints remain risks
