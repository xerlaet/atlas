# Autoencoders
---
The idea is to create an architecture with a bottleneck ensuring a lower-dimensional representation of the original data

Consists of an encoder and a decoder. The encoder compresses data into a lower-dimensional representation (latent space which has the most important features). The decoder then decompresses the representation back to the original domain

The autoencoder is trained to minimize reconstruction error

$$
E(x,\hat{x})+\text{regularization}
$$

The point of an autoencoder is to generate the latent space which contains the most important information

![[Pasted image 20241031013750.png]]

## Applications
Generation (sample a new point in the sample space and apply the decoder)

Denoising (train by measuring reconstruction error of output against non noisy input)

## Variational Autoencoders
Variational Autoencoders have constrained regions where the data in the latent space is generated, so new vectors can be sampled to produce proper outputs

Has a mean and standard distribution vector