# Shifters
---

**Logical shifters** fill empty space with zeros
$$
\begin{array}{c}
11001\gg  2=00110 \\
11001\ll 2=00100
\end{array}
$$
**Arithmetic shifters** fill empty spaces with the MSB when shifting right
$$
\begin{array}{c}
11001\ggg  2=11110 \\
11001\lll 2=00100
\end{array}
$$
**Rotators** rotate bits in a circle
$$
\begin{array}{c}
11001 \text{ ROR 2}=01110 \\
11001 \text{ ROL 2} =00111
\end{array}
$$

Shifting left and right $n$ bits is the same as multiplying or dividing by $2^{n}$

## Circuit Design
The idea for shifters is to use multiplexors based on the shift amount

![Pasted image 20250417131837.png](/attachments/Pasted%20image%2020250417131837.png)

![Pasted image 20250417131848.png](/attachments/Pasted%20image%2020250417131848.png)
