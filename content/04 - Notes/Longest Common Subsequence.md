# Longest Common Subsequence
---

Given two strings, compute the length of their longest common subsequence

```
for x,y:
	if x[i]=y[j]:
		l[i,j]=l[i-1,j-1]+1
	else:
		l[i,j]=max(l[i-1,j],l[i,j-1])
```

![[Pasted image 20250429101445.png|400]]

