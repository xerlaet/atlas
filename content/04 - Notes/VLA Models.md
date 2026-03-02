# VLA Models
---

LLMs predict one token at a time, trained in an auto regressive manner

Introduce image tokens that come from a vision encoder

Diffusion models are trained to remove noise from an image

## VLA
A **vision language action** (VLA) model starts with a pretrained VLM and is able to take as input an image and a command and generate an action for a robot to follow

**Discrete Token VLA** has additional tokens that represent actions

**Generative Head VLA** has an additional network with a similar framework to a diffusion model to generate actions

**Custom VLA** is a catch all category for other custom approaches

Hierarchical design, VLM predicts an intermediate representation which is sent to a specialized 3D policy to predict the task

### HAMSTER
Might be fed lots of pixel point predictions (Robopoint), visual question answering (VQA), simulated robotic actions (RLBench), real world data (DROID)

Images -> point clouds -> virtual images -> predicted heatmaps -> gripper pose

**VLA-0** predicts the action directly as text