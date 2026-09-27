# VLA Models
---

![TikZ Diagram](/attachments/tikz-01fdd1ce5f916df6c29d31056bf50cc6.svg)

**Vision-Language-Action** (VLA) models are foundation models that process visual observations and natural language instructions end-to-end to directly output low-level robotic motor commands. 

This contrasts with traditional pipelined robotics, which separates vision (object detection), language (planning), and control (kinematics) into distinct subsystems. VLAs are typically initialized from Vision-Language Models (VLMs) pretrained on internet-scale image-text corpora, then finetuned on robotic expert trajectories via behavioral cloning.

## Action Generation Paradigms
Instead of predicting single-step movements (which causes hesitant, jittery control), VLAs predict **Action Chunks** (a sequence of future actions) to prevent compounding errors. The mechanism for decoding these chunks generally falls into three categories:
1. **Discrete Token VLAs**: The continuous action space is discretized. The VLM vocabulary is expanded with additional tokens that represent physical actions
2. **Generative Head VLAs**: Uses an additional network framework akin to a diffusion model (or Flow-Matching) to generate continuous action trajectories from noise
3. **Hierarchical Design**: The VLM predicts an intermediate representation (e.g., spatial coordinates or task constraints), which is passed to a specialized 3D policy to predict the final joint kinematics

## Notable Implementations
- [X-VLA](/notes/x-vla): Uses soft-prompts and flow-matching for cross-embodiment generalization.
- **VLA-0**: Predicts the action directly as text rather than specialized action tokens.
