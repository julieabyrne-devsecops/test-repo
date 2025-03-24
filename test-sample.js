// test-sample.js

// Function to add two numbers
function add(a, b) {
    return a + b;
}

// Function to subtract two numbers
function subtract(a, b) {
    return a - b;
}

// Function to multiply two numbers
function multiply(a, b) {
    return a * b;
}

// Function to divide two numbers
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

// Simple test runner
function runTests() {
    console.log("Running tests...");
    console.assert(add(2, 3) === 5, "Addition test failed");
    console.assert(subtract(5, 3) === 2, "Subtraction test failed");
    console.assert(multiply(2, 3) === 6, "Multiplication test failed");
    console.assert(divide(6, 2) === 3, "Division test failed");
    
    try {
        divide(5, 0);
    } catch (e) {
        console.log("Caught expected error: " + e.message);
    }
    console.log("All tests completed.");
}

// Run the tests
runTests();

// Export functions for external use (if needed in a Node.js environment)
if (typeof module !== 'undefined' && module.exports) {
    module.exports = { add, subtract, multiply, divide };
}
