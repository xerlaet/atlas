# Binomial Heap
---
A **binomial heap** is a heap data structure that contains trees of size $k$

```java
class Node {
	public int value;
	public Node parent;
	public List<Node> children;
	public int degree;
	public boolena marked;

	public Node(int val) {
		value = val;
		parent = null;
		children = new ArrayList<>();
		degree = 0;
		marked = false;
	}
}
```

