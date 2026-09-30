# Descriptive Statistics
---

## Sample Metrics
For a sample of $n$ observations $X_1, X_2, \dots, X_n$:

**Sample Mean** ($\bar{X}$):
$$
\bar{X} = \frac{1}{n} \sum_{i=1}^{n} X_i
$$
**Sample Variance** ($s^2$):
$$
s^2 = \frac{1}{n-1} \sum_{i=1}^{n} (X_i - \bar{X})^2,\text{when }n=1\text{ then }s^{2}=\frac{0}{0}
$$
**Sample Standard Deviation** ($s$): expresses spread in the original units:
$$
s = \sqrt{s^2}
$$
**Standard Error** (SE): uncertainty of the sample statistic
$$
SE=\frac{s}{\sqrt{n}}
$$
[Mean Squared Error](/notes/mean-squared-error)

## Order Statistics
**Quartiles**: Split ordered data into equal parts: $Q_{x}=\left\lceil np_{x} \right\rceil$
- **First quartile** ($Q_{1}$): 25th percentile
- **Second quartile / Median** ($Q_{2}$): 50th percentile; splits the observations in half
- **Third quartile** ($Q_{3}$): 25th percentile

**Interquartile Range** (IQR): $Q_{3}-Q_{1}$

**Outlier**: Typically anything outside $[Q_{1}-1.5\cdot\text{IQR},Q_{3}+1.5\cdot\text{IQR}]$

## Shape
The relative position of the **Mean** and **Median** indicates skewness:
* **Symmetric**: $\text{Mean} \approx \text{Median}$ (Distribution is balanced around the center).
* **Right-Skewed**: $\text{Mean} > \text{Median}$ (Long tail extends to the right/high values).
* **Left-Skewed**: $\text{Mean} < \text{Median}$ (Long tail extends to the left/low values).

## Graphical Statistics
- [Histograms](/notes/histograms) - Data grouped into equal-width bins/intervals
- [Stem-and-leaf Plots](/notes/stem-and-leaf-plots) - Separate values by leading and trailing digits
- [Boxplots](/notes/boxplots) - Visual five-number summary (minimum, $Q_{1}$, median, $Q_{3}$, maximum)
- [Timeplots](/notes/timeplots) - Observations plotted chronologically
- [Scatterplots](/notes/scatterplots) - 2D Cartesian plot 
