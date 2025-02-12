package main

import "fmt"

func add(a int, b int) int {
	return a + b
}
func swap(x, y string) (string, string) {
	return y, x
}

func main() {
	num1, num2 := 0, 0
	fmt.Print("Enter any 2 elements: ")
	fmt.Scan(&num1, &num2)

	sum := add(num1, num2)

	fmt.Println("The sum of 2 numbers: ", sum)

	first, last := swap("NIE", "North")
	fmt.Println("Swapped: ", first, last)
}
