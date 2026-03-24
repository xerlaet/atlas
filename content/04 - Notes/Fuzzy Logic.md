# Fuzzy Logic
---

**Fuzzy Logic** is a form of many-valued [Logic](/notes/logic) that rejects the strict true/false dichotomy of classical systems. Instead, it deals with "degrees of truth," allowing a proposition to be partially true and partially false simultaneously.

## Membership Functions
The core of fuzzy logic is the **membership function**, which maps a given input value to a **degree of truth** between 0 (absolutely false) and 1 (absolutely true). This allows the system to handle imprecise concepts like "warm" or "fast."

![TikZ Diagram](/attachments/tikz-c2ed140a374402f0299cc01bceee6016.svg)
This is a diagram showing how a temperature reading no longer has to have a binary value of cold or warm, but can instead be a percentage

## Fuzzy vs. Classical Logic

| Feature | Classical Logic | Fuzzy Logic |
|:--- |:--- |:--- |
| **Truth Values**| Binary (True, False) | Continuous [0, 1] |
| **Reasoning** | Exact, absolute | Approximate, interpolative |
| **Data Type** | Crisp, precise numbers | Imprecise, linguistic data |
| **Example** | `IsHot = True` | `IsHot = 0.85` |

## Applications
Fuzzy logic excels in systems that require human-like reasoning with uncertain or incomplete information.
- **Control Systems**: Washing machines, anti-lock brakes, and air conditioners.
- **Artificial Intelligence**: Decision-making models and expert systems.
- **Image Processing**: Pattern recognition and edge detection.
