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
1. The backend provides two JSON API endpoints:

   a. Endpoint 1: 
      - Method: POST
      - URL: /api/submissions
      - Functionality: Receives the form data from the frontend and stores it in the database.
    
   b. Endpoint 2:
      - Method: GET
      - URL: /api/submissions
      - Functionality: Retrieves the existing form submissions from the database and sends them back to the frontend.

2. Upon receiving data from the frontend, the backend stores it in the chosen MongoDB database.

3. When the second page is accessed, the backend retrieves the stored form submissions from the database and sends them back to the frontend for display.

This tech stack and functionality combination allows for seamless communication between the frontend and backend, ensuring the storage and retrieval of form submissions in a user-friendly manner.
