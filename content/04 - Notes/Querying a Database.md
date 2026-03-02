# Querying a Database
---

```sql
SELECT     <attribute and function list>
FROM       <table list>
[ WHERE    <condition> ]
[ GROUP BY <grouping attribute(s)> ] -- any non functions selected
[ HAVING   <group condition> ]
[ ORDER BY <attribute list> ];
```

When selecting multiple tables, the cross product is computed first (every row in the first database is joined with every row in the second database)

<> vs not in? logically different
