# JavaScript Practice Assignments — Questions and Answers

Topic: Named Functions, Function Expressions, Arrow Functions, and Mixed Function Types.

Each answer is provided in its own `.js` file. The code uses browser `prompt()` for input and `console.log()` for output; run it through `function.html` and the browser Console.

## Q1. Simple interest using a named function

**Question:** Create `calculateSimpleInterest(principal, rate, time)` and return `(principal * rate * time) / 100.

**Answer file:** `01-simple-interest.js`

**Sample input:** Input: principal=5000, rate=5, time=2

**Sample output:** The simple interest is : 500

## Q2. Positive, negative, or zero using a named function

**Question:** Create `checkNumber(n)` returning `Positive`, `Negative`, or `Zero`.

**Answer file:** `02-check-number.js`

**Sample input:** Input: 15 (also try -8 and 0)

**Sample output:** 15 is Positive

## Q3. Multiplication table using a named function that prints itself

**Question:** Create `printTable(n)`; print the table from 1 to 10 and return nothing.

**Answer file:** `03-multiplication-table.js`

**Sample input:** Input: 3

**Sample output:** 3 x 1 = 3 ... 3 x 10 = 30

## Q4. Square using a function expression

**Question:** Store a function in `const square` and return `n * n`.

**Answer file:** `04-square-function-expression.js`

**Sample input:** Input: 20

**Sample output:** The square of 20 is : 400

## Q5. Rectangle area using a function expression

**Question:** Store `areaOfRectangle(length, width)` in a const and return `length * width`.

**Answer file:** `05-rectangle-area.js`

**Sample input:** Input: length=12, width=5

**Sample output:** The area of the rectangle is : 60

## Q6. Voting eligibility using a function expression

**Question:** Store `canVote(age)` in a const and return `age >= 18`.

**Answer file:** `06-voting-eligibility.js`

**Sample input:** Input: age=21 (also try 16)

**Sample output:** You are eligible to vote

## Q7. Kilometers to miles using a function expression

**Question:** Store `kmToMiles(km)` in a const and return `km * 0.621371`; print two decimals.

**Answer file:** `07-km-to-miles.js`

**Sample input:** Input: 10

**Sample output:** 10 km = 6.21 miles

## Q8. Greet user using a function expression that prints itself

**Question:** Store `greetUser(name)` in a const; print the greeting inside the function.

**Answer file:** `08-greet-user.js`

**Sample input:** Input: Asha

**Sample output:** Hello, Asha! Welcome to JavaScript.

## Q9. Cube using single-parameter arrow function

**Question:** Create `const cube = n => n * n * n` using implicit return.

**Answer file:** `09-cube-arrow.js`

**Sample input:** Input: 3

**Sample output:** The cube of 3 is : 27

## Q10. Add two numbers using arrow function with implicit return

**Question:** Create `const add = (a, b) => a + b`.

**Answer file:** `10-add-arrow.js`

**Sample input:** Input: 15 and 25

**Sample output:** The sum of 15 and 25 is : 40

## Q11. Welcome message using arrow function with no parameters

**Question:** Create `getWelcomeMessage = () => "Welcome to JavaScript Practice"`.

**Answer file:** `11-welcome-message.js`

**Sample input:** No input

**Sample output:** Welcome to JavaScript Practice

## Q12. Pass or fail using arrow function with block body

**Question:** Create `getResult(marks)` with if/else and return `Pass` for marks >= 40, otherwise `Fail`.

**Answer file:** `12-pass-fail.js`

**Sample input:** Input: 65 (also try 32)

**Sample output:** Result : Pass

## Q13. Adult or minor using arrow function and ternary operator

**Question:** Create `getAgeGroup = age => age >= 18 ? "Adult" : "Minor"`.

**Answer file:** `13-adult-minor.js`

**Sample input:** Input: 20 (also try 12)

**Sample output:** Age group : Adult

## Q14. Average of three numbers using arrow function

**Question:** Create `average(a, b, c)` with implicit return; print two decimals.

**Answer file:** `14-average-three.js`

**Sample input:** Input: 80, 90, 100

**Sample output:** The average is : 90.00

## Q15. Circle area using all three function types

**Question:** Create named `areaNamed`, expression `areaExpression`, and arrow `areaArrow`; each returns `3.14 * radius * radius`.

**Answer file:** `15-circle-area-three-types.js`

**Sample input:** Input: radius=5

**Sample output:** Named function : 78.50; Function expression : 78.50; Arrow function : 78.50

## Q16. Larger of two numbers using all three function types

**Question:** Create `largerNamed`, `largerExpression`, and `largerArrow`; return the larger number.

**Answer file:** `16-larger-number-three-types.js`

**Sample input:** Input: 10 and 25

**Sample output:** Named function : 25; Function expression : 25; Arrow function : 25

## Q17. Convert multiply into all three function types

**Question:** Create `multiplyNamed`, `multiplyExpression`, and `multiplyArrow`; all return `a * b`.

**Answer file:** `17-multiply-three-types.js`

**Sample input:** Input: 6 and 7

**Sample output:** Named function : 42; Function expression : 42; Arrow function : 42

## Q18. Salary slip using mixed function types

**Question:** Arrow `calculateHRA` returns 20%; expression `calculateDA` returns 10%; named `calculateGross` returns basic + HRA + DA.

**Answer file:** `18-salary-slip.js`

**Sample input:** Input: basic salary=20000

**Sample output:** HRA : 4000; DA : 2000; Gross salary : 26000

## Q19. Calculator using mixed function types

**Question:** Arrow functions add/multiply; expression subtract; named divide with zero guard; switch on operator.

**Answer file:** `19-simple-calculator.js`

**Sample input:** Input: 20, 4, operator / (also try 10, 0, /)

**Sample output:** Result : 5 (zero divisor: Cannot divide by zero)

## Q20. Fuel cost using mixed function types

**Question:** Arrow `calculateFuelNeeded`; expression `calculateTripCost`; named `printTripSummary` prints the report.

**Answer file:** `20-fuel-trip-cost.js`

**Sample input:** Input: distance=300, mileage=15, price/litre=100

**Sample output:** Fuel needed : 20 litres; Trip cost : Rs 2000

## Q21. Online order total using mixed function types

**Question:** Arrow `getDeliveryCharge` returns 0 for amount >= 500, otherwise 40; expression calculates 5% GST; named function calculates total.

**Answer file:** `21-online-order-total.js`

**Sample input:** Input: amount=400 (also try 1000)

**Sample output:** GST : 20; Delivery charge : 40; Total : 460

## Q22. BMI report using mixed function types

**Question:** Arrow calculates BMI; expression classifies BMI; named function prints BMI and category.

**Answer file:** `22-bmi-report.js`

**Sample input:** Input: weight=70 kg, height=1.75 m

**Sample output:** BMI : 22.86; Category : Normal

## How to run

1. Open `function.html` in a browser.
2. Press F12 and choose Console.
3. Change the filename in the `<script src="...">` tag to the required `.js` file.
4. Save and refresh the browser; enter values in the prompt boxes.
