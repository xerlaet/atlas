# Diffie-Hellman Key Exchange
---

The goal of **Diffie-Hellman** is to establish a shared symmetric key over an insecure channel

This works because of the following property:
$$
\begin{align}
g^{{ab}}\bmod p =&(g^{a}\bmod p)^{b}\bmod p \\
=&(g^{b}\bmod p)^{a}\bmod p \\
\end{align}
$$

![TikZ Diagram](/attachments/tikz-3c3c8c9f89051832adbaff43cfde6041.svg)

## Authenticated Diffie-Hellman
This version uses **digital signatures** to authenticate the exchanged public values. They both use Diffie-Hellman, but additionally send a hashed version showing that they both computed the shared secret

![TikZ Diagram](/attachments/tikz-9dd17f8936ab61fc2f5cc46de3193b15.svg)
