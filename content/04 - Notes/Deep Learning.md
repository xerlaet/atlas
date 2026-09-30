# Deep Learning
---

- [Convolutional Neural Networks](/notes/convolutional-neural-networks) - Specialized for grid-like image processing
- [Recurrent Neural Networks](/notes/recurrent-neural-networks) - Specialized for sequential temporal data
- [Transformers](/notes/transformers) - Attention-based sequence processing architectures
- [Autoencoders](/notes/autoencoders) - Neural networks for data reconstruction
- [Generative Adversarial Networks](/notes/generative-adversarial-networks) - Competing networks making synthetic data

## Training Pipeline
Forward pass
$$
\hat{y}_{i}=f_{w}(x_{i})
$$
Compute loss
$$
L_{i}=L(\hat{y}_{i},y_{i})
$$
Compute gradient
$$
\nabla _{w}L_{i}=\delta _{w_{1}}L_{i},\delta _{w_{2}},\dots,\delta _{W_{m}}L_{i}
$$
Update weights
$$
w\gets w-\alpha \nabla_{w}L_{i}
$$

Regularization
$$
\text{arg min} \frac{1}{n} \sum _{i=1}^{n}L_{i}(\theta )+\lambda R(\theta )
$$
where
$$
R(\theta )=\frac{1}{2} ||\theta ||_{2}^{2}
$$
$$
R(\theta )=||\theta ||_{1}
$$
