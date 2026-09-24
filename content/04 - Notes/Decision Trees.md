# Decision Trees
---

![TikZ Diagram](/attachments/tikz-d75e09445851a57d17c438c1329fb187.svg)

**Decision Trees**: [Trees](/notes/trees) where each internal node tests the value of a particular feature, and each leaf node specifies a class label. Generally used for classification, but it can work for regression (determining what each $x_{n}$ is)

Geometrically, each branch divides the features space into axis-parallel sections

## Selecting and Growing a Tree
Ideally the tree is as shallow as possible to prevent overfitting and ensure fast inference. Since finding the globally optimal (smallest) decision tree is [NP-Hard](/notes/np-hard), a practical solution is to use a [greedy heuristic](/notes/greedy-algorithms): at each step, pick the feature split that provides the highest immediate [Information Gain](/notes/information-gain)

## Overfitting & Regularization
If left unchecked, they will keep splitting until every leaf contains exactly one training sample (100% training accuracy, terrible generalization)

To combat overfitting, use these strategies:
- **Pre-pruning**: Stop the tree by setting hyperparameters upfront (e.g. max depth, minimum samples to split a node)
- **Post-pruning**: Grow an overfitted true, then prune back greedily to improve on the validation set

## Tree Ensembles
Since single decision trees are often unstable, often people will use **ensembles**: combining hundreds of trees to create a robust model

There are two primary ways to ensemble trees:
- **Bagging**: Train trees in parallel each on a random subset of data. The final prediction is an average (regression) or majority vote (classification)
- **Boosting**: Train trees sequentially, where each tree is trained to predict the errors made by the previous tree. The prediction is the sum of all trees
