function evalRPN(tokens) {
  const stack = [];
  for (const token of tokens) {
    if (!isNaN(token)) {
      stack.push(parseInt(token));
    } else {
      const b = stack.pop();
      const a = stack.pop();
      switch (token) {
        case "+":
          stack.push(a + b);
          break;
        case "-":
          stack.push(a - b);
          break;
        case "*":
          stack.push(a * b);
          break;
        case "/":
          stack.push(Math.trunc(a / b));
          break;
        default:
          throw new Error("Invalid operator");
      }
    }
  }
  return stack.pop();
}

// Example usage
const tokens = ["2", "1", "+", "3", "*"];
console.log(evalRPN(tokens)); // Output: 9
