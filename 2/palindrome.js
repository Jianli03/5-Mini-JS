function reverseString(str) {
  return str.split("").reverse().join("")
}


function check() {
  const value = input.value
  const reverse = reverseString(value)

  if (value === reverse && value !== "") {
    alert("It's an PALINDROME")
  } else {
    alert("Try something else")
  }
  input.value = ""
}