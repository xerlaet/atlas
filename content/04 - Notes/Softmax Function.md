# Softmax Function
---

The **softmax function** converts a tuple of numbers into a probability distribution proportional to the exponentials of the numbers

$$
\sigma (y)_{i}=\frac{e^{y_{i}}}{\sum _{j}^{m}e^{y_{j}}}\in(0,1)
$$

This works because the values all sum to one

$$
\sum_{i}^{m}\frac{e^{y_{i}}}{\sum _{j}^{m}e^{y_{j}}}=\frac{\sum _{i}^{m}e^{y_{i}}}{\sum _{j}^{m}e^{y_{j}}}=1
$$
