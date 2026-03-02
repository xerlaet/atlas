# Sets
---
A **set** $\{  \}$ is an unordered collection of objects, called **elements** or **members**. An ordered collection of objects is known as a **sequence** or tuple $()$

Set order and uniqueness doesn't matter, so these sets are all equivalent:
$$S={a,b,c,d}={b,c,a,d}={a,b,b,c,d}$$

A set $A$ is a **subset** ($\subseteq$) of a set $B$ if every element in $A$ also belongs to $B$

The **universal set** $U$ contains everything currently under consideration, and the **empty set** $\emptyset$ or $\{\}$ contains no elements

The **cardinality** of a set is the number of distinct elements
$$
\begin{align}
A&=\{1,2,3\} \\
|A|&=3
\end{align}
$$

The **power set** is the set of all subsets
$$
\begin{align}
A&=\{a,b\} \\
P(A)&=\{\emptyset,\{a\},\{b\},\{a,b\}\}
\end{align}
$$
If a set has $n$ elements, the cardinality of the power set is $2^n$

The **cartesian product** is the set of all ordered pairs keeping the order the same
$$
\begin{align}
A&=\{ 1,2,3 \} \\
B&=\{ 4,5 \} \\
A\times B&=\{ (1,4), (1,5), (2,4), (2,5), (3,4), (3,5) \}
\end{align}
$$

### Notation
You can specify a set just by listing it:
$S=\{1,4,6,8\}$
$S=\{ 1,2,3,\dots \}$ dots can be used for infinite sets

You can specify sets using set builder notation:
$S=\{x|P(x)\}$
$S=\{x|x \text{ is a positive integer less than }100\}$

You can also use interval notation:
$S=[2,4)$ is the same as $\{ x \mid 2 \leq x < 4 \}$

### Sets of Numbers
$\mathbb{N}$ is the set of natural numbers (0,1,2,...) (sometimes 0 is not included)
$\mathbb{Z}$ is the set of integers (-1,-2)
$\mathbb{Q}$ is the set of rational numbers ($\frac{3}{4}$)
$\mathbb{R}$ is the set of real numbers ($\pi$)
$\mathbb{I}$ is the set of imaginary numbers ($i$)
$\mathbb{C}$ is the set of complex numbers ($3+5i$)
Additionally $^{+}$ or $^{-}$ can be added to specify only positive or negative values

### Paradoxes
Russell's Paradox:
Let $S$ be the set of all sets which are not members of themselves. A paradox results from trying to answer the question "Is $S$ a member of itself?"

The Barber Paradox:
"Henry shaves all people who do not shave themselves, does Henry shave himself?"

## Programming
### Python
```python
s = set()
t = set([1,2,3])

s.add(4)
s.update([5,6]) # add multiple elements
s.remove(2) # raises KeyError if not found
s.discard(10) # no not found error
s.pop()
s.clear()

u = s | t # union
u = s & t # intersection
u = s - t # difference
u = s ^ t # xor

s.issubset(t)
s.issuperset(t)
s.isdisjoint(t) # check for no common elements

len(s)
2 in s
s2 = s.copy() # shallow copy
```

### Java
```java
Set<Integer> s = new Hashset<>();

s.add(1);
s.addAll(Arrays.asList(2,3,4));
s.remove(2); // returns true if present
s.clear();

s.contains(3);
s.retainAll(Arrays.asList(3,4)); // intersection
s.removeAll(Arrays.asList(3)); // difference
s.addAll(Arrays.asList(5,6)); // union

s.isEmpty();
s.size();
Set<Integer> s2 = new Hashset<>(s); // shallow copy
```

### C++
```c++
std::set<int> s;
std::set<int> t = {3,4};

s.insert(1);
s.erase(1);
s.clear();

s.count(2); // 1 if exists 0 otherwise
s.merge(t); // removes elements from t and adds to s

s.empty();
s.size();
```
