# Cross-Entropy
---

**Cross-entropy** measures the difference between two probability distributions. $P(x)$ is the true distribution, and $Q(x)$ is the predicted distribution
$$
H(P,Q)=-\sum _{x\in X }P(x)\ln Q(x)
$$

When $Q$ perfectly matches $P$, cross-entropy will reach its minimum value (the [Entropy](/notes/entropy) of $P$). As $Q$ deviates from $P$, cross-entropy grows larger

For example, when the true class label $y=1$, the cross-entropy for one sample looks like the following:
![TikZ Diagram](/attachments/tikz-dd09c5b1f9854e8e0a2e7790653230c8.svg)
