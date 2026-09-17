# Fundamental Probability Rules
---

Two events are **independent** if knowing one doesn't change the probability of the other, **mutually exclusive** if they both cannot happen together, and **exhaustive** if their union is the sample space

For a sample space $\Omega$ where all outcomes are equally likely, the probability of an event $A$ is the ratio of their cardinalities:
$$
\frac{E}{|\Omega |}
$$
**Addition Rule** (Union):
$$
P(A\cup B)=P(A)+P(B)-P(A\cap B)
$$
**Multiplication Rule** (Intersection):
$$
P(A\cap B)=P(A\mid B)P(B)
$$
**Complement Rule**:
$$
P(A)=1-P(\overline{A})
$$
**Law of Total Probability**: The probability of $A$ can be found by summing its probability across all possible mutually exclusive situations (partitions $B_{1},B_{2},\dots$)
$$
P(A)=\sum_{j=1}^kP(A\mid B_{j})P(B_{j})
$$
