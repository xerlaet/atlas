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

## Probability Distributions
[Probability Distributions](/notes/probability-distributions) are functions that describe the probabilities that a random variable has

## Stochastic Processes
[Stochastic Processes](/notes/stochastic-processes) are random variables which evolve and change through time

## Statistical Inference
[Statistical Inference](/notes/statistical-inference) is a method of estimating parameters of a population and using that estimate to construct confidence intervals and test hypotheses











---

## Axioms of Probability
**Non-negativity**: $P(A)\geq 0$ 
**Total probability**: $P(\Omega)=1$ (can be broken with improper probability?)
**Countable additivity**: If $A_{1}$ and $A_{2}$ are disjoint, $P( \cup_{i}A_{i})=\sum_{i}P(A_{i})$


Binomial expansion
$$
(a+b)^{n}=\begin{pmatrix}n\\0\end{pmatrix}a^{n}b^{0}
+\begin{pmatrix}n\\1\end{pmatrix}a^{n-1}b^{1}
+\begin{pmatrix}n\\2\end{pmatrix}a^{n-2}b^{2}
+\dots
+\begin{pmatrix}n\\n\end{pmatrix}a^{0}b^{n}
$$

## Fundamentals
The probability of the event $E$ in a sample space $S$ with all equally likely outcomes is $\frac{E}{S}$

Some basic formulas (visualize with a Venn diagram)
$$
\begin{align}
P(A\cup B)&=P(A)+P(B)-P(A\cap B) \\
P(A\cap B)&=P(A\mid B)P(B)
\end{align}
$$
The probability of an event $A$ can also be thought of as the probability of none of the other events or as the probability of $A$ given all other situations
$$
\begin{align}
P(A)&=1-P(\overline{A}) \\
P(A)&=\sum_{j=1}^kP(A\mid B_{j})P(B_{j})
\end{align}
$$
[Bayes Theorem](/notes/bayes-theorem)

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

---


Understanding distributions requires a specific mathematical vocabulary to describe how probabilities are distributed, accumulated, and measured.

- **Random Variable (X):** A variable whose outcome is determined by a random event.
    
- **PMF (Probability Mass Function):** Used exclusively for _discrete_ variables. It outputs the exact probability that X equals a specific value x. Formally: f(x)=P(X=x).
    
- **PDF (Probability Density Function):** Used exclusively for _continuous_ variables. Because a continuous variable has infinite possible values, the probability of any _exact_ single point is 0. Instead, the PDF f(x) outputs a density curve. To find the probability of falling within a range, you calculate the area under the curve between two points.
    
- **CDF (Cumulative Distribution Function):** Used for both. It gives the probability that X will take a value less than or equal to x. Formally: F(x)=P(X≤x). It is the running total (sum or integral) of the PMF or PDF.
    
- **Quantile:** The inverse of the CDF. If you want to know what value bounds the bottom 90% of outcomes, you are looking for the 0.9 quantile (or 90th percentile).
    

## Deriving Mean and Variance

The **Mean** (Expected Value, denoted μ or E[X]) is the probability-weighted average of all possible outcomes. The **Variance** (denoted σ2 or Var(X)) measures how tightly the outcomes cluster around that mean.

|Metric|Discrete Variables|Continuous Variables|
|---|---|---|
|**Mean (E[X])**|E[X]=∑x​x⋅P(X=x)|E[X]=∫−∞∞​x⋅f(x)dx|
|**Variance (Var(X))**|Var(X)=∑x​(x−μ)2⋅P(X=x)|Var(X)=∫−∞∞​(x−μ)2⋅f(x)dx|
|**Computation Shortcut**|Var(X)=E[X2]−(E[X])2|Var(X)=E[X2]−(E[X])2|

## Key Distributions in Practice

### Discrete Distributions

1. **Bernoulli:** A single trial with a binary outcome (Success/Failure).
    
    - _Parameters:_ p (probability of success).
        
