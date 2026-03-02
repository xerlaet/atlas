# Counting Sort
---

**Counting Sort** counts the number of each unique item given the range of items, and then creates a sorted array using that information

If you just use that it's linear, however to make it stable requires an extra step

Array to be sorted: $A[0] - A[n] \in \{ 0,1,\dots,k \}$
1. create a new array of size (max + 1)
2. iterate through the array, increasing the count of each element in the new array
3. for each element i in the new array, add the previous element to it
4. for n to 1, place the element in the array and decrement the last position it should go, thus maintaining stability

The complexity in linear!

Add individual recurrence relation sizes to cancel the $cn$ value

\begin{tikzpicture}[remember picture, overlay]
\node[fill=blue!20,draw,fit=(0,0) (0,2)] {};
\end{tikzpicture}

```tikz
\usepackage{array}
\usepackage{amsmath}
\begin{document}
\begin{tikzpicture}
\node at (0,0) {
	$\begin{array}{ccc}
	1 & 2 & 3
	\end{array}$
};
\end{tikzpicture}
\end{document}
```

$$

\begin{gather}
\begin{matrix}0 & 1 & 2 & 3 & 4 & 5 & 6 & 7\end{matrix}\\
\begin{array}{|c|c|c|c|c|c|c|c|}
\hline 2 & 5 & 3 & 0 & 2 & 3 & 0 & 3
\\\hline\end{array}\\
\\
\begin{matrix}0 & 1 & 2 & 3 & 4 & 5\end{matrix}\\
\begin{array}{|c|c|c|c|c|c|}
\hline 0 & 0 & 0 & 0 & 0 & 0
\\\hline\end{array}\\
\\
\begin{matrix}0 & 1 & 2 & 3 & 4 & 5\end{matrix}\\
\begin{array}{|c|c|c|c|c|c|}
\hline 2 & 0 & 2 & 3 & 0 & 1
\\\hline\end{array}\\
\\
\begin{matrix}0 & 1 & 2 & 3 & 4 & 5\end{matrix}\\
\begin{array}{|c|c|c|c|c|c|c|c|}
\hline 2 & 2 & 4 & 7 & 7 & 8
\\\hline\end{array}
\end{gather}
$$
