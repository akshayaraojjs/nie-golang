package main

import "fmt"

func main() {
	number := 19

	if number%2 == 0 {
		fmt.Println(number, "is even number")
	} else {
		fmt.Println(number, "is odd number")
	}

	day := "Tuesday"
	switch day {
	case "Monday":
		fmt.Println("Start of the Week")
	case "Saturday":
		fmt.Println("End of the Week")
	default:
		fmt.Println("Maybe a Regular Day")
	}
}
