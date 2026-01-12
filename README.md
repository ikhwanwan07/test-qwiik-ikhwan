# test-qwiik-ikhwan

## 1. Test Case
Refer to the test cases documentation here: [Test Case Spreadsheet](https://docs.google.com/spreadsheets/d/18b-w86IPKSSjC89y4eT9zMYsrCVERXw4/edit?usp=sharing&ouid=111572525109087846311&rtpof=true&sd=true)

## 2. Dependencies
Install the required dependencies:
```bash
npm install
npm install -D @playwright/test
```

## 3. How to Run Playwright
Execute the tests using:
```bash
npx playwright test
```

For running tests in headed mode:
```bash
npx playwright test --headed
```

For running a specific test file:
```bash
npx playwright test path/to/test.spec.ts
```