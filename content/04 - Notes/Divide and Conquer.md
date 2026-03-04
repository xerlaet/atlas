# Divide and Conquer
---

Many problems can be solved by recursively dividing the problem into simpler ones and then conquering each subproblem one at a time

The [Recurrence Relation](/notes/recurrence-relations) for such a task is of the form
$$T(n)=aT\left( \frac{n}{b} \right)+d(n)+c(n)$$
where $d(n)$ is the dividing and $c(n)$ is the conquering
