# Dividers
---

$$
\begin{array}{c}
\frac{\text{Dividend}}{\text{Divisor}}=\text{Quotient}+\frac{\text{Remainder}}{\text{Divisor}} \\
\frac{a}{b}=q+\frac{r}{b}
\end{array}
$$

```pseudocode
R' = 0
for i = N-1 to 0
	R = {R'<<1,A_i}
	D = R-B
	if D < 0
		Q_i = 0, R' = R
	else
		Q_i = 1, R' = D
R = R'
```

## Parallel Divider
![Pasted image 20250417140658.png](/attachments/Pasted%20image%2020250417140658.png)

## Serial Divider
![Pasted image 20250417140712.png](/attachments/Pasted%20image%2020250417140712.png)