2. **Binomial:** The number of successes in n independent Bernoulli trials (e.g., number of defective parts in a batch of 50).
    
    - _Mean:_ n⋅p
        
    - _Variance:_ n⋅p⋅(1−p)
        
3. **Poisson:** The number of independent events occurring in a fixed interval of time or space (e.g., server requests per minute).
    
    - _Mean:_ λ (rate parameter)
        
    - _Variance:_ λ
        

### Continuous Distributions

1. **Uniform:** All outcomes in an interval [a,b] are equally likely. The PDF is a flat rectangle.
    
2. **Normal (Gaussian):** The classic "bell curve" that arises naturally in many systems (like sensor noise or physical measurements) due to the Central Limit Theorem.
    

Standard Normal Distribution Breakdown. Source: Elena Pimukova / Getty Images

The Normal distribution is entirely defined by two parameters: its mean μ (center) and its standard deviation σ (width).

Was this visual helpful?

Help me refactor my probability note, help explain the terms here and other relevant terms i may be missing and how to refactor it for obsidian:

  

Probability

An experiment is a procedure which yields one of a given set of possible outcomes. A Bernoulli trial is an experiment with only two outcomes

  

The sample space (\Omega) of the experiment is the set of possible outcomes (\omega)

  

An event is a subset of the sample space

Sigma Fields satisfy the following properties:

\begin{align*}

\emptyset \in F \\

A \in F \implies \Omega -A\in F \\

A_{1}, A_{2},\dots \implies U_{i}A_{i}\in F

\end{align*}

Such as f=\{ \emptyset, \Omega \} and f=\{ \emptyset, \Omega, \{ H \}, \{ T \}\}

  

Axioms of Probability

Non-negativity: P(A)\geq 0

Total probability: P(\Omega)=1 (can be broken with improper probability?)

Countable additivity: If A_{1} and A_{2} are disjoint, P( \cup_{i}A_{i})=\sum_{i}P(A_{i})

Binomial expansion

(a+b)^{n}=\begin{pmatrix}n\\0\end{pmatrix}a^{n}b^{0}

+\begin{pmatrix}n\\1\end{pmatrix}a^{n-1}b^{1}

+\begin{pmatrix}n\\2\end{pmatrix}a^{n-2}b^{2}

+\dots

+\begin{pmatrix}n\\n\end{pmatrix}a^{0}b^{n}

sample space, event space, and probability measure (\Omega,\mathcal{F},P)

Two events are independent if P(A\cap B)=P(A)P(B) or P(A|B)=P(A) if P(B)>0

A partition of the sample space is just as it sounds, a set of them divide up \Omega

Marginal probability

  

Posterior probability

  

Specificity vs Sensitivity

A random variable X is a function X:\Omega\to \mathbb{R}

  

Fundamentals

The probability of the event E in a sample space S with all equally likely outcomes is \frac{E}{S}

Some basic formulas (visualize with a Venn diagram)

\begin{align}

P(A\cup B)&=P(A)+P(B)-P(A\cap B) \\

P(A\cap B)&=P(A\mid B)P(B)

\end{align}

The probability of an event A can also be thought of as the probability of none of the other events or as the probability of A given all other situations

\begin{align}

P(A)&=1-P(\overline{A}) \\

P(A)&=\sum_{j=1}^kP(A\mid B_{j})P(B_{j})

\end{align}

Bayes Theorem

  

Counting Principles

When a procedure is composed of n_{1} , n_{2}, etc. tasks, there are n_{1}\cdot n_{2}\dots ways to complete that task

The number of r-permutations of a set with n elements is denoted as P(n,r)

P(n,r)=\frac{n!}{(n-r)!}

The number of r-combinations of a set with n elements is denoted as C(n,r) or \begin{pmatrix}n\\r\end{pmatrix}, which is known as the binomial coefficient

C(n,r)=\frac{n!}{(n-r)!r!}

An important thing to note is that if r>n, then both P(n,r) and C(n,r) are 0

  

Probability Distributions

Probability Distributions are functions that describe the probabilities that a random variable has

  

Stochastic Processes

Stochastic Processes are random variables which evolve and change through time

  

