# Bookstore API

Welcome to the Bookstore API! This API allows you to manage a collection of books, including adding new books, updating book details, and deleting books.


## Introduction

This API provides a simple interface for managing a bookstore's inventory. It is designed to be user-friendly and can be easily integrated into various applications.


## Installation

1. Clone the repository:

    - git clone `https://github.com/yourusername/bookstore-api.git`

2. Navigate to the Project Directory:

    - cd bookstore-api

3. Install Dependencies:

    - npm install

4. Start the MongoDB Server:

    Start your MongoDB server. You can run it locally or use a loud-based olution.

5. Configure Environment Variables:

    Create a .env file in the root directory and add the following:

    - PORT=3000
    - MONGODB_URI=mongodb://localhost:27017/bookstore


## Endpoints

### 1. Get All Books

- **URL:** `/books`
- **Method:** `GET`
- **Description:** Retrieve a list of all books in the bookstore.
- **Response:**
  - Status Code: `200 OK`
  - Content: Array of book objects.

### 2. Add a New Book

- **URL:** `/books`
- **Method:** `POST`
- **Description:** Add a new book to the bookstore.
- **Request:**
  - Body: JSON object with book details (title, author, year).
- **Response:**
  - Status Code: `201 Created`
  - Content: JSON object with a message indicating success and the added book.

### 3. Update Book Details

- **URL:** `/books/:id`
- **Method:** `PUT`
- **Description:** Update details of a specific book by providing its ID.
- **Request:**
  - Params: Book ID in the URL.
  - Body: JSON object with updated book details.
- **Response:**
  - Status Code: `200 OK`
  - Content: JSON object with a message indicating success and the updated book.

### 4. Delete a Book

- **URL:** `/books/:id`
- **Method:** `DELETE`
- **Description:** Delete a specific book by providing its ID.
- **Request:**
  - Params: Book ID in the URL.
- **Response:**
  - Status Code: `200 OK`
  - Content: JSON object with a message indicating success.

## Error Handling

- **Status Code 500:**
  - Content: JSON object with a message indicating a server error.

## Authentication

- **Description:** The API is currently set to "Private" but no specific authentication mechanism is implemented in this documentation. 


