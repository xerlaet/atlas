# Poly-Alphabetic Cipher
---

A **substitution cipher** that uses multiple substitution alphabets, typically selected according to a repeating key

## Algorithm
$$
\begin{align}
C_i &= (P_i + K_i) \bmod 26 \\
P_i &= (C_i - K_i) \bmod 26
\end{align}
$$
- $P_i$, $C_i$ = Plaintext and ciphertext letters represented 0-25
- $K_i$ = Key value used for position $i$

- **Vigenère Cipher**: Uses a repeating keyword to determine each shift
- **Autokey Cipher**: Extends the key using plaintext
- **Beaufort Cipher**: Uses a related transformation with the key and plaintext

## Security
- Reduces simple frequency-analysis effectiveness by varying substitutions
- Repeating keys create patterns that can be exploited
