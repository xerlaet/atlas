# Image Filtering
---

A **kernel** is some pattern that is applied to an image

**Correlation** is using element wise multiplication and summing the results
$$
g=f \otimes h= g(i,j)=\sum_{k,l}f(i+k,j+l)h(k,l)
$$
**Convolution** uses element wise multiplication on flipped areas before summing
$$
g=f * h= g(i,j)=\sum_{k,l}f(i-k,j-l)h(k,l)
$$

If the kernel is symmetric, correlation will be the same as convolution

Convolutions are associative where correlations are not

### Example
$$
\begin{array}{ccc}
\begin{array}{|c|c|c|}
\hline 10 & 5 & 3 \\
\hline 4 & 5 & 1 \\
\hline 1 & 1 & 7 \\
\hline
\end{array}
&
\begin{array}{|c|c|c|}
\hline 0 & 0 & 0 \\
\hline 0 & 0.5 & 0 \\
\hline 0 & 1 & 0.5 \\
\hline
\end{array}
&
\begin{array}{|c|c|c|}
\hline \phantom{7} &  &  \\
\hline  & 7 &  \\
\hline  &  & \phantom{7} \\
\hline
\end{array}
\\
\text{Local Image Data} & \text{Kernel} & \text{Modified Image Data}
\end{array}
$$
