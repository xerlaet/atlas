# Java
---
## Java
compiled and run by the JVM
source code is stored in `.java` and byte-code in `.class`
## Base Types
| Type | Value |
| ---- | ---- |
| boolean | true/false |
| char |  |
| byte |  |
| short |  |
| int |  |
| long |  |
| float |  |
| double |  |
## Syntax
```java
public class World {
	public static void main(String[] args) {
		System.out.println("Hello World");
	}

	public int add(int x, int y) {
		return x + y;
	}
}
```

### Arrays
```java
// type can be any primitive value or class
type[] name = {val1, val2, val3, ...};

new type[length]
```

### Lists
```java
// java.util.List
.size() // returns size
.isEmpty() // returns true if empty
.get(i) // returns index i
.set(i,e) // replaces index i with e, and returns old element
.add(i,e) // adds e to index i, shifting everything else after
.remove(i) // removes and returns index i
```


