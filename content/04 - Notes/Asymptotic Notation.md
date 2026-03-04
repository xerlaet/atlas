---
aliases:
- Big O Notation
---
# Asymptotic Notation
---

**Asymptotic Notation** describes how a function grows as the input scales to infinity

![TikZ Diagram](/attachments/tikz-36dce34149b347c3f7122a8b485ba7f7.svg)

## Notations
**Big O** $O(g(n))$ is an upper bound when $f(n)$ grows no faster than $g(n)$
$$
f(n)\in O(g(n)) \text{ if } f(n)\leq c \cdot g(n) \text{ for all } n\geq n_{0}
$$

**Big Omega** $\Omega(g(n))$ is a lower bound when $f(n)$ grows no slower than $g(n)$
$$
f(n)\in \Omega (g(n)) \text{ if } f(n)\geq c \cdot g(n) \text{ for all } n\geq n_{0}
$$

**Big Theta** $\Theta(g(n))$ is a tight bound when $f(n)$ grows at the same rate as $g(n)$
$$
f(n)\in \Theta (g(n)) \text{ if } f(n)\in O(g(n)) \text{ and } f(n)\in \Omega (g(n))
$$

**Little o** $o(g(n))$ is a loose upper bound when $f(n)$ grows strictly slower than $g(n)$
$$
f(n)\in o(g(n)) \text{ if } \lim_{n \to \infty} \frac{f(n)}{g(n)}=0
$$

**Little omega** $\omega(g(n))$ is a loose lower bound when $f(n)$ grows strictly faster than $g(n)$
$$
f(n)\in \omega (g(n)) \text{ if } \lim_{n \to \infty} \frac{f(n)}{g(n)}=\infty
$$
