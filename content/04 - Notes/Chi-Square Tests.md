# Chi-Square Tests
---

Pearson chi-square tests compare **observed categorical counts** with the counts expected under a null model.

Parent: [Statistical Inference](/notes/statistical-inference) · Related: [Hypothesis Testing](/notes/hypothesis-testing), [Inference for Proportions](/notes/inference-for-proportions)

These tests are distinct from the normal-population variance test in [Inference for Variances](/notes/inference-for-variances).

## Pearson's Statistic

For observed counts $O_j$ and positive expected counts $E_j$:
$$
\boxed{Q=\sum_j\frac{(O_j-E_j)^2}{E_j}}.
$$
Larger values indicate greater disagreement with the null. The reference distribution is approximately chi-square with degrees of freedom determined by the design and estimated constraints.

These tests use the **upper tail**:
$$
p=P(\chi^2_\nu\ge Q_{\mathrm{obs}}).
$$
Even though a goodness-of-fit alternative permits many kinds of departures, rejection is not split across the two tails of the chi-square distribution.

## Goodness of Fit

**Question**: Do counts in $k$ mutually exclusive, exhaustive categories agree with specified probabilities $p_{10},\dots,p_{k0}$?

Under $H_0$, the expected counts are
$$
E_j=np_{j0},\qquad\sum_{j=1}^k p_{j0}=1.
$$
If the probabilities are fully specified in advance:
$$
Q=\sum_{j=1}^k\frac{(O_j-np_{j0})^2}{np_{j0}}
\ \overset{\mathrm{approx}}{\sim}\ \chi^2_{k-1}.
$$
One degree of freedom is lost because the counts must sum to $n$.

When $r$ independent parameters are estimated from the same counts using an appropriate fitting method, the usual adjustment is $\nu=k-1-r$, under suitable regularity conditions. For fitted continuous distributions, bin choice and the fitting method affect the calibration; parameter subtraction should not be applied mechanically. See [NIST's goodness-of-fit guide](https://www.itl.nist.gov/div898/handbook/eda/section3/eda35f.htm).

### Worked Example — Fair Die

A die is rolled $60$ times, giving counts $8,12,9,11,10,10$. Under a fair-die null, every expected count is $10$:
$$
Q=\frac{(-2)^2+2^2+(-1)^2+1^2+0^2+0^2}{10}=1,\qquad\nu=5.
$$
The upper-tail $p$-value is approximately $0.963$, so these data do not give evidence against the fair-die model. They do not prove the die is fair.

## Independence in a Contingency Table

**Question**: Are two categorical variables associated in one sampled population?

Arrange the data in an $r\times c$ table. Under $H_0$, the row and column classifications are independent:
$$
P(A=i,B=j)=P(A=i)P(B=j).
$$
Estimate each expected count by
$$
\boxed{E_{ij}=\frac{(\text{row }i\text{ total})(\text{column }j\text{ total})}{n}}.
$$
Then
$$
Q=\sum_{i=1}^r\sum_{j=1}^c
\frac{(O_{ij}-E_{ij})^2}{E_{ij}}
\ \overset{\mathrm{approx}}{\sim}\ \chi^2_{(r-1)(c-1)}.
$$
A rejection supports an **association**, not a causal relationship. The expected-count construction and degrees of freedom appear in [NIST's contingency-table guide](https://www.itl.nist.gov/div898/handbook/prc/section4/prc45.htm).

## Homogeneity Across Groups

**Question**: Do independently sampled groups have the same categorical outcome distribution?

The Pearson statistic and $(r-1)(c-1)$ degrees of freedom are the same as for independence. The difference is the sampling design and interpretation:
- **Independence**: Two classifications of units in one sampled population.
- **Homogeneity**: Outcome proportions compared across separately sampled groups.

For a $2\times2$ table without continuity correction, the Pearson statistic equals the square of the pooled [two-proportion z statistic](/notes/inference-for-proportions#two-independent-proportions-test-of-equality), so their usual two-sided equality tests agree.

## Assumptions and Sparse Counts

- Input **counts**, not percentages treated as counts.
- Units should be independent; each unit contributes to one cell.
- Categories must match the stated model, and expected counts must be positive.
- The chi-square reference is asymptotic. A simple conservative screening rule is that all expected counts are at least $5$; more nuanced guidelines depend on the table and design.
- Small **observed** counts alone are not the criterion: assess the **expected** counts.
- For sparse tables, consider Fisher's exact test or a simulation procedure calibrated under the null. Do not merge unrelated categories merely to satisfy a threshold.
- Repeated or paired observations require methods that account for their dependence.

Inspect cell contributions $(O-E)^2/E$ to see where disagreement arises, but post-hoc claims about specific cells need appropriate multiplicity control.
