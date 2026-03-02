# Hands-On Machine Learning
---
https://learning.oreilly.com/library/view/hands-on-machine-learning/9781098125967/

## 1. The Machine Learning Landscape
> [!Quote] \[Machine learning is the\] field of study that gives computers the ability to learn without being explicitly programmed - Arthur Samuel, 1959

Machine learning is great for problems that require a lot of fine-tuning, complex problems which traditional approaches don't give good solutions, fluctuating environments where it needs to be reupdated often, and gaining insight about large amounts of data
### Types of Systems
**Supervised Learning**: providing labels with the instances usually for *classification* or *regression*
**Unsupervised Learning**: the training data is unlabeled and the model tries to detect patterns, usually for *clustering*, *visualization*, *dimensionality reduction*, or finding *anomalies*
	**Visualization**: given a set of unlabeled and complex data, a 2d or 3d representation is given
	**Dimensionality Reduction**: simplifying the data in order to be more compact and run fast and potentially better, e.g. replace `mileage` and `age` with `wear and tear`, this process is known as **feature extraction**
**Semi-supervised Learning**: some instances are labeled while others are not
**Self-supervised Learning**: similar to unsupervised learning, except usually used for supervised learning tasks
**Reinforcement Learning**: an *agent* observes an environment and performs actions and is *rewarded* based on those actions as it learns a *policy*, often useful for things like *robotics*

**Offline Learning**: a system is trained on data all at once, then launched into production in the real world, this is also known as *batch learning*
**Online Learning**: the system is trained incrementally, and the speed at which it adapts to new data is known as the *learning rate*, it can also be used in *out-of-core learning* where it downloads part of the data, trains on it, and repeats until it has learning the whole data set

**Instance-based Learning**: the system learns examples, and generalizes by comparing new cases to ones already learned
	A *k-nearest neighbors* system will assume a new value is an average of the *k* closest instances
**Model-based Learning**: the system builds a model from the instances and is able to make predictions based off of it

**Cost Function**: a function that measures how *bad* a model is
**Utility Function**: a function that measures how *good* a model is

**Parameters** are the internal variables that the model learns, e.g. coefficients in linear regression or weights and biases in a neural network, while **Hyperparameters** are external configuration settings set before the training process (or determined during the hyperparameter tuning stage) such as the number of hidden layers in a neural network or the depth of a decision tree
### Main Challenges
The two things that can go wrong are bad model and bad data
#### Getting good data
Make sure to avoid *bias*
You might want to *clean* the data
#### Getting good algorithms
Make sure to avoid *overfitting* (an algorithm is over complex) but also avoid *underfitting* (the model is too simple)
Also remove noise in the training set so the model doesn't find patterns that don't mean anything, e.g. letters in a country name
#### Hyperparameter Tuning
For a simple model, you split the data into a `train` and `test` set, train the model on the `train` set, and evaluate its performance on the `test` set to get a sense of its generalization capabilities

For figuring out what model works best, split the data into a `train`, `dev`, and `test` set. Train all the models that you  want to test on the `train` set, evaluate them on the `dev` set, and whichever model performs the best train on the `train` and `dev` set together. Finally evaluate its performance on the `test` set to get a sense of its generalization capabilities

You could perform *cross-validation* in which you use many small validation sets and the average performance is what you look at. This can more accurate measurements of a models performance however the training time will increase

![[Pasted image 20231206182559.png]]

## 2. End-to-End Machine Learning Project
These are the main steps we will follow
1. Look at the big picture
2. Acquire the data
3. Explore and visualize the data to gain insights
4. Prepare the data for machine learning algorithms
5. Select a model and train it
6. Fine-tune the model
7. Present the solution
8. Launch, monitor, and maintain the system
### Acquire the Data
Create a train and test set early on
you might want to use stratified sampling instead of random sampling to make sure the train and test set are similar to each other
### Explore and Visualize
Create histograms and scatter plots of the data
Find the correlation matrix
If useful, create new attributes combining various other attributes (ex. rooms per house, bedroom ratio)
For data that has missing values, either get rid of them (the row or category itself), or **impute** new values (0, mean, median, knn, iterative)
For categorical data, you can transform it into numerical using an ordinal encoder, or use a one hot encoder which will create a new column for every category with only 1's and 0's
Also scaling the data so that different columns have similar ranges can help boost performance, a min max scaler will default to scale everything between -1 and 1
For heavily skewed data, you can transform it into something resembling more of a normal distribution, by raising it to a power or taking the log of it
use pipelines to make the process clean and simple
### Select a Model
test different types of cost/utility functions and such
try linear regression, decision trees/random forests, neural networks, etc.
## 3. something
