# Black Box Testing
---

**Black Box Testing** focuses on the inputs and output values to detect possible problems

### Equivalence Partitioning
Divide the input domain into disjoint subsets and test from each one

Input = range: valid partition inside the range, two invalid partitions on either side
Input = value: valid partition at that value, two invalid partitions on either side
Input = set: valid partition in the set, invalid partition outside the set
Input = boolean: valid partition at that value, invalid partition as the negation

![[Pasted image 20250428122151.png|500]]

### Boundary Value Analysis
Complements equivalence partitioning by selecting test cases at the edges of partitions

![[Pasted image 20250428122128.png|500]]

### Cause-effect Testing
Analyzes the functionality to identify causes and effects, and then constructs a decision table, the rules of which are used to derive test cases

![[Pasted image 20250428122916.png|500]]
