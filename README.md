SGA Portal - README

Project Title

SGA Portal - Smart Guide & Academic Portal


---

Project Overview

SGA Portal is a modern academic web portal designed for students, administrators, and visitors. It provides a clean interface for tracking student project progress, viewing assigned guides, exploring technical project domains, and managing academic records.

The portal supports three user roles:

Admin

Student

Visitor


Each role gets a different interface and functionality.


---

Features

Student Features

Login using student ID format

View project milestone progress

Check assigned academic guide details

Explore technical project domains

Open project ideas and read project details

Track project completion stages


Admin Features

Login with admin credentials

View all student records

Update project milestone checkboxes

Delete student records

Manage student progress data stored in local storage


Visitor Features

Explore institutional showcase section

View leadership information

Access portal without student login



---

Technologies Used

HTML5

CSS3

JavaScript

Local Storage API

Google Fonts



---

Project Structure

SGA-Portal/
│
├── index.html
├── style.css
├── script.js
└── README.md


---

File Explanation

1. index.html

This file contains the full structure of the portal.

It includes:

Header and navigation bar

Login modal

Student workspace section

Guide section

Gallery section

Project details section

Visitor section

Admin section


2. style.css

This file contains all the styling for the portal.

It includes:

Theme colors

Layout styling

Responsive grid system

Buttons and cards

Animations

Tables

Forms

Toast notifications


3. script.js

This file contains all portal functionality.

It handles:

User login

Role-based navigation

Student progress tracking

Guide assignment logic

Category rendering

Project detail rendering

Admin table updates

Local storage management

Welcome notifications



---

Login Credentials

Admin Login

Role: admin
Password: ACE

Student Login Format

24AG1A05XX

Example:

24AG1A05A1
24AG1A05B2
24AG1A05C3

Visitor Login

Visitors can enter any name or leave the field empty.


---

Student Workflow

1. Open the portal


2. Click on "Sign In"


3. Select "Student Account"


4. Enter a valid student ID


5. Access workspace


6. View progress bar


7. Open guide section


8. Explore project domains


9. View project details




---

Admin Workflow

1. Open the portal


2. Click on "Sign In"


3. Select "Administration"


4. Enter password "ACE"


5. Open database section


6. View student records


7. Update milestone checkboxes


8. Delete records if needed




---

Project Domains Available

The portal currently includes the following technical domains:

Web Development

Python Programming

Data Structures & Algorithms

Database Systems

Machine Learning

Artificial Intelligence

Internet of Things

Cyber Security

Mobile App Development

Software Engineering


Each domain contains multiple mini project ideas.


---

Important Functions in script.js

toggleModal(show)

Shows or hides the login modal.

doLogin()

Handles login logic for admin, student, and visitor.

renderCategories()

Displays all technical project categories.

openCategory(cat)

Opens a selected technical domain.

showProjectDetails(projName)

Displays full project information.

updateHeader(role)

Changes navigation buttons based on user role.

navigateTo(page)

Controls page switching.

renderAdminTable()

Displays all stored student records.

updateStudentUI()

Updates the progress bar and milestone status.

showWelcome(name, role)

Displays the welcome toast message.


---

Local Storage Usage

The portal uses browser local storage to save student milestone data.

Example:

localStorage.setItem('sga_db', JSON.stringify(studentDB));

This allows the portal to keep records even after the page reloads.


---

UI Design Highlights

Glassmorphism header

Animated cards

Smooth transitions

Modern color themes

Role-based color changes

Responsive layout

Progress tracking bar

Toast notifications



---

Future Improvements

Possible future upgrades:

Database integration

Backend authentication

Real student records

Project upload feature

Faculty dashboard

Search functionality

Responsive mobile optimization

Dark mode

PDF report generation

Notifications system



---

How to Run

1. Create a folder named SGA-Portal


2. Add the following files:

index.html

style.css

script.js



3. Open index.html in a browser


4. Start using the portal




---

Conclusion

SGA Portal is a simple but powerful academic portal project for students and institutions. It demonstrates role-based access, UI design, local storage handling, and project tracking features using only frontend technologies.
