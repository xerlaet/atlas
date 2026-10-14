# RSA
---

An **asymmetric cryptographic algorithm** that uses a public key for encryption and a private key for decryption, based on the difficulty of factoring large integers. Named after the creators Rivest, Shamir, and Adleman

## Algorithm
1. Choose large primes $p,q$
2. Compute $n=pq$ and $\phi(n)=(p-1)(q-1)$
3. Choose public exponent $e$ such that $\gcd(e,\phi(n))=1$
4. Compute private exponent $d=e^{-1}\bmod \phi(n)$
$$
\begin{align}
C &= M^e \bmod n \\
M &= C^d \bmod n
\end{align}
$$
- $M$ = Message represented as an integer
- $C$ = Ciphertext
- $(n,e)$ = Public key
- $(n,d)$ = Private key

## Security
- Security relies on the difficulty of factoring $n$ into $p$ and $q$
- Textbook RSA is deterministic and insecure; use secure padding such as **OAEP** for encryption
- Use sufficiently large keys, typically at least 2048 bits
