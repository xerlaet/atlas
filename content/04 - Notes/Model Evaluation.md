# Model Evaluation
---

A model can overfit to the data, perhaps because of noise or the data being non-representative of the whole

Training vs Test set creation
- Random sampling - although you can get unlucky
- Stratified sampling - random but ensure class proportions are maintained in each set
- k-fold cross validation - train a model on each fold/split and use the best model to train on everything

## Metrics
A simple confusion table works well for classifiers

|                     | **Predicted Positive** | **Predicted Negative** |
| :------------------ | :--------------------- | :--------------------- |
| **Actual Positive** | True Positive (TP)     | False Negative (FN)    |
| **Actual Negative** | False Positive (FP)    | True Negative (TN)     |

$$
\begin{align}
\text{Accuracy} &= \frac{TP + TN}{TP + TN + FP + FN} \\
\text{Error Rate} &= \frac{FP + FN}{TP + TN + FP + FN} = 1 - \text{Accuracy} \\
\text{Precision} &= \frac{TP}{TP + FP} \\
\text{Recall (TPR)} &= \frac{TP}{TP + FN} \\
\text{Specificity (TNR)} &= \frac{TN}{TN + FP} \\
\text{False Positive Rate} &= \frac{FP}{FP + TN} = 1 - \text{Specificity} \\
\text{False Negative Rate} &= \frac{FN}{TP + FN} = 1 - \text{Recall} \\
\text{F1 Score} &= 2 \times \frac{\text{Precision} \times \text{Recall}}{\text{Precision} + \text{Recall}}
\end{align}
$$

Accuracy may not be sufficient for model performance. It depends on the true positive and true negative rates.

Precision/recall curves are well suited for tasks with lots of negative instances

A **receiver operating characteristic** (ROC) curve plots the true positive rate with regard to the false positive rate

![TikZ Diagram](/attachments/tikz-4e5ba7dba677cc8e22c0b5168ba940d0.svg)

[Bias, Variance, and Noise](/notes/bias-variance-and-noise)
