# Lamport's Hash
---

A **one-time password** (OTP) scheme that uses a one-way hash chain to authenticate users without transmitting their original secret

![TikZ Diagram](/attachments/tikz-ab78def3e0beda20b0b6056cfd28ead6.svg)

Each password is used only once. After $n$ authentications, Alice must register a new chain

## Security
- **Replay protection**: Previously used values are rejected after the server updates its stored hash. However real-time replays will work
