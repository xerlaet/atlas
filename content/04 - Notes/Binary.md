# Binary
---

**Binary** is a base 2 number system

A **bit** is one binary digit, a **nibble** is 4 bits (one hex digit), a **byte** is 8 bits, a **word** is 4 bytes

## Signed Binary
### Signed Magnitude
The easiest method is to simply insert a sign bit at the beginning of the number

> [!example]
99 in binary
>$$\begin{array}{|c|c|c|c|c|c|c|c|}
\hline
\text{Sign bit} & 2^{6} & 2^{5} & 2^{4} & 2^{3} & 2^{2} & 2^{1} & 2^{0} \\
\hline
0 & 1 & 1 & 0 & 0 & 0 & 1 & 1 \\
\hline
\end{array}$$

### Two's Complement
Two's Complement still has the MSB as an indicator of sign except addition will work directly

To convert from signed magnitude to two's complement, invert all the bits and add 1. Do the same to convert back
