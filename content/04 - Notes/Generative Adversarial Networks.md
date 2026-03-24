# Generative Adversarial Networks
---

GANs consist of two models, a producer and a discriminator that work in tandem to create output that is realistic

![Pasted image 20241031013723.png](/attachments/Pasted%20image%2020241031013723.png)


## Pitfalls
Vanishing Gradients

If the discriminator gets too good too quickly the gradients approach zero and aren't helpful for the generator. Modifying the loss function to improve the gradient flow can help with this

Mode Collapse

If the generator finds a certain set of outputs that can fool the discriminator it can get stuck and ignore the diversity in the dataset. Mini batch discrimination and adding noise can help the generator to avoid getting stuck by encouraging diverse output

Unstable Convergence

The balance between generator and discriminator can oscillate where they keep correcting each other or diverge where one network becomes dominant. This can be stabilized with batch normalization and careful tuning of learning rates.

Reasoning is predicting results based on energy minimization
