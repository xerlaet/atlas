# KMP Algorithm
---

The **Knuth-Morris-Pratt** (KMP) algorithm is an efficient way to find all instances of a pattern $P[1\dots m]$ within a given text $T[1\dots n]$

The core idea is that when a mismatch occurs, use the pattern's internal repetitions to figure out the maximum safe distance to shift forward without missing a potential match

$\pi$ is the pre-computed **prefix function** which stores the length of the longest proper prefix of the pattern $P[0\dots q]$ that is also a suffix of $P[0\dots q]$
$$
\pi (q)=\max \{ k \mid  k<q \text{ and }P[0\dots k] \sqsupset P[0\dots q] \}
$$

## Algorithm
```pseudocode
function COMPUTE_PREFIX_FUNCTION(P):
	m = length of P
	k = 0 // length of longest proper prefix of P[1..q-1] that is a suffix
	
	for q = 2 to m:
		while k > 0 and P[k+1] != P[q]:
			k = pi[k]
		if P[k+1] = P[q]:
			k = k + 1
		pi[q] = k

	return pi
```

```pseudocode
function KMP(T, P):
	pi = COMPUTE_PREFIX_FUNCTION(P)
	q = 0
	
	for i = 1 to n:
		while q > 0 and P[q+1] != T[i]:
			q = pi[q]
		if P[q+1] = T[i]:
			q = q + 1
		if q = m:
			print("i-m is valid shift")
			q = pi[q]
```

## Analysis
The naive algorithm is $O(n\cdot m)$

KMP improves this to $O(n+m)$
