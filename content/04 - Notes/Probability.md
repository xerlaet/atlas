# Probability
---

An **experiment** is a procedure which yields one of a given set of possible outcomes
The **sample space** of the experiment is the set of possible outcomes
An **event** is a subset of the sample space

## Fundamentals
The probability of the event $E$ in a sample space $S$ with all equally likely outcomes is $\frac{E}{S}$

The probability of an event $A$ can also be thought of as the probability of none of the other events or as the probability of $A$ given all other situations
$$
\begin{align}
P(A)&=1-P(\overline{A}) \\
P(A)&=\sum_{j=1}^kP(A\mid B_{j})P(B_{j})
\end{align}
$$
With the fact that
$$
P(B\mid A)=\frac{P(A\cap B)}{P(A)}=\frac{P(A\mid B)P(B)}{P(A)}
$$
The following probability holds true
$$
P(B_{i}\mid A)=\frac{P(A\mid B_{i})P(B_{i})}
{\sum_{j=1}^kP(A\mid B_{j})P(B_{j})}
$$

Here are additional formulas related to basic counting ideas
$$
\begin{align}
P(A\cup B)&=P(A)+P(B)-P(A\cap B) \\
P(A\cap B)&=P(A\mid B)P(B)
\end{align}
$$

### Counting Principles
When a procedure is composed of $n_{1}$ , $n_{2}$, etc. tasks, there are $n_{1}\cdot n_{2}\dots$ ways to complete that task

The number of r-permutations of a set with $n$ elements is denoted as $P(n,r)$
$$
P(n,r)=\frac{n!}{(n-r)!}
$$

The number of r-combinations of a set with $n$ elements is denoted as $C(n,r)$ or $\begin{pmatrix}n\\r\end{pmatrix}$, which is known as the binomial coefficient
$$
C(n,r)=\frac{n!}{(n-r)!r!}
$$

An important thing to note is that if $r>n$, then both $P(n,r)$ and $C(n,r)$ are $0$

## Probability Distributions
[[Probability Distributions]] are functions that describe the probabilities that a random variable has

## Stochastic Processes
[[Stochastic Processes]] are random variables which evolve and change through time

## Statistical Inference
[[Statistical Inference]] is a method of estimating parameters of a population and using that estimate to construct confidence intervals and test hypotheses
