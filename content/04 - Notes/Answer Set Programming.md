# Answer Set Programming
---

The goal is to formalize the human thought process. If such a thing can be formalized and automated, then *everything* that humans can do can be automated

Humans operate with 12 watts of power, performing deductive, abductive, and inductive reasoning

Abilities of human reasoning:
- negation-as-failure (there's just no evidence for something) vs classical negation (or default vs strong negation)
- cyclical reasoning
Disadvantages of human reasoning:
- humans can only handle so much information at once (i.e. 4 variables)

ex of a circular statement
![[Pasted image 20250113151306.png]]

Commonsense reasoning requires
- non-monotonicity: the system can revise earlier conclusions in light of new information
- draw conclusions from the absence of information (if no one is holding an umbrella, probably not raining)
- global constraints (you can't walk and sit at the same time)
- cyclical or assumption-based reasoning: allow multiple worlds (fish talking in cartoons)

s(CASP) attempts to do so
**Answer Set Programming** is a formalism for non monotonic reasoning

knowledge representation chapters 4-5

---

Computed via Gelfond-Lifschitz Method (guess and check)
- Given an answer set $S$, for each $p \in S$, delete all rules not containing $p$
- remove all negated goals from the remaining program
- find the least fixed point (LFP) of the program



**Even loop over negation** create multiple worlds
```
p :- not q.
q :- not p.
```
The resulting answer set is $\{ p \}, \{ q \}$

**Odd loop over negation** kill worlds
```
h :- p, not h.
```
This only works when $p$ is false

odd loop over negation reduces the possibilities
even loop over negation increases the possibilities

