# Machine Learning
---

Given an experience, improve on a task based on some measure

**Supervised learning**: learn from known examples {data, labels}
- image classification

Feature vectors
nominal, ordinal, numeric, hierarchical
classification, regression

$$
h_{\theta }=\theta _{0}+\theta _{1}x_{1}+\theta _{2}x_{2}+\dots+\theta _{n}x_{n}
$$

Hypothesis classes: model blueprints

Empirical risk minimization (ERM)
$$
\hat{f}=\text{arg min}_{h\in H} \frac{1}{n}\sum _{i=1}^{n}l(h(x^{(i)}),y^{(i)})
$$
Batch vs online learning (and offline?)

Generalization: for $(x,y)\sim D$, $\mathbb{E}_{D}[l(\hat{f}(x),y)]$

**Nearest Neighbors**
1-Nearest: for $x$, find the nearest point $x^{(j)}$ and return $y^{(j)}$
Voronoi Diagrams

K-Nearest
$$
\hat{y}=\text{arg max}_{y \in Y}\sum _{i=1}^{k}\mathbb{1}(y=y^{(i)})
$$

Hamming distance, Euclidean distance, L1/L2
Normalization, mixed distances
average by distance as well
irrelevant features can hurt nearest neighbors among other things

**Instance based learning**:
- easy to explain predictions, simple and no training, often good in practice
- sensitive to irrelevant or correlated features, prediction can be expensive

**Unsupervised learning**: draw insights {data}
- language models
**Reinforcement learning**: {state/action/reward}
- robotics, games










**Supervised Learning** is a subset of machine learning, where the datasets contain known labels which are fed into the model. Examples include detecting cancer given an image, translating text, or predicting stock prices a month ahead. The opposite task is **Unsupervised Learning**, which is where the answer is unknown and has to be figured out by the model. **Self-supervised Learning** is when some of the unlabeled data is leveraged to provide supervision

**Regression** is a very common supervised task, general used for "how many" questions. The output will be some numerical value. **Classification** is similar to "which one" questions and will output some class value. This class value might be presented as a probability such as 90% confident an image is a cat. Classification can be complicated by the fact that multiple classes might exist in the same image

**Sequence Learning** is important for video training or language where the previous information is important to remember and reference for future outputs. Similarly, some tasks will benefit from **online learning** where the environment is considered, as opposed to **offline learning** where the model is trained in isolation and then deployed

**Reinforcement Learning** is when the model will take some action in an environment and be rewarded based on the action. The goal of reinforcement learning is to produce good policies. Reinforcement Learning is very general, as supervised learning can be recast as a reinforcement learning problem. The tricky part is the credit assignment problem, which is determining which actions to credit or blame for an outcome. The space of strategies is immense and should be explored. At a fully understood level, reinforcement learning becomes a Markov decision process

























[Transformers](/notes/transformers)

## Final Exam Review
- attention is all you need paper
	- cons of rnn (efficiency + effectiveness) <- memory loss plus hard to train because not parallelizable
	- basic architecture (encoder + decoder) <- works well in general (embeddings)
	- layer norm instead of batch norm <- often trained on sequences of varying lengths and batch norm would normalize sequences with each other being inconsistent, layer norm computes mean/std for each individual sequence
	- why mask <- ensure causality
	- why scaled for dot-product attention (dk) <- to help softmax
	- why multihead for attention <- interpret different meanings of the words
	- memorize time complexity of various models
- object detection ([YOLO](/notes/yolo) paper)
	- IOU (intersection over union)
	- how to assign labels to boxes
	- region of interest (ROI) pooling <- cuts any box into nxm size for cnn
- image segmentation (label each pixel)
	- transposed convolution <- upscaling matrices
	- losses for style transfer, esp. why noise in addition to content loss <- background
