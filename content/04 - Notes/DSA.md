# Digital Signature Algorithm (DSA)
---

An **asymmetric digital signature algorithm** used to verify message authenticity and integrity. It relies on the difficulty of the discrete logarithm problem

## Algorithm
1. Choose domain parameters $p,q,g$ and private key $x$
2. Compute public key $y=g^x \bmod p$
3. Hash message $M$ and generate a unique secret nonce $k$
4. Compute signature $(r,s)$
$$
\begin{align}
r &= (g^k \bmod p) \bmod q \\
s &= k^{-1}(H(M)+xr) \bmod q
\end{align}
$$
5. Verify the signature using the public key $y$
$$
\begin{align}
w &= s^{-1} \bmod q \\
u_1 &= H(M)w \bmod q \\
u_2 &= rw \bmod q \\
v &= (g^{u_1}y^{u_2} \bmod p) \bmod q
\end{align}
$$
The signature is valid if $v=r$

- $p,q,g$ = Public domain parameters
- $x$ = Private signing key
- $y$ = Public verification key
- $k$ = Secret, per-signature nonce
- $(r,s)$ = Digital signature

## Security
- Provides **authentication**, **integrity**, and support for **non-repudiation**, but not encryption
- Reusing or exposing $k$ can reveal the private key
- DSA is a legacy algorithm and is no longer approved for generating new signatures under current NIST standards
