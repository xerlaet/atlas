# Proofs
---
A **valid** proof or argument consists of a series of **premises** that lead to a **conclusion**
ex.
$$
\begin{array}{l}
p \\
p\to q \\
\hline \therefore q
\end{array}
$$
**Formal proofs** are proofs where everything is supplied, although are generally long and hard to follow which is why **informal proofs** can be useful, in which multiple rules can be used at once, steps may be skipped, and axioms and such do not have to be explicitly stated

**Axioms** are statements assumed to be true, where a **theorem** is a statement that can be shown to be true from a set of axioms, the hypotheses of the theorem, and previously proven theorems

A **conjecture** is a proposed statement that has not yet been proven false or shown to be a theorem. A **lemma** is a less important helper theorem, and a **corollary** is a theorem that can be established directly from another theorem

## Rules of Inference
There are various rules of inference that can be used in valid proofs

$$
\begin{array}{lll}
\text{Rule of Inference} & \text{Tautology} & \text{Name} \\

\begin{array}{l} p \\ p\to q \\ \hline \therefore q \end{array} &
(p\land (p\to q))\to q & \text{Modus ponens} \\ \\
\begin{array}{l} \neg q \\ p\to q \\ \hline \therefore \neg p \end{array} &
(\neg q\land (p\to q))\to \neg p & \text{Modus tollens} \\ \\
\begin{array}{l} p\to q \\ q \to r \\ \hline \therefore p \to r \end{array} &
((p\to q)\land (q\to r))\to(p\to r) & \text{Hypothetical syllogism} \\ \\
\begin{array}{l} p\lor q \\ \neg p \\ \hline \therefore q \end{array} &
((p\lor q)\land \neg p)\to q & \text{Disjunctive syllogism} \\ \\
\begin{array}{l} p \\ \hline \therefore p\lor q \end{array} &
p\to (p\lor q) & \text{Addition} \\ \\
\begin{array}{l} p\land q \\ \hline \therefore p \end{array} &
(p\land q)\to p & \text{Simplification} \\ \\
\begin{array}{l} p \\ q \\ \hline \therefore p\land q \end{array} &
(p\land q)\to (p\land q) & \text{Conjunction} \\ \\
\begin{array}{l} p\lor q \\ \neg p\lor r \\ \hline \therefore q\lor r \end{array} &
((p\lor q)\land (\neg p\lor r))\to (q\lor r) & \text{Resolution}
\end{array}
$$

```ad-example
Show that the premises
1. "It is not sunny this afternoon and it is colder than yesterday"
2. "We will go swimming only if it is sunny"
3. "If we do not go swimming, then we will take a canoe trip"
4. "If we take a canoe trip, then we will be home by sunset"

Lead to the conclusion "We will be home by sunset"

**Solution**
Let $p$ be "It is sunny this afternoon"
Let $q$ be "It is colder than yesterday"
Let $r$ be "We will go swimming"
Let $s$ be "We will take a canoe trip"
Let $t$ be "We will be home by sunset"

$$
\begin{array}{ll}
\text{Step} & \text{Reason} \\
1. \neg p\land q & \text{Premise} \\
2. \neg p & \text{Simplification using (1)} \\
3. r \to p & \text{Premise} \\
4. \neg r & \text{Modus tollens using (2) and (3)} \\
5. \neg r \to \neg s & \text{Premise} \\
6. s & \text{Modus ponens using (4) and (5)} \\
7. s\to t & \text{Premise} \\
8. t & \text{Modus ponens using (6) and (7)}
\end{array}
$$
```

In addition to those rules of inference, there are similar rules for quantified statements

$$
\begin{array}{ll}
\text{Rule of Inference} & \text{Name} \\
\begin{array}{l} \forall xP(x) \\ \hline \therefore P(c) \end{array} & \text{Universal instantiation} \\ \\
\begin{array}{l} P(c) \text{ for an arbitrary }c \\ \hline \therefore \forall xP(x) \end{array} & \text{Universal generalization} \\ \\
\begin{array}{l} \exists  xP(x) \\ \hline \therefore P(c)\text{ for some element }c \end{array} & \text{Existential instantiation} \\ \\
\begin{array}{l} P(c) \text{ for some element }c \\ \hline \therefore \exists xP(x) \end{array} & \text{Existential generalization}
\end{array}
$$

```ad-example
Show that the premises
1. Everyone in this discrete mathematics class has taken a course in computer science
2. Marla is a student in this class

Imply the conclusion "Marla has taken a course in computer science"

**Solution**
Let $D(x)$ denote "$x$ is in this discrete mathematics class"
Let $C(x)$ denote "$x$ has taken a course in computer science"

$$
\begin{array}{ll}
\text{Step} & \text{Reason} \\
1. \forall x(D(x)\to C(x)) & \text{Premise} \\
2. D(\text{Marla})\to C(\text{Marla}) & \text{Universal instantiation from (1)} \\
3. D(\text{Marla}) & \text{Premise} \\
4. C(\text{Marla}) & \text{Modus ponens from (2) and (3)}
\end{array}
$$
```

## Types of Proofs
There are various proof methods that can be used
most common are induction, counter example, and contradiction

### Proof by Construction
Prove that a theorem is true by constructing an object that it wants to prove exists

### Proof by Contradiction
Assume the theorem is false and show that this assumption leads to a false consequence. This means the original assumption was incorrect so the theorem is true

### Proof by Induction
Assume a base case, and show that assuming some general state $k$ it holds true for $k+1$ meaning that it will always hold

See [Induction](/notes/induction)

- Trivial Proof
- Vacuous Proof
- Direct Proof
- Proof by Contraposition
- Combinatorial Proofs
- Proof by Cases
- Existence Proofs

---
### Example 1
Prove
$$\sum_{i=1}^ni=\frac{n(n+1)}{2}$$
Answer
for all $n\geq b, p(n)$
$$p(0)=\sum_{i=1}^0i=1$$

IH
$P(n)\rightarrow P(n+1)$
$$\sum_{i=1}^{n+1}i=\frac{n(n+1)}{2}+(n+1)$$
$$=\frac{n(n+1)+2(n+1)}{2}$$
$$=\frac{(n+2)(n+1)}{2}$$
QED

$$\prod_{i=1}^0f(i)=1$$
### Example 2
Prove
$$\forall n \geq 1, n<2^n$$
Basis Step
$$1<2^1$$
Inductive Step
IH
$$n<2^{n+1}$$
$$n+1<2^n+1$$
$$n+1<2^n+(2^n)$$
---
$$n^{n+1}=2\cdot 2^n=2^n+2^n$$
