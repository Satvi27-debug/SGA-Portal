# SGA Portal - Smart Guide & Academic Project Portal

SGA Portal is a modern academic portal created for students, administrators, and visitors. It provides an easy way to manage student projects, track progress, view assigned guides, and explore project ideas.

The project is built completely using frontend technologies and uses browser local storage to save student progress data.

---

# Project Purpose

The main purpose of this portal is to:

- Help students track project progress
- Help administrators manage project records
- Allow visitors to explore institutional information
- Provide project ideas from different technical domains
- Demonstrate role-based access in a web application

---

# User Roles

There are 3 types of users in this portal:

1. Admin
2. Student
3. Visitor

Each role gets a different dashboard and different features.

---

# Features

## Student Features

- Login using student ID
- View project progress bar
- Check milestone completion
- View assigned guide details
- Explore technical project categories
- Open project ideas
- Read project information
- Access student workspace

## Admin Features

- Login using admin password
- View all student records
- Update project milestone checkboxes
- Delete student records
- Manage local storage data

## Visitor Features

- Enter as guest
- View institutional showcase
- See leadership details

---

# Technologies Used

- HTML5
- CSS3
- JavaScript
- Browser Local Storage
- Google Fonts

---

# Project Files

SGA-Portal/
│
├── index.html
├── style.css
├── script.js
└── README.md

---

# index.html

This file contains the complete structure of the website.

Main sections included:

- Header
- Navigation buttons
- Login modal
- Student workspace
- Guide section
- Gallery section
- Project details page
- Visitor section
- Admin dashboard

---

# style.css

This file contains all the design and styling.

It includes:

- Theme colors
- Buttons
- Cards
- Tables
- Responsive layout
- Animations
- Progress bars
- Toast messages
- Grid layouts
- Role-based color changes

---

# script.js

This file contains all portal functionality.

It handles:

- Login system
- Role validation
- Student guide assignment
- Dynamic category generation
- Project detail generation
- Navigation between pages
- Admin data table rendering
- Local storage saving
- Welcome message display

---

# Login Details

Admin Login:

Role: admin
Password: ACE

Student Login Format:

24AG1A05XX

Examples:

24AG1A05A1
24AG1A05B2
24AG1A05C3

Visitor Login:

Visitors can enter any name or continue as Guest.

---

# Student Workflow

1. Open the portal
2. Click on Sign In
3. Select Student Account
4. Enter valid student ID
5. Open workspace
6. View progress bar
7. View guide information
8. Explore technical domains
9. Open project ideas
10. Read project details

---

# Admin Workflow

1. Open the portal
2. Click on Sign In
3. Select Administration
4. Enter password ACE
5. Open database section
6. View all records
7. Update milestone checkboxes
8. Delete records if needed

---

# Visitor Workflow

1. Open the portal
2. Click on Sign In
3. Select Visitor Access
4. Enter any name or leave blank
5. View showcase page

---

# Available Project Domains

The portal contains project ideas in the following domains:

- Web Development
- Python Programming
- Data Structures and Algorithms
- Database Systems
- Machine Learning
- Artificial Intelligence
- Internet of Things
- Cyber Security
- Mobile App Development
- Software Engineering

Each domain contains multiple mini project ideas for students.

---

# Important JavaScript Functions

toggleModal(show)
- Opens or closes the login modal

toggleInputs()
- Updates the login input field

doLogin()
- Handles login for admin, student, and visitor

renderCategories()
- Displays all project domains

openCategory(cat)
- Opens selected category

showProjectDetails(projName)
- Shows detailed information about a selected project

updateHeader(role)
- Changes navigation buttons based on role

navigateTo(page)
- Switches between different pages

renderAdminTable()
- Shows student records in table format

deleteRecord(id)
- Deletes selected student record

updateDB(id, idx)
- Updates milestone checkboxes

updateStudentUI()
- Updates progress bar and project status

showWelcome(name, role)
- Displays welcome toast notification

---

# Local Storage Example

The portal uses browser local storage to save data.

Example:

localStorage.setItem('sga_db', JSON.stringify(studentDB));

This helps keep records even after refreshing or reopening the browser.

---

# UI Highlights

- Modern header design
- Glassmorphism effect
- Smooth animations
- Dynamic role-based colors
- Progress bar tracking
- Interactive cards
- Clean tables
- Responsive grid layout
- Toast notifications

---

# Future Improvements

Possible future upgrades:

- Database connection
- Backend authentication
- Faculty dashboard
- Search bar
- Dark mode
- Mobile optimization
- Project upload system
- Notification system
- Report generation
- PDF export

---

# How to Run

1. Create a folder named SGA-Portal
2. Add these files:
   - index.html
   - style.css
   - script.js
3. Open index.html in a browser
4. Start using the portal

---

# Conclusion

SGA Portal is a simple and effective academic portal project. It demonstrates role-based login, local storage, student project tracking, dynamic rendering, and frontend design using HTML, CSS, and JavaScript.
