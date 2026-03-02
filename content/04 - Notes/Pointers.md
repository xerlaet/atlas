# Pointers
---

```c++
int x; // declares a normal int x
int * p; // declares a pointer p
p = &x; // points p to the address of x

cout << *p << endl; // * is used to dereference p to get the actual value
```

```c++
struct studentType {
	char name[26];
	double gpa;
	int sID;
	char grade;
};

studentType student;
studentType * studentPtr;
studentPtr = &student;

// both of these methods do the same thing
(*studentPtr).gpa = 3.9;
studentPtr->gpa = 3.9;
```

```c++
class Foo {
	public:
	int data[100];
};

void PassByReference(const Foo& f, int n) {
  // Do something with f and n.
}

int main() {
	Foo foo;
	int i = 0;
	PassByReference(foo, i);
	return 0;
}
```

