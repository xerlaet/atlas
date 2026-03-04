# AI
---

[How to Build ChatGPT](/notes/how-to-build-chatgpt)

Text -> LLM -> predicates -> logic program
pattern matching is pretty good (still not perfect), but reasoning is basically solved


[Machine Learning](/notes/machine-learning)
## [AI History](/notes/ai-history)
[Hands-On Machine Learning](/notes/hands-on-machine-learning)
## Book: [Machine  Learning](https://learning.oreilly.com/library/view/hands-on-machine-learning/9781098125967/)
Currently reading a book: [Making Things Think](/notes/making-things-think)
## Different Types and Their history/application

[Tokenization](/notes/tokenization)

- [Neural Networks](/notes/neural-networks)
- deep learning
- machine learning
- diffusion models
- stable diffusion
- [U-Net](/notes/u-net)
	- developed for segmenting biomedical images
	- works for segmenting, upscaling, denoising
	- image input -> image output
- word2vec
- reinforcement learning
- transformer models
- autoencoders
- random forests

Neural Network -> basic output from input, back propagation with stochastic gradient descent

[Cool Blog](https://towardsdatascience.com/transformers-141e32e69591)

### Recurrent Neural Networks
![Pasted image 20231117143753.png](/attachments/Pasted%20image%2020231117143753.png)

Recurrent neural networks usually take each word in an input sentence and passes it in, then lets the next inputted word see what was inputted before it. In this way, it is like a chain. The downside is that the longer the input gets the more likely information is to be lost along the way.

#### Long-Short Term Memory

LTSM models are a special type of RNN designed to solve the problem of forgetting. RNNs transform the existing information with no consideration of what is important, in a LTSM information goes through a cell state to selectively remember or forget things.
![Pasted image 20231117144030.png](/attachments/Pasted%20image%2020231117144030.png)

Even still it suffers from the same problem of length. Overall, LSTMs and RNNs suffer from:
1. sequential computeation inhibits parallelization
2. no explicit model of long and short range dependencies
3. the distance between positions is linear

**Attention** is what is used to solve this problem.
![Pasted image 20231117144511.png](/attachments/Pasted%20image%2020231117144511.png)

Paying attention to parts of the input will allow much better performance. However, while this helps with referencing farther back text, it doesn't help with the parallelization problem. It still works in a sequence which takes a long time.

### Convolutional Neural Networks

CNNs are great because they solve the parallelization problem as they process each word of the input with the words around it and don't depend on other parts of the input which is good for being fast. The distance is log(n) instead of linear which is great, but it still doesn't have a good idea of dependencies. That's where transformers come in.

![Pasted image 20231117144840.png](/attachments/Pasted%20image%2020231117144840.png)

### Transformers

Transformers make it better through cool stuff.

Throughout all of these, the core idea is to turn the input in a multidimensional vector, then turn it into an output. Essentially to encode it to a useful state, then decode it.

[Neural Networks and Deep Learning](http://neuralnetworksanddeeplearning.com/index.html)
[Github for it](https://github.com/mnielsen/neural-networks-and-deep-learning/tree/master)
[Hangs-On Machine Learning with Scikit-Learn, Keras, and Tensorflow](https://www.oreilly.com/library/view/hands-on-machine-learning/9781492032632/)

Traditional Neural Networks: every input for each layer is connected to every output for each layer

Generative Adversarial Networks <-

[How Stable Diffusion works](https://www.youtube.com/watch?v=sFztPP9qPRc)
[How the U-Net works](https://www.youtube.com/watch?v=sFztPP9qPRc)

convolutional neural networks: use a kernel to detect different properties in the image, such as vertical or horizontal edges

Level 1: image classification
Level 2: image classification + localization
Level 3: object detection (multiple objects and bounding boxes for where they are)
Level 4: semantic segmentation: each pixel is labeled for what it is (good for background removal)
Level 5: instance segmentation: identify if there are multiple instances of something, like multiple people

U-Nets (really good at segmenting images)
turn one image with 3 channels (red green blue) into 1024 channels (each a different focus)
![Pasted image 20231105162246.png](/attachments/Pasted%20image%2020231105162246.png)
denoises images

Diffusion model:

Latent diffusion model:
1. Image gets encoded into a latent space
2. that gets noise/denoise into another latent space
3. that gets decoded into an image

word2vec function
- 2 lists of words and their vectors
- words that are similar will have similar vectors between the lists
- [simple 3d visualization of word vectors](http://projector.tensorflow.org)
- "king" - "man" + "woman" = "queen"
- "London" - "England" + "Japan" = "Tokyo"

convolution layer:
- extract features from images using relationships between pixels, depending on their relative spatial position
self-attention layer:
- extract features from phrases using relationships between words, depending on their embedding vectors
- a simple self attention
- ![Pasted image 20231105155211.png](/attachments/Pasted%20image%2020231105155211.png)
- query, key, and value

convolutional encoder transforms an image into a vector
self attention encoder transforms text into a vector

[OpenAI's clip model](https://openai.com/research/clip) did this where images that match text should have the same vector when created by both encoder ways

The way stable diffusion works is that it takes the U-Net and injects text-encoders into each layer
![Pasted image 20231105155901.png](/attachments/Pasted%20image%2020231105155901.png)
except it uses cross attention, where the image is the query and the text is the key and value
