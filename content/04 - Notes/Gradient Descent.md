# Gradient Descent
---

$$
W \gets W-\eta  \frac{ \partial L }{ \partial W } 
$$


---
$$
\frac{ \partial L }{ \partial W } =\frac{ \partial L }{ \partial \sigma (y) }\frac{ \partial \sigma (y) }{ \partial y }  \frac{ \partial y }{ \partial W } 
$$

$$
\frac{ \partial L }{ \partial y } =\left[ \frac{ \partial L }{ \partial y_{1} }, \dots, \frac{ \partial L }{ \partial y_{m} }   \right]
$$
Jacobian Matrix
