# Semantic Segmentation
---

**Conditional Random Fields** (CRFs) model the spatial context of pixels. Instead of classifying pixels in isolation, they consider neighboring pixel labels to ensure smooth, logically consistent boundaries.

## The Energy Function
The objective is to find the label assignment $L$ for image $I$ that maximizes the probability $P(L|I)$. This is mathematically equivalent to minimizing the system's energy $E(L)$:
$$P(L|I) = \frac{1}{Z(I)} \exp(-E(L|I))$$
$$E(L) = \sum_{i} \psi_u(l_i) + \sum_{i,j} \psi_p(l_i, l_j)$$

## Unary Potential: $\psi_u(l_i)$
* **Definition:** The cost of assigning label $l_i$ to pixel $i$ based *only* on that pixel's independent features (e.g., color, texture, or raw CNN logits).
* **Function:** Drives the baseline prediction for each individual pixel.

## Pairwise Potential: $\psi_p(l_i, l_j)$
* **Definition:** The cost of assigning labels $l_i$ and $l_j$ to pairs of pixels $i$ and $j$.
* **Function:** Encourages spatial consistency. It heavily penalizes assigning different labels to adjacent pixels *unless* there is a sharp visual contrast in the image (indicating an actual object edge).
* **Common Formulation (Potts Model with Gaussian Edge Potential):**
$$\psi_p(l_i, l_j) = \mu(l_i, l_j) \cdot \omega \exp\left(-\frac{\|I_i - I_j\|^2}{2\sigma^2}\right)$$
  * $\mu(l_i, l_j)$: Label compatibility (e.g., 0 if labels match, 1 if they differ).
  * $\|I_i - I_j\|^2$: The color/intensity difference between the two pixels.

## Key Advantages in Computer Vision
* **Boundary Sharpening:** Overcomes the "blurry" outputs typical of standard segmentation networks by snapping predictions to actual image edges.
* **Noise Reduction:** Cleans up small, isolated speckles of incorrect classes.
* **Fully Connected CRFs:** Modern implementations connect *every* pixel to every other pixel (not just immediate neighbors), allowing the model to enforce long-range, global consistency (e.g., understanding that distant blue patches are likely both "sky").
