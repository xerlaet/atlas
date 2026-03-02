# Human Thought
---

Russell's Paradox led to focus only on inductive sets and reasoning (which is insufficient)
$$
R=\{ S | S \notin S  \}
$$

$x=x+1$ holds when $x=\infty$, although of course $x$ would never be reached

Tarski - classical systems of logic cannot reason about themselves, everything must be well founded - inductive
Logic cannot have its own truth predicate, need meta logic, meta meta logic, etc.

Kripke showed that a language can have its own truth predicate and consistency
Led to the idea of co-induction and modeling of circular reasoning (that humans employ)

When unifying, if $x=f(x)$ then circularity occurs

If you have contradictions than every false statement can be proven?
$A_{1}\land A_{2}\land A_{3}\land \dots \land \implies Th$

Commonsense reasoning requires non-monotonicity: where the system can revise its earlier conclusion in light of new information - we work with the knowledge we have and revise conclusions if new knowledge appears

Take the circular statements and figure out which ones are consistent

## Classical Negation vs Negation as Failure
Classical Negation: represented as -p, e.g. -sibling(john,jim).
- aka strong negation
Negation as Failure: represented as not(p), e.g. not sibling(john, jim).

if we fail to prove, mark it false, if we can prove, mark it true
```prolog
reach(X,Y) :- end(X,Y).
reach(X,Y) :- edge(X,Z), reach(Z,Y).

turn A if B into A iff B <- what humans mean most of the time
unreachable(x,y) :- not reachable(X,Y).
```

$a \to b$
$\neg b \to \neg a$
$\neg a \to \neg b$ < what negation as failure? does

---
## Modeling Human Thought
Thought processes can be modeled in general by the following approaches

Default Rules with exceptions and preferences (managing incomplete information)
```
flies(X) :- bird(X), not abnormal_bird(X).
abnormal_bird(X) :- penguin(X).
bird(tweety). bird(sam).

?- flies(tweety). -> true
?- flies(sam). -> true
```
A grounded program is a propositional program. In the above program, there are 4 different propositions that would be grounded with either tweety or sam

> [!caution] 
> Even with just a small number of variables the complexity quickly explodes - look into this farther

Multiple possible worlds (cyclical reasoning or assumption based reasoning)


Global constraints (impossibilities or invariants that must always hold)

FOLD-SE
