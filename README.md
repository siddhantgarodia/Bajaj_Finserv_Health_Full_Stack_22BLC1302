# Bajaj Finserv API

A REST API built with Node.js and Express that processes an array of data and returns categorized results.

## Features

- Categorizes input array items into numbers (odd/even), alphabets, and special characters
- Calculates sum of numbers
- Creates a concatenated string of alphabets in reverse order with alternating caps

## API Endpoint

### POST /bfhl

Processes an array of data and returns the categorized results.

#### Request Format

```json
{
  "data": ["a", "1", "334", "4", "R", "$"]
}
```

#### Response Format

```json
{
  "is_success": true,
  "user_id": "john_doe_17091999",
  "email": "john@xyz.com",
  "roll_number": "ABCD123",
  "odd_numbers": ["1"],
  "even_numbers": ["334", "4"],
  "alphabets": ["A", "R"],
  "special_characters": ["$"],
  "sum": "339",
  "concat_string": "Ra"
}
```

## Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the server:
   ```
   npm start
   ```

The server will run on port 3000 by default or on the port specified in the PORT environment variable.

## Deployment to Vercel

### Method 1: Using Vercel CLI

1. Install Vercel CLI globally:

   ```
   npm install -g vercel
   ```

2. Login to Vercel:

   ```
   vercel login
   ```

3. Deploy your project:

   ```
   vercel
   ```

4. For production deployment:
   ```
   vercel --prod
   ```

### Method 2: Connecting to GitHub

1. Push your code to a GitHub repository
2. Sign up/Login to [Vercel](https://vercel.com)
3. Click "New Project" and import your GitHub repository
4. Vercel will automatically detect it as a Node.js project
5. Click "Deploy" and your API will be live in minutes

After deployment, your API will be accessible at the URL provided by Vercel.

## Tech Stack

- Node.js
- Express.js
- Body-parser
- CORS
