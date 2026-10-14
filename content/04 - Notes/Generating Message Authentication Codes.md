# Message Authentication Codes (MACs)
---

A cryptographic mechanism that uses a secret key to verify message integrity and authenticity

## Algorithm
$$
\begin{align}
T &= \operatorname{MAC}_K(M) \\
\operatorname{Valid} &= [T \stackrel{?}{=} \operatorname{MAC}_K(M)]
\end{align}
$$
- $M$ = Message
- $K$ = Shared secret key
- $T$ = Authentication tag

## Security
- Detects unauthorized message modification and forgery
- Does not provide confidentiality
- Does not provide non-repudiation because both parties share the key
- Examples: [HMAC](/notes/hmac) and AES-CMAC
