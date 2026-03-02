# AC-3
---

**AC-3** reduces the search space for CSPs by eliminating values from variable's domains that cannot be part of a solution

## Algorithm
```python
q = queue
while q is not empty:
	(x_i,x_j) = q.pop()
	if revise(csp,x_i,x_j):
		if d_i.size() == 0 return False
		for each x_k in x_i.neighbors - x_j:
			q.push(x_k,x_i)
return True

fun revise(csp,x_i,x_j):
	revised = False
	for each in d_i:
		if no y in d_j allows (x,y) to work:
			d_i.remove(x)
			revised = true
	return revised
```

## Analysis
Assume $n$ variables, with domain $d$, and $c$ binary constraints

An arc can be inserted only $d$ times, and checking consistency takes $O(d^{2})$

$O(cd^{3})$
