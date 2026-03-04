# U-Net
---

![Pasted image 20231105164205.png](/attachments/Pasted%20image%2020231105164205.png)

The U-Net was originally created as a better way of segmenting biomedical data, and can be used for applications like segmenting images, denoising images, or upscaling images.

Can have impressive performance on just small data sets, and you can transform images to get new training images

Composed of an Encoder and Decoder Stage

[Explainer Video](https://www.youtube.com/watch?v=NhdzGfB1q74)
## Encoder

![Pasted image 20231105164433.png](/attachments/Pasted%20image%2020231105164433.png)

## Decoder

![Pasted image 20231105164548.png](/attachments/Pasted%20image%2020231105164548.png)

## The Bottleneck

![Pasted image 20231105164114.png](/attachments/Pasted%20image%2020231105164114.png)

## Connecting Paths

![Pasted image 20231105163949.png](/attachments/Pasted%20image%2020231105163949.png)

- the decoder contains information like "this area is a bike" where the encoder contains information like "these are the pixels where the object is"

## Backpropagation "Learning"

![Pasted image 20231105164405.png](/attachments/Pasted%20image%2020231105164405.png)

