# Object Detection
---

Localize objects in images and classify them

Bounding boxes are traditionally stored as rectangles (`x,y,w,h` or `x1,y1,x2,y2`) because they make storage and image processing easier

Using a sliding window and picking the one with the highest score will solve the localization and classification problem

Size can be solved with multiple boxes of different sizes and perhaps aspect ratios or rescaling the image to multiple sizes

Localization can also be solved with segmentation methods to give regions with a high likelihood of containing objects

## R-CNN
An external algorithm guesses where objects are
A pre-trained network (like AlexNet) is used to extract visual features


## Fast R-CNN
Fast R-CNN just runs the CNN once instead of thousands of times

RoI pooling layer will give a feature representation for each box, add a regression component

## Faster R-CNN
Have a region proposal network

$k$ anchor boxes, fixes for each cell. Predicts score and coordinates

## YOLO
While R-CNN models rely first on region proposals and then classifying them, YOLO is a single-stage detector making it even faster

[YOLO](/notes/yolo)
