# Descriptive Statistics
---

$$
\text{MSE}=E[(\hat{\theta }-\theta )^{2}]=\text{var}(\hat{\theta })+\text{bias}^{2}
$$
Because MSE combines both, it's a good performance metric

## Sample Metrics
For a sample, mean = $\bar{X}$, Std Dev = $s$, Var = $s^{2}$
$$
s^{2}=\frac{1}{n-1}\sum _{i=1}^{n}(X_{i}-\hat{X})^{2}
$$

## Order Statistics
**Median**: The central value, exceeded by half of observations and preceded by half

quartiles split the population into four equal parts

**Interquartile range**: Difference between first and third quartiles: $IQR=Q_{3}-Q_{1}$

Outliers are typically outside of $1.5(\hat{Q}_{3}-\hat{Q}_{1})$. If the data is normally distributed, this means 99.3% of the population will not be an outlier

## Shape
Shape of a distribution (symmetric, right-skewed, left-skewed (based on median <\/> mean))

## Graphical Statistics
- [Histograms](/notes/histograms)
- [Stem-and-leaf Plots](/notes/stem-and-leaf-plots)
- [Boxplots](/notes/boxplots)
- [Timeplots](/notes/timeplots)
- [Scatterplots](/notes/scatterplots)
