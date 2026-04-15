# 3D Reconstruction
---

2D point -> 3D point

Euclidean vs Homogenous Coordinates

## Camera Projection
p=PX
$$
P=K[R\mid t]
$$

SLAM estimates the P matrix by gathering the R and t for each camera


## Epipolar Geometry
To figure out where objects actually are in 3d space, use two cameras. From each camera you figure out where the image can be on the line, and you simply intersect those lines to figure out where the objects should be

The epipolar plane is the plane connecting the camera centers and X which is the object point

The epipolar line is the line of one ray of a projection of a point

$$
ax+by+c=0
$$
$$
x=\begin{bmatrix}
x \\
y \\
1
\end{bmatrix}
,l=\begin{bmatrix}
a \\
b \\
c
\end{bmatrix}
,x^{T}l=0
$$

Joining two points

$$
x=\begin{bmatrix}
x \\
y \\
1
\end{bmatrix}
,x'=\begin{bmatrix}
x' \\
y' \\
1
\end{bmatrix}
$$
The line between two points will be the cross product: $l=x \times x'$


