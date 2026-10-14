# AES
---

The **Advanced Encryption Standard**, a widely used symmetric block cipher standardized in 2001 to replace DES

## Algorithm
- Block size = 128 bits
- Key sizes = 128, 192, or 256 bits
- Rounds = 10, 12, or 14, respectively

Each round applies transformations to a 4×4 byte state matrix
1. **SubBytes**: Nonlinear byte substitution
2. **ShiftRows**: Cyclically shifts rows
3. **MixColumns**: Mixes bytes within each column (omitted in the final round)
4. **AddRoundKey**: XORs the state with a round key

## Security
- Considered secure when correctly implemented with appropriate key sizes
- Widely used in TLS, disk encryption, and wireless security
- Requires a secure mode of operation, such as GCM, for encrypting messages
