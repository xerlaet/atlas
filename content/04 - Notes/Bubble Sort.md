# Bubble Sort
---

**Bubble Sort** repeatedly swaps adjacent elements if they are in the wrong order. The total number of swaps equals the number of [[Inversion]] in the original array

```tikz
\usetikzlibrary{matrix, positioning}
\begin{document}

\begin{tikzpicture}
    % Define colors optimized for dark gray background
    \definecolor{swapColor}{RGB}{255, 128, 0} % Orange
    \definecolor{sortedColor}{RGB}{0, 255, 128} % Green
    \definecolor{textColor}{RGB}{200, 200, 200} % Light Gray

    % Table-like formatting
    \matrix (m1) [matrix of nodes, nodes={draw, text=textColor, minimum size=0.8cm, anchor=center, font=\bfseries}, column sep=1mm, row sep=0mm] {
        5 & 3 & 8 & 4 & 2 \\
    };

    \draw[->, thick, swapColor] (m1-1-1.south) -- ++(0,-0.4) -- (m1-1-2.south);
    \draw[->, thick, swapColor] (m1-1-3.south) -- ++(0,-0.4) -- (m1-1-4.south);
    \draw[->, thick, swapColor] (m1-1-4.south) -- ++(0,-0.4) -- (m1-1-5.south);

    % Step 1
    \matrix (m2) [matrix of nodes, nodes={draw, text=textColor, minimum size=0.8cm}, column sep=1mm, below=of m1] {
        3 & 5 & 4 & 2 & \textcolor{sortedColor}{8} \\
    };

    \draw[->, thick, swapColor] (m2-1-2.south) -- ++(0,-0.4) -- (m2-1-3.south);
    \draw[->, thick, swapColor] (m2-1-3.south) -- ++(0,-0.4) -- (m2-1-4.south);

    % Step 2
    \matrix (m3) [matrix of nodes, nodes={draw, text=textColor, minimum size=0.8cm}, column sep=1mm, below=of m2] {
        3 & 4 & 2 & \textcolor{sortedColor}{5} & \textcolor{sortedColor}{8} \\
    };

    \draw[->, thick, swapColor] (m3-1-2.south) -- ++(0,-0.4) -- (m3-1-3.south);

    % Step 3
    \matrix (m4) [matrix of nodes, nodes={draw, text=textColor, minimum size=0.8cm}, column sep=1mm, below=of m3] {
        3 & 2 & \textcolor{sortedColor}{4} & \textcolor{sortedColor}{5} & \textcolor{sortedColor}{8} \\
    };

    \draw[->, thick, swapColor] (m4-1-1.south) -- ++(0,-0.4) -- (m4-1-2.south);

    % Final Sorted
    \matrix (m5) [matrix of nodes, nodes={draw, text=sortedColor, minimum size=0.8cm, font=\bfseries}, column sep=1mm, below=of m4] {
        2 & 3 & 4 & 5 & 8 \\
    };

\end{tikzpicture}
\end{document}
```

## Algorithm
```python
def bubbleSort(arr):
	n = len(arr)
	# traverse through the array
	for i in range(n):
		swapped = False
		# last i elements are already in place
		for j in range(0, n-i-1):
			# swap if element is greater than next element
			if arr[j] > arr[j+1]:
				arr[j], arr[j+1] = arr[j+1], arr[j]
				swapped = True
		# if no swaps occur, end early
		if (not swapped):
			break
```

## Complexity
$\Omega(n)$ when array is already sorted
$O(n)$ when array is in reverse order
Since the base case doesn't match the worst case, there is no $\Theta$ 

