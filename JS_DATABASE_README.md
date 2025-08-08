# JavaScript Database Implementation for HMS

This is a JavaScript implementation of your HMS (Hospital Management System) database that replaces the need for PHP and MySQL. It uses localStorage to persist data in the browser.

## Files Included

1. `js/database.js` - The main database implementation
2. `js-demo.html` - A demo page showing how to use the database

## How It Works

The JavaScript database mimics the functionality of your MySQL database by:

1. Converting all SQL tables to JavaScript objects
2. Storing data in the browser's localStorage for persistence
3. Providing functions to query, add, update, and delete records
4. Handling user authentication

## Key Features

### Database Operations
```javascript
// Get all records from a table
const users = HMSDatabase.getAll('users');

// Get a record by ID
const user = HMSDatabase.getById('users', 1);

// Get records by field value
const userByEmail = HMSDatabase.getByField('users', 'email', 'marbenbenetez@gmail.com');

// Add a new record
const newUser = HMSDatabase.add('users', {
    fullName: 'New User',
    email: 'newuser@example.com',
    password: 'password123'
});

// Update a record
const updatedUser = HMSDatabase.update('users', 1, {
    updationDate: new Date().toISOString()
});

// Delete a record
const deletedUser = HMSDatabase.delete('users', 1);
```

### Authentication
```javascript
// Authenticate a user
const user = HMSDatabase.authenticate('marbenbenetez@gmail.com', '123456', 'user');

// Authenticate an admin
const admin = HMSDatabase.authenticate('admin', 'Test@12345', 'admin');

// Authenticate a doctor
const doctor = HMSDatabase.authenticate('Marben@test.com', '123456', 'doctor');
```

## Data Persistence

All data is stored in the browser's localStorage, which means:
- Data persists between page reloads
- Data is specific to each browser/device
- Data is not shared between different users/browsers

## Default Credentials

- **Admin**: username: `admin`, password: `Test@12345`
- **Doctor**: email: `Marben@test.com`, password: `123456`
- **Patient**: email: `marbenbenetez@gmail.com`, password: `123456`

## Using in Your Application

1. Include the database script in your HTML:
```html
<script src="js/database.js"></script>
```

2. Use the database functions in your JavaScript code:
```javascript
// Initialize the database (done automatically)
HMSDatabase.init();

// Use database functions
const users = HMSDatabase.getAll('users');
```

## Limitations

1. **Security**: This is client-side storage, so it's not secure for production use
2. **Data Sharing**: Data is not shared between different users or browsers
3. **Storage Limits**: Browsers have limits on localStorage size
4. **No Real Database Features**: No complex queries, relationships, or constraints

## Converting Your PHP Application

To convert your PHP application to use this JavaScript database:

1. Replace all PHP database queries with JavaScript equivalents
2. Replace PHP authentication with the `HMSDatabase.authenticate()` function
3. Replace PHP form processing with JavaScript event handlers
4. Use `HMSDatabase.getAll()`, `HMSDatabase.add()`, etc. instead of SQL queries

## Example Conversion

### PHP Version:
```php
<?php
$query = "SELECT * FROM users WHERE email = '$email' AND password = '$password'";
$result = mysqli_query($connection, $query);
$user = mysqli_fetch_assoc($result);
?>
```

### JavaScript Version:
```javascript
const user = HMSDatabase.getByField('users', 'email', email)
    .find(u => u.password === password);
```

This JavaScript database implementation allows you to run your HMS application without a server, making it suitable for GitHub Pages deployment.