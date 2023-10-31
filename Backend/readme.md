Book Management App
This is a simple web application for managing books.

Table of Contents
API Endpoints
Local Setup
Decisions and Assumptions
API Endpoints
POST /book/add
Description: Create a new book.
Request Body: JSON object representing the book.
Response: The newly created book as JSON.
Example:

{
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "summary": "A story of decadence, idealism, and excess."
}

GET /book
Description: Get a list of all books.
Response: List of books as JSON.
Example:


GET /book/:bookId
Description: Get details of a specific book by ID.
Response: Book details as JSON.

PATCH /book/:bookId
Description: Update a specific book by ID.
Request Body: JSON object with updated book data.

DELETE /book/:bookId
Description: Delete a specific book by ID.
Response: Success message.


Local Setup
Clone the repository:
git clone <repository-url>

Install dependencies:
npm install


Set up your environment variables. Create a .env file in the project root and define the following variables:
PORT=6100
MONGO_URI=<your-mongodb-connection-string>

Start the server:
npm start

Access the API at http://localhost:6100.

Decisions and Assumptions
We assume that books are represented as JSON objects with properties like title, author, and summary.
We use MongoDB as the database for storing book data. The connection string is specified in the .env file.
We allow cross-origin requests from the specific origin 'https://6541375d6562233dc3c2ea94--visionary-salmiakki-dce795.netlify.app' in the CORS configuration.
The application listens on port 6100.
