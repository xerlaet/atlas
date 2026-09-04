# Probability
---

An **experiment** is a procedure which yields one of a given set of possible outcomes. If there are only two it is a **Bernoulli trial**
The **sample space** ($\Omega$) of the experiment is the set of possible outcomes ($\omega$)
An **event** is a subset of the sample space

 **Sigma Fields** ($\mathcal{F}$) are the collection of all valid combinations of events that can be assigned probabilities. They satisfy the following properties:
$$
\begin{align*}
\emptyset \in \mathcal{F} \\
A \in \mathcal{F} \implies \Omega -A\in \mathcal{F} \\
A_{1}, A_{2},\dots \implies U_{i}A_{i}\in \mathcal{F}
\end{align*}
$$
Some examples of sigma fields include $\mathcal{F}=\{ \emptyset, \Omega \}$ and $\mathcal{F}=\{ \emptyset, \Omega, \{ H \}, \{ T \}\}$

Two events are **independent** if knowing one doesn't change the probability of the other, and **mutually exclusive** if they both cannot happen together

A **partition** of the sample space is just as it sounds, a set of them divide up $\Omega$

**Marginal probability** is the baseline probability of an event happening ignoring all other variables (e.g. $P(A)$)

**Prior probability** is your initial belief, and **likelihood** is the probability of the evidence given your belief. **Posterior probability** is the updated probability based on prior and likelihood

**Sensitivity** is the true positive rate (e.g. $P(\text{sick person tests positive})$)
**Specificity** is the true negative rate (e.g. $P(\text{healthy person tests negative})$)

A **random variable** $X$ is a function $X:\Omega\to \mathbb{R}$

[Probability Space and Axioms](/notes/probability-space-and-axioms)
[Counting Principles and Combinatorics](/notes/counting-principles-and-combinatorics)
[Probability Rules](/notes/probability-rules)

[Probability Distributions](/notes/probability-distributions) are functions that describe the probabilities that a random variable has

[Stochastic Processes](/notes/stochastic-processes) are random variables which evolve and change through time

[Statistical Inference](/notes/statistical-inference) is a method of estimating parameters of a population and using that estimate to construct confidence intervals and test hypotheses
