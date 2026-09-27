# X-VLA
---

## The Heterogeneity Problem
Training a single model on massive, mixed robotics datasets causes severe distributional shifts due to hardware heterogeneity (different action spaces, camera angles, collection frequencies). Standard fixes fail:
- **Domain-Specific Action Projection**: Decodes differently per robot at the very end of the network, but fails to ground the visual reasoning earlier in the pipeline.
- **HPT-Style Projection**: Alters inputs early to map to a shared language, but corrupts the VLM's pretrained feature distribution, causing training instability.
- **Language Prompts**: Appending text (e.g., "This is a UR-5 with a top camera") grounds the model early, but is brittle and requires non-scalable human annotation.

## The X-VLA Solution: Soft Prompts
X-VLA assigns a set of learnable parameters (a vector embedding) to each specific hardware setup. Injected early in the pipeline, this **Soft Prompt** absorbs the hardware-specific quirks (like camera angles), freeing the frozen Transformer backbone to learn universal physical intelligence.

### Encoding Architecture
X-VLA splits the data streams based on spatial and temporal characteristics:
1. **High-Dimensional Stream**: Fixed/third-person cameras and text instructions are processed together by a heavy VLM (Florence-Large) for semantic reasoning. The fast-changing, noisy wrist camera is processed by a lighter, separate vision backbone.
2. **Low-Dimensional Stream**: Current joint states and noisy action samples are concatenated with a time variable and passed through a linear projection layer for early fusion.

### Flow-Matching Action Generation
X-VLA treats action generation as a continuous vector field governed by an ODE. 
1. Starts with a random sample of Gaussian noise.
2. The network predicts a "velocity" vector to push the noise toward the expert action.
3. An ODE solver iteratively refines the noise into a precise action chunk. 
4. Supervised by **Optimal Transport (OT)** loss, which penalizes deviation from the straightest mathematical path between the noise and the expert action.

## Training & Data Processing
To prevent learning human teleoperation jitter, X-VLA uses **temporal downsampling**, predicting 30 "anchor points" spaced over 4 seconds to capture the smooth intent of the movement. Actions are standardized to the End-Effector (EEF) utilizing **Rotate6D** for rotation to prevent singularities.

**Two-Step Adaptation for New Robots:**
1. **Prompt Warm-up:** The main Transformer brain remains completely frozen. A blank soft prompt is instantiated for the new robot and optimized alone.
2. **Joint Fine-Tuning:** Once the prompt is warmed up, the main brain is unfrozen and fine-tuned alongside it.
