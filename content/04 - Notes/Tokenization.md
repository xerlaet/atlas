# Tokenization
---

For AI systems, it is necessary to convert standard input like text into a vocabulary that the system is fluent in, usually with a tokenizer

A **tokenizer** will convert input into a series of tokens that is then handled by whatever neural network you are using

Ideally a byte stream of UTF-8 could be fed directly into a language model, however since there are only 256 combinations of numbers in the encoding, the representation of data streams would be very large and increase the computational load

The byte-pair encoding algorithm can be used to increase the vocabulary and decrease the context length, usually the number of iterations of the algorithm is set as a hyperparameter
