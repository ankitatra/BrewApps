
# Book Management App

## Table of Contents
- [API Endpoints](#api-endpoints)
- [Local Setup](#local-setup)
- [Decisions and Assumptions](#decisions-and-assumptions)


## Access the API at 
   https://clean-crown-duck.cyclic.app/.
## API Endpoints

### POST /book/add
- **Description:** Create a new book.
- **Request Body:** JSON object representing the book.
- **Response:** The newly created book as JSON.

### GET /book
- **Description:** Get a list of all books.
- **Response:** List of books as JSON.

### GET /book/:bookId
- **Description:** Get a specific book by ID.
- **Response:** The book as JSON.

### PATCH /book/:bookId
- **Description:** Update a specific book by ID.
- **Request Body:** JSON object with book updates.
- **Response:** The updated book as JSON.

### DELETE /book/:bookId
- **Description:** Delete a specific book by ID.
- **Response:** A success message.

## Local Setup

1. **Clone the repository:**

   ```shell
   git clone <repository-url>


Decisions and Assumptions
We assume that books are represented as JSON objects with properties like title, author, and summary.
We use MongoDB as the database for storing book data. The connection string is specified in the .env file.
We allow cross-origin requests from the specific origin 'https://6541375d6562233dc3c2ea94--visionary-salmiakki-dce795.netlify.app' in the CORS configuration.
The application listens on port 6100.
