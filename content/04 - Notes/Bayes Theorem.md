# Bayes Theorem
---

Derived from the multiplication rule, **Bayes theorem** relates conditional probabilities:
$$
P(A\mid B)=\frac{P(A\cap B)}{P(B)}=\frac{P(B\mid A)P(A)}{P(B)}
$$

Using the Law of Total Probability, the expanded form is:
$$
P(A_{i}\mid B)=\frac
{P(B\mid A_{i})P(A_{i})}
{\sum_{j}P(B\mid A_{j})P(A_{j})}
=\frac{\text{probability of the result}}{\text{every way to get the result}}
$$

## Terminology
**Prior** ($P(A)$): Your initial belief before seeing evidence
**Likelihood** ($P(B\mid A)$): The probability of the evidence assuming your belief
**Marginal probability** ($P(B)$): The baseline probability of the event occurring
**Posterior** ($P(A\mid B)$): The updated belief after observing the evidence

**Sensitivity** (True Positive Rate): $P(\text{Tests positive}\mid \text{Is Sick})$
**Specificity** (True Negative Rate): $P(\text{Tests Negative}\mid \text{Is Healthy})$
