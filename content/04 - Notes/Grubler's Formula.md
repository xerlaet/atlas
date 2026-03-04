# Grübler's Formula
---

DOFs = rigid body freedoms ($N$ links each with $m$ DOFs, include ground) - joint constraints ($J$ joints). $f_{i}$ is the degree of freedom for each individual joint
$$
\begin{align*}
\text{DOFs} &= m(N-1)-\sum_{i=1}^{J}c_{i} \\
&= m(N-1)+\sum_{i=1}^{J}m-f_{i} \\
&= m(N-1-J)+\sum_{i=1}^{J}f_{i}
\end{align*}
$$

## Example
![Pasted image 20250827140037.png](/attachments/Pasted%20image%2020250827140037.png)
$$
\text{DOFs} = 3(4-1-4)+\sum_{i=1}^{4}1=1
$$
![Pasted image 20250827140248.png](/attachments/Pasted%20image%2020250827140248.png)
$$
\text{DOFs} = 3(8-1-9)+\sum_{i=1}^{9}1=3
$$
