# Data Preprocessing
---

## Data Augmentation
Transform (rotate, crop, zoom, stretch, flip, color, etc) images to add new samples to the dataset and build invariances in the model

Adding noise

Training vs Test set creation
- Random sampling - although you can get unlucky
- Stratified sampling - random but ensure class proportions are maintained in each set
- k-fold cross validation - train a model on each fold/split and use the best model to train on everything