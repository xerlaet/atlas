# How to Build ChatGPT
---
[Video](https://youtu.be/7xTGNNLPyMI)

## Pre-training (~3 months)
1. Crawl the web to collect terabytes of text and preprocess it
2. Convert the text into tokens because the sequence length is a limited resource
3. Train the network on sequences (length 0 - 8000 or whatever) in large batches

The output is a base model, which is basically an internet document simulator. With clever prompting (few shot problems), you can get helpful results but it is still not ideal

## Post-training (~3 hours)
1. Train on examples of `USER: question AI: answer` to make it an assistant
2. Train on examples of `IDK` with questions the model doesn't know (probe it)
3. Train on examples using search with questions the model doesn't know (probe it)
4. Train on examples of `I am an AI assistant developed by ...`

5. Do reinforcement learning on example prompts to learn how to approach problems (take many attempts)

RLHF - train a new neural network on human scores to run the RL simulator (downside is RL can always find nonsense outputs that can game the simulator)

The neural network itself is essentially a input sequence, parameters, a mathematic expression to connect them, and an output

Inference is predicting one token at a time to generate data

Models need tokens to think: distribute the answer across tokens, and allow the model to use tools

Pre training and supervised finetuning can only imitate humans, reinforcement learning allows the models to go beyond human level