- attention (hard/soft)
	- mappings (ex. seq -> vector)
	- what are transformers? (introduces set since order doesn't matter?)
	- soft vs hard attention <- probabilistic vs deterministic (give probabilities to each, vs choose one or two)
	- dimensions
	- query key value (more dimensions)
	- self vs cross attention (attention to self vs self, compared to self vs another sequence, in transformers attend to input sequence to help with translation)
	- encoder-predictor-decoder architecture in a transformer
![Pasted image 20241205002727.png](/attachments/Pasted%20image%2020241205002727.png)

---
**Machine Learning** is a set of algorithms that can learn from experience. Machine Learning is useful for tasks which follow a pattern that changes over time, or a understand a relationship requiring thousands or millions of computations with unknown principles

The core components have of any kind of machine learning model are
1. data to learn from
2. a model to generate an output from input
3. an objective (loss) function to quantify how well the model is doing
4. an algorithm to adjust the model's parameters to optimize that function

**Supervised Learning** is a subset of machine learning, where the datasets contain known labels which are fed into the model. Examples include detecting cancer given an image, translating text, or predicting stock prices a month ahead. The opposite task is **Unsupervised Learning**, which is where the answer is unknown and has to be figured out by the model. **Self-supervised Learning** is when some of the unlabeled data is leveraged to provide supervision

**Regression** is a very common supervised task, general used for "how many" questions. The output will be some numerical value. **Classification** is similar to "which one" questions and will output some class value. This class value might be presented as a probability such as 90% confident an image is a cat. Classification can be complicated by the fact that multiple classes might exist in the same image

**Sequence Learning** is important for video training or language where the previous information is important to remember and reference for future outputs. Similarly, some tasks will benefit from **online learning** where the environment is considered, as opposed to **offline learning** where the model is trained in isolation and then deployed

**Reinforcement Learning** is when the model will take some action in an environment and be rewarded based on the action. The goal of reinforcement learning is to produce good policies. Reinforcement Learning is very general, as supervised learning can be recast as a reinforcement learning problem. The tricky part is the credit assignment problem, which is determining which actions to credit or blame for an outcome. The space of strategies is immense and should be explored. At a fully understood level, reinforcement learning becomes a Markov decision process

Exam covers up until section 7 and some of 8

## Supervised Learning
Input -> Adjustable function -> Objective function

If you remove the non linear layer, the matrix multiplications collapse into one single matrix and there are no longer any layers eliminating the benefit of deep learning and abstraction as a whole

The goal is to minimize average error of the loss function, and this is achieved with Stochastic Gradient Descent

**Stochastic Gradient Descent** is the idea of traveling in the direction of greatest "downward slope" to achieve a local minimum the fastest - this is from a subset of the training data so it will include noise/be a little random

[Back Propagation](/notes/back-propagation) is the process in which the function is adjusted based on the error in the loss function

The sigmoid function can result in the saturation problem, where large differences in values result in small differences in a cost making it harder for the model to learn and train

**Convolutional Neural Networks**, which is based on how human eye sight works, works well for images. The idea is to preprocess information in chunks. Segmentation and Recognition are done at the same time. It exploits a fundamental idea of the compositional structure of data (pixels -> objects)

Neurons close to one another correspond to similar spots in the visual field -> likely so it can adapt to various resolutions

Simple cells detect local features, and complex cells "pool" the outputs of simple cells in a neighborhood

One idea is to slide a "box" around the image, similar to a human looking at different sections of the image to recognize patterns. This static selection of weights is known as the **convolution kernel**

## Why
Why do we need more than 2 layers? 2 layers can approximate any universal function with a layer of and gates then a layer of or gates - however the number of terms grows exponentially with the size of the input
$$
y=\sum_{i=1}^{P}\alpha _{i}K(X,X^{i})
$$
While this works, it requires immense scaling to be viable. Deep learning allows for abstraction allowing simpler hardware to do more

What is special about CNNs?
Why doesn't SGD get trapped in local minima?
Why do networks not in general overfit every time?

It's very surprising that neural networks work as well as they do

## Ideas for generic feature extraction
Expand the dimension of the representation so that things are more likely to become linearly separable
space tiling, random projections, polynomial classifier, radial basis functions, kernel machines

The **manifold hypothesis** is the idea that natural data lives in a low dimensional (non-linear) manifold due to dependence
	ex. only a small subset of possible images actually represent something (high dimensional because of the number of pixels that can change, but low surface because of the ideas in the image that can change)

The ideal feature extractor would be able to separate for example viewing angle from expression in a portrait

## Object Detection
Create anchor boxes everywhere checking if an object exists there
iterate through and calculate intersections of anchor boxes which contained an object
If there are multiple bounding boxes of different sizes on the same space, only output the most confident one (usually this contains the overall object in its entirety)


### History
In the 1980s designing dedicated AI chips was a hot topic - and history tends to repeat itself

In 2012 Alex Krizhevsky implemented a CNN for the first time on a GPU with a very large dataset changing the performance landscape


---
Learn jacobian

Trick for CNN face detection: train model on say 20x20 face pictures, then run it on the test image at multiple resolutions. This is still computationally ok because it is at lower resolutions so it won't take as much compute

remember conceptually what a GRU does

also important are long short-term memory (LSTM) which is a generalized form of a GRU. However they aren't really in use today anymore compared to transformers

in energy based models, the energy is used for inference not learning

inference is finding values of $y$ that make $F(x,y)$ small

latent variables are variables that are not given, e.g. word boundaries between text or speech


self supervised learning seems to work best on discrete data (i.e. text as opposed to images/video)
# Exam Review
---

Energy Based Models
Autoencoders (encoder sampler decoder)
- contractive, variational
- VAE optimization
- Data vs Latent Distribution
GANs
Diffusion Models
Reasoning, LSTM, RNNs
Transformer Architecture

[Autoencoders](/notes/autoencoders)
[Generative Adversarial Networks](/notes/generative-adversarial-networks)
[Recurrent Neural Networks](/notes/recurrent-neural-networks)
[Transformers](/notes/transformers)


---


- Be able to describe a model consisting of stacked linear and non linear blocks
	- forward and back prop
	- ex. what's the dimension of this weight matrix (6x3), (3x2)
- terminology in the textbook
- traditional machine learning (manually describe the features to extract) vs deep learning (learn the features to extract)
- gradient descent (stochastic vs minibatch, full batch, etc) -> fully leverage parallelism in hardware so minibatch is most common
- no math is required, it's there for fun
	- ex. for backprop, know that there are two gradients to compute, one over input and one over weights
- history of the CNN based on the brain architecture
- The multilayer architecture of a neural network is based on the compositional structure of data
- Why are deep architectures required if shallow ones can approximate anything? Answer: efficiency due to abstraction (linear vs quadratic parameters)
- Given images representing a high definitional space, the manifold hypothesis where feature extractors find the critical information
- ex question: give an example of an image that lies on a high dimensional space and features to extract from it
- redundancy is needed for deep learning why
- cost functions, what's the objective? minimize mean squared error
- no hypernetworks, but will talk about motif detection which is like a simplified CNN (sliding window for efficiency)
- only on content up to CNNs (image segmentation, multiscale)

The overall step for a NN model is
1. Forward propagation ($wx+b\to \text{activation}$)
2. Calculate Loss (MSE or Cross Entropy)
3. Back propagation (SGD or Adam)
4. Update weights (using learning rate)


Backprop for activation functions
$h(s)=z$
$$
\frac{ dc }{ ds }=\frac{ dc }{ dz }\cdot h'(s)
$$
Backprop through weighted sums
$$
\frac{ dc }{ dz } =\frac{ dc }{ ds } [0]\cdot w[0]
$$

Output size of a CNN based on parameters
$$
\left\lfloor \frac{n_{h}-k_{h}+p_{h}+s_{h}}{s_{h}} \right\rfloor 
+\left\lceil \frac{n_{w}-k_{w}+p_{w}+s_{w}}{s_{w}} \right\rceil
$$

Activation Functions
$$
\begin{align}
\text{ReLU}&=\text{max}(0,x) \\
\text{Softmax}(\sigma)&=\frac{e^{z_{i}}}{\Sigma_{j=1}^{K} e^{z_{j}}} \\
\text{Sigmoid}&=\frac{1}{1+e^{-x}}
\end{align}
$$

Loss Functions
$$
\begin{align}
\text{Mean Squared Error}&=\frac{\sum_{i=1}^{n} (y_{i}-\hat{y}_{i})^{2}}{n} \\
\text{Cross Entropy}&=-\sum _{i=1}^{C}y_{i}\text{log}(p_{i})
\end{align}
$$

Stochastic Gradient Descent
$$
W_{\text{new}}=W_{\text{old}}-\eta  \frac{\delta \text{loss}}{\delta W}
$$

[Precision Recall](/notes/precision-recall)

---
review
- attention is all you need paper (how transformer works with positional encoding and masking, dimensions)
- soft and hard attention
- dimensions of values
- key value
- layer vs batch norm
- terminology (such as residual network)
- CNN vs RNN vs self attention pros and cons
