---
aliases:
  - ER Model
---
# Entity-Relationship Model
---

The **Entity-Relationship (ER) Model** is a conceptual way to describe a database structure. More complex data can be represented by the [EER Model](/notes/enhanced-entity-relationship-model)

## Building Blocks
**Entities** are objects, concepts, or events.
- A **strong** entity will exist independently of other entities
- A **weak** entity is dependent on other entities to exist (double border)

![TikZ Diagram](/attachments/tikz-cf408b8a8a87722127ee85f2e6a2054d.svg)

Super Key
Candidate Key
Primary Key
Foreign Key

**Attributes** are properties that describe an entity
- A **key** attribute (underlined) uniquely identities an entity
- A **partial key** (dashed underline) is used in weak entities to differentiate between instances with the same strong entity
- A **simple** attribute cannot be divided into smaller parts
- A **composite** attribute is one made of multiple sub-parts
- A **multivalued** attribute (double oval) can hold multiple values
- A **complex** attribute is both composite and multivalued
- A **derived** attribute (dashed oval) is calculated from other attributes

![TikZ Diagram](/attachments/tikz-1b0e8ac58892e0f8e153f529d14e66a8.svg)

**Relationships** describe how entities interact with each other (specified by cardinality). Most relationships are binary, but could be unary or ternary etc.
- **One-to-one** (1:1)
- **One-to-many** (1:N)
- **Many-to-many** (M:N)

![TikZ Diagram](/attachments/tikz-0ce370efdc83d05e244f3b460a80a1c6.svg)

## Participation Constraint
- **Total** (double line): the relationship is required
- **Partial** (single line): the relationship is optional

![TikZ Diagram](/attachments/tikz-a96435f155e8b467bbb419d0b1a898e3.svg)
