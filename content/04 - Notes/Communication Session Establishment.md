# Communication Session Establishment
---

$K_{A-B}$ is the shared secret key between Alice and Bob

time as a challenge

don't use the same key for two different purposes

The initiator should be the first to prove it's identity

Both parties should contribute to the session key

**Reflection Attack**: Attacker opens multiple sessions, with some asking for specific challenges that the server will answer and the attack can use to reply to the server in another session.

**Nonce**: A quantity a user of a protocol uses only once (e.g. large random number)

Sometimes MITM is intentionally deployed. An intermediate service can deny certain sites, cache recent web pages, scan for viruses, and check if employees are sending confidential information

**Channel Binding**: providing users with a channel identifier that is different if there is an MITM

**Perfect Forward Secrecy**: If an eavesdropper records the entire encrypted session and subsequently obtains both parties long-term secrets, it would be impossible for them to decrypt the conversation.

![TikZ Diagram](/attachments/tikz-77b5cdea3ec1d57ef160c16cfaaf4219.svg)

---


![TikZ Diagram](/attachments/tikz-4b24eced1ad880d04dd400e0065307df.svg)

$\mathrm{Alice\ sends}\ g^a \bmod p$
