# Cryptographic Modes of Operation
---

Define how a [block cipher](/notes/symmetric-key-cryptography) processes data across multiple blocks to provide confidentiality and, in some cases, authentication

## Modes
- [Electronic Codebook](/notes/electronic-codebook) (ECB) - Encrypts blocks independently
- [Cipher Block Chaining](/notes/cipher-block-chaining) (CBC) - Chains blocks using XOR
- [Counter Mode](/notes/counter-mode) (CTR) - Encrypts counter values to generate a keystream
- [XEX](/notes/xex) - Uses position-dependent tweaks
- [XTS-AES](/notes/xts-aes) - Tweak-based encryption for storage
- [Galois Counter Mode](/notes/galois-counter-mode) (GCM) - Authenticated encryption
- [Generating Message Authentication Codes](/notes/generating-message-authentication-codes) - Provides integrity and authenticity
