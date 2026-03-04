# Logical Programming
---

Broadly speaking, **intelligence** consists of learning (associating patterns) and reasoning (applying those patterns). This is analogous to the idea of thinking fast and slow.

The only way to know if a statistical ai model gives you the right answer is to trace out the underlying logic that it might have figured out!

Although on the other hand, it's really hard to represent knowledge in the first place, it relies on a lot of assumptions that you need to make and defined meaning of words and concepts

Such as open world vs closed world assumptions based on the knowledge base

## History
Aristotle -> Syllogism
(1850s) George Boole - boolean/propositional logic
(1870s) Gottlob Frege - Set Theory & predicate logic
Bertrand Russel & Alfred Whitehead
(1900s) David Hilbert - can theorem proving be automated
(1930s) Jacques Herbrand - Herbrand's Procedure for automated theorem proving
(1960s) J. Allen Robinson - Resolution Principle $(\neg p \lor q) \land (p \lor r) \to (q \lor r)$
(1972) Robert Kowalski - SLD Resolution -> Prolog
(1972) Alain Colmerauer - Implementation of Prolog 
Turing - Turing Machine

AI research was largely in automated reasoning before ML (Deep Blue)

Automated Reasoning is Undecidable - because of Gödel's Proof

Undecidability, Incompleteness, Non monotonicity

[Peano's Axioms](/notes/peanos-axioms)

closed world vs open world assumptions

Y Combinator
Euclid's Axioms of Geometry and Pythagorean proof
Resolution Theorem proving (Chang & Lee 1973 first 4 chapters)

Set vs Predicate:
$$
\begin{align}
H=\{ x \mid \text{human }(x) \} \\
\forall x \text{ human } (x)
\end{align}
$$

Types of Reasoning (inductive, deductive, etc)

[Prolog](/notes/prolog)
[List Processing](/notes/list-processing)
[Non Deterministic Programming](/notes/non-deterministic-programming)
[Constrained Logical Programming](/notes/constrained-logical-programming)
[Answer Set Programming](/notes/answer-set-programming)
[Human Thought](/notes/human-thought)

dual rule
Definite Clause Grammars - like [Context-Free Languages](/notes/context-free-languages) CFGs then recursive descent parsers - parser generators (LYACC, BISON, ANTLR)

```prolog
send(A,B) :- np(N,A,C), vp(N,C,B).

turns into send(np(art(the),noun(man)),vp(verb(eats),np(art(an),noun(apple))))
```

basically make parse trees for grammars using logical programming

domain specific language, write an interpreter for it really fast

The **Herbrand Universe** is the set of all constants that can be defined by the set of rules

[Fibonacci Sequence](/notes/fibonacci-sequence)

Left vs Right recursive (prolog uses DFS instead of BFS)
Meta Interpreters are really easy in prolog

## Execution Steps
1. Execute goals in the goal list left to right
2. Pick leftmost goal (call)
3. Find matching rule (head if rule unifies with the call)
	1. Failure - backtracks
4. If multiple rules, leave a branch point
5. Proceed along the left most branch point
6. Replace the call with the body of the rule
7. Copy the continuation to the right of these replacing goals
8. Apply the unifier to all the goals in the goal list

```prolog
% if then else ( if (P,Q,R) )
p -> Q;R :- P,!,Q.
P -> Q;R :- R.
```

Application: [Logical Chatbots](/notes/logical-chatbots)
