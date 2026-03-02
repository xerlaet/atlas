# Classes
---
Classes are useful Object Oriented Programming (OOP) structures, and usually are an abstraction of an object

Use a class instead of a Struct when you want private variables, functions as methods, or access specifiers

You can optionally choose to use a header file `.h` in tandem with the `.cpp` file

```c++
#include <iostream> // needed for input and output
using namespace std; // a nice practice so you don't have to do std::cout...
```

```c++
class MyClass {
	public:
		// custom constructor
		MyClass(string name) {
			myName = name;
		}
		// in class definition
		void sayHi() {
			cout << "Hello World!";
		}
		// outside of class definition
		void increase(int num);
	private:
		string myName;
	protected:
		var
}

void MyClass::increase(int num) {
	int temp = num++;
	cout << temp << endl;
}
```

```c++
int main() {
	MyClass myObj;
	myObj.sayHi();
	cout << myObj.myNum << endl;
	 
	return 0;
}
```


talk about const, public vs static

```c++
#include <iostream>
using namespace std;

template <typename T> T myMax(T x, T y) {
	return (x > y) ? x : y;
}

int main() {
	cout << myMax<int>(3,7) << endl;
	cout << myMax<char>('g','e') << endl;
	
	return 0;
}
```

## Concepts
**Object Oriented Programming (OOP)**: Designing your program to be based around objects and reusable
**Encapsulation**: 
**Inheritance**: inherit attributes and methods from another class
**Polymorphism**: use methods from inheritance to perform different tasks