# File Structure Documentation

This document explains the purpose of each file and folder in the R.L-Anino-DentalClinic project.

## Root Directory

```
.
├── index.html                      # Main homepage with login links
├── js-demo.html                   # Demo page for JavaScript database
├── js-login.html                  # Simple login page using JavaScript database
├── test-admin-login.html          # Test page for admin login functionality
├── test-database.html             # Test page to verify database functionality
├── README.md                      # Main project documentation
├── JS_DATABASE_README.md          # Detailed documentation for JavaScript database
├── FILE_STRUCTURE.md              # This file - explains the file structure
├── .git/                          # Git version control files
├── .github/                       # GitHub configuration files
├── css/                           # CSS stylesheets for the main site
├── database/                      # Database files
│   └── hms (1).sql               # SQL database dump
├── hms/                           # Main HMS (Hospital Management System) files
├── images/                        # Images for the main site
└── js/                            # JavaScript files for the main site
```

## Main HMS Directory (`hms/`)

```
hms/
├── user-login.html                # Original PHP-based patient login (deprecated)
├── user-login-js.html             # JavaScript-based patient login (current)
├── registration.html              # Patient registration page
├── forgot-password.html           # Patient password recovery
├── reset-password.html            # Patient password reset
├── book-appointment.html          # Appointment booking page
├── appointment-history.html      # View appointment history
├── change-password.html           # Change password page
├── change-emaild.html             # Change email page
├── check_availability.html        # Check availability functionality
├── checklogin.html                # Login verification (PHP-based)
├── dashboard.html                 # Patient dashboard
├── edit-profile.html              # Edit profile page
├── get_doctor.html                # Get doctor information
├── logout.html                    # Logout functionality
├── manage-medhistory.html         # Manage medical history
├── manage-video.html              # Manage video functionality
├── remove_call.html               # Remove call functionality
├── video_conference.html          # Video conference page
├── view-medhistory.html           # View medical history
├── test.txt                       # Test file
├── admin/                         # Admin-specific files
├── doctor/                        # Doctor-specific files
└── assets/                        # Assets for the main HMS
```

## Admin Directory (`hms/admin/`)

```
hms/admin/
├── admin-dash.html                # Original PHP-based admin login (deprecated)
├── admin-login-js.html            # JavaScript-based admin login (current)
├── dashboard.html                 # Admin dashboard
├── add-doctor.html                # Add new doctor
├── manage-doctor.html             # Manage doctors
├── manage-patient.html            # Manage patients
├── manage-user.html               # Manage users
├── appointment-history.html      # View appointment history
├── doctor-logs.html               # View doctor logs
├── user-logs.html                 # View user logs
├── patient-search.html           # Search patients
├── view-patient.html              # View patient details
├── edit-doctor.html               # Edit doctor information
├── doctor-specilization.html      # Manage doctor specializations
├── edit-doctor-specialization.html # Edit doctor specializations
├── between-dates-reports.html     # Reports between dates
├── betweendates-detailsreports.html # Detailed reports between dates
├── contact.html                   # Contact management
├── about-us.html                  # About us page
├── change-password.html           # Change password
├── check_availability.html        # Check availability
├── logout.html                    # Logout
├── query-details.html             # Query details
├── read-query.html                # Read queries
├── registration.html              # Admin registration
├── unread-queries.html            # Unread queries
├── test.txt                       # Test file
└── assets/                        # Assets for admin section
```

## Doctor Directory (`hms/doctor/`)

```
hms/doctor/
├── doctor-dash.html               # Original PHP-based doctor login (deprecated)
├── doctor-login-js.html           # JavaScript-based doctor login (current)
├── dashboard.html                 # Doctor dashboard
├── add-patient.html               # Add new patient
├── manage-patient.html            # Manage patients
├── appointment-history.html      # View appointment history
├── edit-patient.html              # Edit patient information
├── view-patient.html              # View patient details
├── edit-profile.html             # Edit profile
├── change-password.html           # Change password
├── check_availability.html        # Check availability
├── search.html                    # Search functionality
├── video.html                     # Video functionality
├── forgot-password.html           # Password recovery
├── reset-password.html            # Password reset
├── logout.html                    # Logout
├── test.txt                       # Test file
└── assets/                        # Assets for doctor section
```

## JavaScript Directory (`js/`)

```
js/
├── database.js                    # JavaScript database implementation
├── script.js                      # Main JavaScript file for the site
├── jquery-3.2.1.min.js            # jQuery library
├── bootstrap.min.js                # Bootstrap JavaScript
├── popper.js                      # Popper.js library
├── popper.min.js                  # Minified Popper.js
└── test.txt                       # Test file
```

## Recommendations for Better Organization

1. **Separate PHP and JavaScript versions**: Consider creating separate folders for PHP and JavaScript versions to avoid confusion.

2. **Remove deprecated files**: Once you're sure the JavaScript version is working properly, you can remove the old PHP-based files:
   - `hms/user-login.html`
   - `hms/admin/admin-dash.html`
   - `hms/doctor/doctor-dash.html`

3. **Consistent naming**: Consider renaming files to be more consistent:
   - `hms/admin/admin-login-js.html` → `hms/admin/login.html`
   - `hms/doctor/doctor-login-js.html` → `hms/doctor/login.html`

4. **Documentation**: Keep the README.md and JS_DATABASE_README.md files updated with any changes.

5. **Testing**: Use the test files (`test-database.html`, `js-login.html`, `test-admin-login.html`) to verify functionality before making changes.