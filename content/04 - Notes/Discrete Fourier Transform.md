# Discrete Fourier Transform
---

The **Discrete Fourier Transform** (DFT) is a fundamental tool in digital signal processing. It transforms a finite sequence of evenly-spaced samples of a signal from the **time domain** into the **frequency domain**. In simpler terms, it breaks down a complex signal into the individual frequencies that make it up.

### The Input and Output

-   **Input:** A sequence of `N` real or complex numbers `{x_0, x_1, ..., x_{N-1}}`. This is the signal in the time domain. For example, these could be the intensity values of an audio signal at `N` consecutive, evenly-spaced points in time.
-   **Output:** A sequence of `N` complex numbers `{X_0, X_1, ..., X_{N-1}}`. This is the signal's representation in the frequency domain.

Each output value `X_k` is a complex number that describes a specific frequency component present in the original signal. A complex number has two parts:
-   **Magnitude (`|X_k|`)**: Represents the amplitude or "strength" of the k-th frequency. A large magnitude means this frequency is a significant part of the original signal.
-   **Phase (`arg(X_k)`)**: Represents the starting position or offset of the sine wave for that k-th frequency.

### The DFT Formula

The formula to compute the DFT is:
$$
X_{k}=\sum_{n=0}^{N-1} x_{n} \cdot e^{-i \frac{2\pi}{N} k n}
$$
for `k = 0, 1, ..., N-1`.

Let's break down the components:
-   `x_n`: The value of the signal at time `n`.
-   `N`: The total number of samples.
-   `k`: The index of the frequency component we are calculating (often called a "frequency bin").
-   `X_k`: The resulting complex number for frequency `k`.
-   `e^{-i \frac{2\pi}{N} k n}`: This is the core of the transformation, based on **Euler's Formula**.

### Euler's Formula and Complex Sinusoids

Euler's formula states: $e^{i\theta}=\cos(\theta)+i\sin(\theta)$.

The term in the DFT, $e^{-i \frac{2\pi}{N} k n}$, represents a point on a circle in the complex plane. As `n` (time) increases, this point rotates around the origin at a speed determined by `k` (frequency). This is a "complex sinusoid".

The DFT formula essentially calculates the "correlation" between the input signal `x_n` and a complex sinusoid for each frequency `k`. If a particular frequency `k` is strong in the signal, the sum will result in a complex number `X_k` with a large magnitude.

### Inverse DFT (IDFT)

The process is reversible. If you have the frequency domain representation `X_k`, you can reconstruct the original time-domain signal `x_n` using the Inverse DFT (IDFT):
$$
x_{n}=\frac{1}{N}\sum_{k=0}^{N-1} X_{k} \cdot e^{i \frac{2\pi}{N} k n}
$$

### Applications

The DFT is used everywhere in science and engineering:
-   **Audio Processing:** Equalizers, filters, audio compression (MP3).
-   **Image Processing:** Filtering, compression (JPEG), and analysis.
-   **Communications:** Modulating and demodulating signals in wireless systems.
-   **Scientific Analysis:** Analyzing the frequency content of any signal, from stock market data to earthquake vibrations.

### Fast Fourier Transform (FFT)

Directly calculating the DFT is computationally expensive (O(N^2)). The **Fast Fourier Transform (FFT)** is a family of highly efficient algorithms for computing the DFT. The discovery of the FFT made real-time digital signal processing practical. It has a complexity of O(N log N).

