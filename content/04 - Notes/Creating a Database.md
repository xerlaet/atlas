# Creating a Database
---

```sql
CREATE TABLE table_name (
	column1 datatype constraint,
	column2 datatype constraint,
	...
	CONSTRAINT constraint_name PRIMARY KEY(pkey_name),
	CONSTRAINT constraint_name FOREIGN KEY(fkey_name)
		REFERENCES table_name(pkey_name)
		ON DELETE value ON UPDATE value,
	CONSTRAINT constraint_name UNIQUE (column_name),
	CONSTRAINT constraint_name CHECK (expression)
);
```

### Data Types
```sql
INT           -- whole numbers
VARCHAR(size) -- variable-length text
DATE          -- tracking time
DECIMAL(p,s)  -- exact numbers
FLOAT, REAL, DOUBLE, PRECISION
CHAR(n), VARCHAR(n), BIT(n)
TRUE, FALSE, NULL
```

### Column Constraints
```sql
NOT NULL           -- column can't have null values
UNIQUE             -- all values in a column are unique
PRIMARY KEY        -- value will uniquely identify each row
FOREIGN KEY        -- points to a primary key in another table
CHECK (expression) -- ensure a condition is met
DEFAULT value      -- default
```
