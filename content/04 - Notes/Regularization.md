# Regularization
---

**Regularization**: Any method to prevent overfitting or help optimization

[Data Augmentation](/notes/data-augmentation)

## Penalty Based
Penalty-based regularization adds a cost $R(\theta)$ to the loss function

$$
\arg\min_{\theta } \frac{1}{n}\sum _{i=1}^{n}L_{i}(\theta )+\lambda R(\theta )
$$

**Lasso** ([L1](/notes/manhattan-distance)): Sparsity, eliminates weak features $R(\theta)=||\theta||_{1}$
**Ridge** ([L2](/notes/euclidean-distance)): Weight decay, makes parameters small $R(\theta)=\frac{1}{2}||\theta||_{2}^{2}$

## Structural
Injects randomness during training to break brittle dependencies between units

**Dropout**: randomly zero out activations with probability $p$ during each training pass

## Feature Preprocessing
Raw input vectors often require scaling to ensure features are in the proper range and share the same scale, which stabilizes and speeds up training

**Standardization** ($Z$-score): Centers data at a mean of 0 with a standard deviation of 1
$$
x_{j}=\frac{x_{j}-\mu}{\sigma }
$$
**Normalization** (Min-Max): Bounds data to a specific fixed range, typically $[0,1]$
$$
x_{j}=\frac{x_{j}-\min(x)}{\max(x)-\min(x)}
$$