# Public Key Infrastructure
---

A system for securely distributing, validating, and managing public keys

## Components
1. **Certificates**: Bind an identity to a public key
2. **Certificate Authority (CA)**: Issues and digitally signs certificates
3. **Certification repositories**: Store and distribute certificates
4. **Revocation mechanisms**: Indicate when certificates are no longer trusted, e.g. CRLs

## Trust Models
- **Monopoly**: One central CA is trusted by all participants
- **Oligarchy**: A small set of trusted CAs can issue certificates
- **Anarchy**: No central authority; users establish trust independently, e.g. Web of Trust

## X.509 Format
| Field | Description |
|---|---|
| Version | X.509 version (v1, v2, or v3) |
| Serial Number | Unique identifier assigned by the CA |
| Signature Algorithm | Algorithm used by the CA to sign the certificate |
| Issuer | CA that issued the certificate |
| Validity | Not Before and Not After dates |
| Subject | Identity the certificate identifies |
| Subject Public Key Info | Subject's public key and algorithm |
| Issuer Unique ID | Optional issuer identifier (v2+) |
| Subject Unique ID | Optional subject identifier (v2+) |
| Extensions | Additional constraints and information (v3), e.g. key usage, subject alternative names, basic constraints |
| Signature | CA's digital signature over the certificate data |

## Certificate Validation
- Verify the CA's digital signature
- Build a chain of trust to a trusted root CA
- Check validity dates, intended usage, and identity
- Check revocation status
