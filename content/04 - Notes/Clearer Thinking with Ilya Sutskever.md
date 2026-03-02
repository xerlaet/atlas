# Clearer Thinking with Ilya Sutskever
---

## What do AIs actually understand?

Right now AI models work by predicting the next token, and in doing this an emergent property of making sense in occurs. It seems logical that understanding at some level is occurring, because say if you were to read a mystery novel but cut out the last word which is the name of the person who did the crime. If the AI model can predict that name, then it has to actually understand what is going on in the story itself.

## Architectures

recurrent neural networks were the standard, then transformers came along and were much easier for the network to learn
major breakthroughs were in how to make backpropagation better
The transformer can process long sequences, is straightforward to learn for the algorithm, and it runs really fast on gpus
potentially with more work rnns can come back, but there isn't really a reason to
You can try to make improvements here and there, but it seems like all you need are simple methods that scale

## Role of Academia

The academia is finding it harder to keep up, since cutting edge models are getting more and more expensive to train.
The academia can't really train the state of the art models anymore, but they can still do things. Things like focusing on problems and questions that big companies like OpenAI and Google aren't focusing on, or working with released versions of trained models to study them further.
This change has already happened to a degree in chip manufacturing, where only big for profit companies can afford to do the research and work on cutting edge chip manufacturing, so academia adapts and works on what it can.

## Overfitting?

Q. How come AI doesn't just overfit to everything? If you have 10 data points, the best fit is to draw a weird squiggly line connecting all the different points, even though we as humans know a simpler line or curve is more likely to generalize

A. For something like GPT-3, the amount of data trained on is larger than the parameters which should help, although vision models usually have more parameters than data due to just a label for an entire image. So it also can generalize due to **properties** of stochastic gradient descent, that prefers some solutions to others. The learning algorithm does a lot of the heavy lifting

Where does memorization end and generalization begin? Look into Bayesian Systems

## Artificial Neurons vs Biological Neurons

A scientist made a very accurate representation of a biological neuron with about 100,000 artificial neurons (check this). Based off of this, since a neural network is a function approximator, groups of 100,000 neurons in a larger artificial network could arrange themselves through training to act like this artificial neuron. So there doesn't seem to be an inherent obstacle for standard neural networks to overcome except better data, training, and more neurons

If you had a one layer network with an input for every single beat of space and time and it was trained, then it could approximate anything, although at that point you could call it a universal simulation instead of a universal approximation. However this is extremely impractical and not necessary

Thoughts:

should we add a "pruning" time for artificial neurons like biological ones go through? <- yes people have done it but it needs more looking into
