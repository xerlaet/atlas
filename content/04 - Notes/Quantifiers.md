# Quantifiers
---

**Quantifiers** are symbols used in [Predicate Logic](/notes/predicate-logic) that specify the number of elements that a statement applies to, enabling generalization about sets

The **universal quantifier** $\forall$ expresses for all
The **existential quantifier** $\exists$ expresses there exists
The **uniqueness quantifier** $\exists!$ expresses one and only one

Technically you only need one quantifier, as all of the quantifiers can be expressed as a version of the others
$$
\begin{align}
\exists &P(x)=\neg \forall P(x)\\
\exists! &P(x)=\exists x(P(x) \land \forall y (P(y) \to y=x))
\end{align}
$$

Also be careful of the order, as $\forall x \exists yQ(x,y)$ is not the same as $\exists y \forall xQ(x,y)$
