# Object Detection
---

Localize objects in images and classify them

Bounding boxes are traditionally stored as rectangles (`x,y,w,h` or `x1,y1,x2,y2`) because they make storage and image processing easier

Using a sliding window and picking the one with the highest score will solve the localization and classification problem

Size can be solved with multiple boxes of different sizes and perhaps aspect ratios or rescaling the image to multiple sizes

Localization can also be solve with segmentation methods to give regions with a high likelihood of containing objects

Fast R-CNN just runs the CNN once instead of thousands of times
