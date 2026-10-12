# YOLO
---

**YOLO** looks at the entire image once with a single neural network (hence the you-only-look-once acronym), purely as a regression problem mapping image pixels to bounding box coordinates and class probabilities

## Components
The image is divided into a $S\times S$ grid, and if the center of an object falls into a grid cell, that cell will be responsible for detecting that object

Each grid will predict a fixed number of bounding boxes $(x,y,w,h,c)$ and class probabilities

A single CNN will extract features and make the predictions simultaneously

Afterwards, a Non-Maximum Suppression (NMS) algorithm is run to filter out redundant overlapping boxes (IoU)

## Intersection over Union
$$
\text{IoU}(A,B)=\frac{\text{Area}(A\cap B)}{\text{Area}A\cup B}
$$

$$
\begin{aligned} &\textbf{Input:} \\
&\mathcal{B} = {b_1, b_2, \dots, b_N} \quad \text{(Set of initial bounding box proposals)} \\
&\mathcal{S} = {s_1, s_2, \dots, s_N} \quad \text{(Corresponding confidence scores)} \\
&\eta \quad \text{(NMS IoU threshold, e.g., 0.5)} \\
&\textbf{Initialization:} \\
&\mathcal{D} \leftarrow \emptyset \quad \text{(Set of final selected detections)} \\
&\textbf{While } \mathcal{B} \neq \emptyset \textbf{ do:} \\
&1. \quad m \leftarrow \underset{b_i \in \mathcal{B}}{\text{argmax}} \ s_i \quad \text{(Find the box with the highest score)} \\
&2. \quad \mathcal{D} \leftarrow \mathcal{D} \cup {m} \quad \text{(Add it to final detections)} \\
&3. \quad \mathcal{B} \leftarrow \mathcal{B} \setminus {m} \quad \text{(Remove it from the proposal set)} \\
&4. \quad \textbf{For each } b_i \in \mathcal{B} \textbf{ do:} \ &\quad \quad \textbf{If } \text{IoU}(m, b_i) \geq \eta \textbf{ then:} \\
&\quad \quad \quad \mathcal{B} \leftarrow \mathcal{B} \setminus {b_i} \quad \text{(Discard highly overlapping boxes)} \\
&\textbf{Output: } \mathcal{D} \quad \text{(Final filtered bounding boxes)}
\end{aligned}
$$

## Loss Function
$$
\begin{aligned}
&\lambda_{\text{coord}} \sum_{i=0}^{S^2} \sum_{j=0}^{B} \mathbb{1}_{ij}^{\text{obj}} \left[ (x_i - \hat{x}_i)^2 + (y_i - \hat{y}_i)^2 \right] \\
&+ \lambda_{\text{coord}} \sum_{i=0}^{S^2} \sum_{j=0}^{B} \mathbb{1}_{ij}^{\text{obj}} \left[ (\sqrt{w_i} - \sqrt{\hat{w}_i})^2 + (\sqrt{h_i} - \sqrt{\hat{h}_i})^2 \right] \\
&+ \sum_{i=0}^{S^2} \sum_{j=0}^{B} \mathbb{1}_{ij}^{\text{obj}} (C_i - \hat{C}_i)^2 \\
&+ \lambda_{\text{noobj}} \sum_{i=0}^{S^2} \sum_{j=0}^{B} \mathbb{1}_{ij}^{\text{noobj}} (C_i - \hat{C}_i)^2 \\
&+ \sum_{i=0}^{S^2} \mathbb{1}_{i}^{\text{obj}} \sum_{c \in \text{classes}} (p_i(c) - \hat{p}_i(c))^2 \end{aligned}
$$

1. Penalized errors in the predicted center coordinates of the bounding box
2. Penalizes errors in width and height
3. Measures the error in the confidence when an object is present
4. Measures the error in the confidence when no object is present
5. Calculate the error for class probabilities for the cell with the object
