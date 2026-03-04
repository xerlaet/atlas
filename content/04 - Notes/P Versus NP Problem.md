# P Versus NP Problem
---

3-sat \<p knapsack

$\mathbb{P}$ is the class of languages accepted by polynomial DTMs
$\mathbb{NP}$ is the class of languages accepted by polynomial NTMs

$$
\mathbb{P}\subseteq \mathbb{NP}
$$

[Polynomial Time Bounded Reducibilities](/notes/polynomial-time-bounded-reducibilities)

**P** is the set of all problems that can be solved in polynomial time or better

Listing every possible subset of $S=\{ a_{1},a_{2},\dots a_{n} \}$ is difficult ($2^{n}$) because that's how much is being outputted. A problem like is a boolean formula satisfiable or not is much more interesting, as the time complexity lies in the problem itself

The task of finding a MST is comparable to the task of finding a ST with a certain cost. Such decision problems can be reduced to one another

**NP** is the set of all problems that can be solved *non deterministically* in polynomial time or better (the number of branches can be exponential with machines working in parallel)

**NP-Complete** problems are problems that all other NP problems can be reduced to

**NP-Hard** problems are at least as hard as NP problems

A language is $\mathbb{NP}\text{-hard}$ if every language $L'\in \mathbb{NP}$ is polynomial-time reducible to $L$

A language is $\mathbb{NP}\text{-complete}$ if $L\in \mathbb{NP}$ and $L$ is $\mathbb{NP}\text{-hard}$


![TikZ Diagram](/attachments/tikz-2ee56d2c001631769568d62774eca8db.svg)

![TikZ Diagram](/attachments/tikz-9574063f9fee3ae45d7ef90380decd18.svg)

3-SAT to clique