Statistical Inference

Statistical Inference is a method of estimating parameters of a population and using that estimate to construct confidence intervals and test hypotheses

To transform this from a monolithic brain-dump into a functional, atomic knowledge base, the content needs to be decoupled into discrete concepts linked by a Map of Content (MoC).

Here is a breakdown of the complex terms in your note, followed by the missing foundational terms you need, and a structural refactor designed for spaced repetition and zettelkasten linking.

**Unpacked & Missing Terminology**

- **Sigma Field (F):** Think of this as the "measurable space." If Ω is all possible outcomes, the sigma field is the collection of all valid _combinations_ of outcomes (events) that you can assign a probability to.
    
- **Marginal Probability:** The baseline, unconditional probability of an event happening, ignoring all other variables (e.g., P(A)).
    
- **Prior & Likelihood (Missing):** You noted _Posterior_, but it needs its siblings to complete Bayes' Theorem. The **Prior** is your initial belief. The **Likelihood** is the probability of the evidence given your belief. (Posterior ∝ Likelihood × Prior).
    
- **Sensitivity vs. Specificity:** Used heavily in inference. **Sensitivity** is the True Positive Rate (probability a sick person tests positive). **Specificity** is the True Negative Rate (probability a healthy person tests negative).
    
- **Mutually Exclusive (Missing):** Two events that cannot happen at the same time (A∩B=∅). Often confused with _Independence_, which means one event occurring doesn't change the probability of the other.
    

## Obsidian Refactor: Atomic Structure

Break your single note into the following atomic files. Embed your spaced repetition cues directly into the notes (using the `::` syntax common for flashcard scheduling).

**File 1: Probability MoC** _A high-level index linking your atomic concepts._

- [Probability Space and Axioms](/notes/probability-space-and-axioms)
    
- [Counting Principles and Combinatorics](/notes/counting-principles-and-combinatorics)
    
- [Probability Rules and Bayes Theorem](/notes/probability-rules-and-bayes-theorem)
    
- [Random Variables and Distributions](/notes/random-variables-and-distributions)
    
- [Stochastic Processes](/notes/stochastic-processes)
    

**File 2: Probability Space and Axioms** _Focus strictly on the foundational triad._

- **Probability Triad:** Defined as (Ω,F,P) representing the Sample Space, Event Space (Sigma Field), and Probability Measure.
    
- **Kolmogorov's Axioms:**
    
    1. Non-negativity: P(A)≥0
        
    2. Total probability: P(Ω)=1
        
    3. Countable additivity: If A1​ and A2​ are disjoint, P(∪i​Ai​)=∑i​P(Ai​)
        
- _Flashcard:_ What are the three components of a probability measure? :: (Ω,F,P) (Sample space, Sigma Field, Probability Measure).
    

**File 3: Counting Principles and Combinatorics** _Isolate the mechanics of calculating state spaces._

- **Permutations (Order matters):** P(n,r)=(n−r)!n!​
    
- **Combinations (Order irrelevant):** C(n,r)=(rn​)=(n−r)!r!n!​
    
- **Binomial Expansion:**
    
    (a+b)n=k=0∑n​(kn​)an−kbk​
    

**File 4: Probability Rules and Bayes Theorem** _Group the algebraic rules of probability._

- **Law of Total Probability:**
    
    P(A)=j=1∑k​P(A∣Bj​)P(Bj​)
    
- **Inclusion-Exclusion Principle:**
    
    P(A∪B)=P(A)+P(B)−P(A∩B)
    
- **Independence:** P(A∩B)=P(A)P(B)
    
- _Flashcard:_ How is mathematical independence defined? :: P(A∩B)=P(A)P(B) or P(A∣B)=P(A).
    

**File 5: Random Variables and Inference** _Bridge the gap between raw probability and applied statistics._

- **Random Variable (X):** A mapping function X:Ω→R that assigns a numerical value to each outcome.
    
- **Statistical Inference:** Estimating population parameters to construct confidence intervals and test hypotheses.
    
