# Travelopia-Assignment
The Repository consists the Travelopia's assignments codebase.

# Frontend Stack:
For the frontend development, I have chosen to use the following tech stack:

- Programming Language: JavaScript
- Framework/Library: React.js
- UI Framework: Chakra UI

# Functionality:
1. The first page consists of a form with the following fields:
   - Name (text input)
   - Email address (text input)
   - Where do you want to go? (dropdown with options: India, Africa, Europe)
   - No. of travellers (number input)
   - Budget Per Person (number input with the currency set to dollars)
   - Submit button

2. Upon submitting the form, the entered data is sent to the backend API endpoint for storing in the database.

3. The second page displays all the submissions made using the form on the first page. It retrieves the existing form submissions from the backend API endpoint.

# Backend Stack:
For the backend development, I have chosen to use the following tech stack:

- Programming Language: Node.js
- Framework: Express.js
- Database: MongoDB

# Functionality:
1. The backend provides three JSON API endpoints:

   a. Endpoint 1: 
      - Method: POST
      - URL: /api/submissions
      - Functionality: Receives the form data from the frontend and stores it in the database.
    
   b. Endpoint 2:
      - Method: GET
      - URL: /api
      - Functionality: Retrieves first five  existing form submissions from the database and sends them back to the frontend along with totalPages.

 c. Endpoint 3:
         - Method: GET
         - URL: /api/csv
         - Functionality: Retrieves all the existing form submissions from the database and sends them back to the frontend.
         

2. Upon receiving data from the frontend, the backend stores it in the chosen MongoDB database.

3. When the second page is accessed, the backend retrieves the stored form submissions from the database and sends them back to the frontend for display.

This tech stack and functionality combination allows for seamless communication between the frontend and backend, ensuring the storage and retrieval of form submissions in a user-friendly manner.


The provided code appears to be a test suite written using the Jest testing framework for a React application. It tests the functionality of the Navbar component by simulating user interactions and checking the resulting changes in the URL.

Here's a brief description of the implemented test cases:

1. Test Case 1 - "onclicking home link the url should be changed":
   - This test verifies that when the "Home" link in the Navbar is clicked, the URL should change to "/".
   - It renders the Navbar component within a BrowserRouter component to enable routing functionality.
   - It uses the screen utility from the testing-library/react library to interact with and query elements rendered in the test.
   - The userEvent.click function simulates a click event on the "Home" link.
   - The test then expects the window.location.pathname to be equal to "/".
   - If the expectation is met, it increments the global score variable by 1.

2. Test Case 2 - "onclicking about link the url should be changed":
   - This test verifies that when the "Form" link in the Navbar is clicked, the URL should change to "/form".
   - It follows a similar structure to Test Case 1, but interacts with the "Form" link and expects the window.location.pathname to be "/form".

3. Test Case 3 - "onclicking contact link the url should be changed":
   - This test verifies that when the "Dashboard" link in the Navbar is clicked, the URL should change to "/dashboard".
   - It follows a similar structure to Test Case 1 and Test Case 2, but interacts with the "Dashboard" link and expects the window.location.pathname to be "/dashboard".

The beforeEach and afterEach functions are used to perform cleanup tasks before and after each test case. The beforeAll and afterAll functions set up and finalize the global score variable and log the initial and final scores respectively.

Overall, these test cases validate the expected behavior of the Navbar component when specific links are clicked, and keep track of a global score for test reporting purposes.
