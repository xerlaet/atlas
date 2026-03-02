# Modifying a Database
---

## Insert
```sql
-- Standard Insert
INSERT INTO table_name (column1, column2, ...)
VALUES (value1, value2, ...);

-- Multi-row Insert
INSERT INTO table_name (col1, col2)
VALUES (val1, val2), (val3, val4), (val5, val6);

-- Insert from another table
INSERT INTO table_target (col1, col2)
SELECT col1, col2 FROM table_source WHERE condition;
```

## Update
```sql
UPDATE table_name
SET column1 = value1, column2 = value2, ...
WHERE condition;

-- Using expressions/math
UPDATE products
SET price = price * 1.10
WHERE category = 'Electronics';
```

## Delete
```sql
-- Remove specific rows
DELETE FROM table_name
WHERE condition;

-- Remove ALL rows (Table remains, data goes)
DELETE FROM table_name;

-- The "Nuclear" Option (Resets identity/auto-increments)
TRUNCATE TABLE table_name;
```
