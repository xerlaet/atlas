# Recursion
---

##### Linear Recursion
when there is one recursive call for each non-base case
```java
public int factorial(int n) {
	if (n == 0) {
		return 1;
	} else {
		return n * factorial(n-1);
	}
}
```

```java
public boolean binarySearch(int[] data, int target, int low, int high) {
	if (low > high) {
		return false;
	}
	
	int mid = (low + high)/2;
	if (target == data[mid]) {
		return true;
	} else if (target < data[mid]) {
		return binarySearch(data, target, low, mid-1);
	} else {
		return binarySearch(data, target, mid+1, high);
	}
}
```
binary search has a run time of $\log n$ because at each attempt the list to search is cut in half

```java
public int linearSum(int[] A, int n) {
	if (n == 0) {
		return 0;
	} else {
		return linearSum(A, n-1) + A[n-1];
	}
}
```

```java
public void reverseArray(int[] A, int i, int j) {
	if (i < j) {
		int temp = A[i];
		A[i] = A[j];
		A[j] = temp;
		reverseArray(A, i+1, j-1);
	}
}
```

```java
public int power(int x, int n) {
	// O(n) way
	if (n == 0) {
		return 1;
	} else {
		return x * power(x, n-1);
	}

	// log(n) way
	if (n == 0) {
		return 1;
	} else if (n % 2 == 0) {
		int y = power(x,n/2);
		return y * y;
	} else {
		int y = power(x,(n-1)/2);
		return x * y * y;
	}
}
```

##### Binary Recursion
when there are two recursive calls for each non-base case
```java
public int binarySum(int[] A, int i, int j) {
	if (i > j) {
		
	}
	return binarySum(i, (i+j)/2) + binarySum((i+j)/2+1, j)
}

```