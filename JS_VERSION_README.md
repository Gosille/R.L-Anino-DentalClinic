# JavaScript Version of Dental Clinic Management System

This is a JavaScript-only version of the Dental Clinic Management System that can run without a server. It uses localStorage to store data in the browser.

## Features

1. **User Authentication**:
   - Patient login
   - Dentist login
   - Admin login

2. **Dashboard Views**:
   - Patient dashboard
   - Dentist dashboard
   - Admin dashboard

3. **Data Management**:
   - All data is stored in the browser's localStorage
   - Data persists between page reloads
   - No server required

## How to Use

1. **Access the Application**:
   - Open `index.html` in a web browser
   - Click on "Book Appointment" or "Logins" to access the login pages

2. **Login Credentials**:
   - **Admin**: 
     - Username: `admin`
     - Password: `Test@12345`
   - **Dentist**: 
     - Email: `Marben@test.com`
     - Password: `123456`
   - **Patient**: 
     - Email: `marbenbenetez@gmail.com`
     - Password: `123456`

3. **Navigation**:
   - After logging in, you'll be redirected to the appropriate dashboard
   - Use the sidebar navigation to access different features
   - Log out to return to the login pages

## File Structure

- `index.html` - Main homepage
- `js/database.js` - JavaScript database implementation
- `js/database-debug.js` - JavaScript database with debug logging
- `hms/user-login-js.html` - Patient login page
- `hms/doctor/doctor-login-js.html` - Dentist login page
- `hms/admin/admin-login-js.html` - Admin login page
- `hms/dashboard-js.html` - Patient dashboard
- `hms/doctor/dashboard-js.html` - Dentist dashboard
- `hms/admin/dashboard-js.html` - Admin dashboard

## Technical Details

### Database Implementation

The application uses a JavaScript object-based database that mimics the MySQL database structure:

1. **Data Storage**: All data is stored in `localStorage` in the browser
2. **Data Structure**: Tables are represented as arrays of objects
3. **Database Operations**: 
   - `getAll(table)` - Get all records from a table
   - `getById(table, id)` - Get a record by ID
   - `getByField(table, field, value)` - Get records by field value
   - `add(table, record)` - Add a new record
   - `update(table, id, updates)` - Update a record
   - `delete(table, id)` - Delete a record
   - `authenticate(email, password, userType)` - Authenticate a user

### Authentication

User authentication is handled by the `HMSDatabase.authenticate()` function:
- Checks credentials against the database
- Stores user info in `localStorage` on successful login
- Redirects to the appropriate dashboard

### Data Persistence

All data is stored in the browser's `localStorage`:
- Data persists between page reloads
- Data is specific to each browser/device
- No data is shared between different users/browsers

## Limitations

1. **Security**: This is client-side storage, so it's not secure for production use
2. **Data Sharing**: Data is not shared between different users or browsers
3. **Storage Limits**: Browsers have limits on localStorage size
4. **No Real Database Features**: No complex queries, relationships, or constraints

## Deployment

To deploy this application:
1. Upload all files to a web server or GitHub Pages
2. No server-side configuration is required
3. The application will run directly in the browser

## Development

To modify the application:
1. Edit the HTML files to change the UI
2. Modify `js/database.js` to change the database structure or data
3. Update the JavaScript functions to change functionality

## Testing

To test the application:
1. Open `index.html` in a web browser
2. Try logging in with the default credentials
3. Navigate through the dashboards
4. Check that data is stored in localStorage (use browser developer tools)