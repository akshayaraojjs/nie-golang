package main

import "fmt"

func main() {
	slice := []int{3, 6, 9}
	fmt.Println("Before Appending, Slice: ", slice)
	// Append data
	slice = append(slice, 12)
	slice = append(slice, 15, 18)

	fmt.Println("After Appending new elements, Slice: ", slice)
	// Length of slice
	fmt.Println("The length of the Slice: ", len(slice))
	// Copy the Slice
	new_slice := make([]int, 5)
	copy_slice := copy(new_slice, slice)

	fmt.Println("The Existing slice elements are:", slice)
	fmt.Println("The Newly Copied slice elements are:", new_slice)

	fmt.Println("Number of elements copied: ", copy_slice)

	//Clear all elements
	new_slice = nil
	fmt.Println("The New slice is empty: ", new_slice)
}
