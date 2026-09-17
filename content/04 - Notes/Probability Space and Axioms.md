# Probability Space and Axioms
---

A **probability space** ($\Omega, \mathcal{F}, P$) is a mathematical model of a random experiment:
- **Sample space** ($\Omega$): The set of all possible outcomes
- **Event space / Sigma-field** ($\mathcal{F}$): The set of all valid combinations of events
- **Probability measure** ($P$): A function that assigns probabilities to events

## Sigma Fields
Any valid sigma-field $\mathcal{F}$ must satisfy these three properties:

1. Contains the empty set
$$
\emptyset \in \mathcal{F}
$$
2. Closed under complement
$$
A \in \mathcal{F} \implies \Omega -A\in \mathcal{F}
$$
3. Closed under countable unions
$$
A_{1}, A_{2},\dots \in \mathcal{F} \implies \bigcup _{i=0}^{\infty}A_{i}\in \mathcal{F}
$$

Example include $\mathcal{F}=\{ \emptyset, \Omega \}$ and $\mathcal{F}=\{ \emptyset, \Omega, \{ H \}, \{ T \}\}$)

## Kolmogorov's Axioms
Any valid probability measure $P$ must satisfy these three properties:

1. **Non-negativity**: Probabilities cannot be negative
$$
P(E)\geq 0
$$
2. **Total probability**: Probabilities sum to 1 (broken by [Improper Probability](/notes/improper-probability))
$$
P(\Omega )=1
$$
3. **Countable additivity**: The probability of any mutually exclusive countable events happening is the sum of their individual probabilities
$$
P\left( \bigcup_{i=1}^{\infty }E_{i}\right)=\sum_{i=1}^{\infty }P(E_{i})
$$
