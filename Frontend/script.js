const projectData = {
    "Web Development": ["Student Portfolio Website", "College Event Registration Page", "Online Quiz Application", "Simple Blog Website", "Department Information Portal", "Static E-Commerce Product Showcase"],
    "Python Programming": ["Student Result Management System", "Library Book Tracker", "To-Do List Application", "Number Guessing Game", "Basic Calculator with History", "Attendance Management System"],
    "Data Structures & Algorithms": ["Student Record Sorting Tool", "Searching Algorithm Visualizer", "Stack Operations Simulator", "Queue Management System", "Binary Search Demonstration", "Linked List Implementation Tool"],
    "Database Systems": ["Student Information System (UI Demo)", "College Fee Management Interface", "Online Library Database UI", "Course Registration Interface", "Employee Record Management", "Inventory Management Dashboard"],
    "Machine Learning": ["Student Performance Prediction (Concept)", "Spam Email Detection (Demo UI)", "Movie Recommendation System (Basic)", "House Price Prediction (Mini)", "Handwritten Digit Recognition (Concept)", "Sentiment Analysis Tool (Demo)"],
    "Artificial Intelligence": ["College FAQ Chatbot", "Career Recommendation System", "Rule-Based Medical Advisor (Basic)", "Smart Study Planner", "Virtual College Assistant", "Simple Voice Assistant (Concept)"],
    "Internet of Things": ["Smart Attendance System", "Smart Parking System", "Smart Home Automation", "Smart Street Light System", "Smart Water Management", "Smart Waste Management"],
    "Cyber Security": ["Password Strength Checker", "Login Authentication System", "Phishing Website Awareness Tool", "File Encryption & Decryption Tool", "Secure Login Interface", "OTP Verification System"],
    "Mobile App Development": ["Student Reminder App", "College Notice Board App", "Fitness Tracking App", "Expense Tracker App", "Online Learning App UI", "Campus Navigation App"],
    "Software Engineering": ["Project Management Tool", "Bug Tracking System", "Software Requirement Management", "Online Feedback System", "Task Allocation System", "Time Table Management System"]
};

let studentDB = JSON.parse(localStorage.getItem('sga_db')) || {};
let currentUser = null;
let currentDomain = "";
const guides = ["Dr. A. Sharma", "Prof. R. Verma", "Dr. S. Kumar", "Prof. M. Iyer"];

function toggleModal(show) {
    document.getElementById('login-modal').classList.toggle('hidden', !show);
}

function toggleInputs() {
    document.getElementById('input-area').innerHTML =
        `<input type="password" id="login-creds" placeholder="Enter Credentials">`;
}

function doLogin() {
    const role = document.getElementById('role-select').value;
    const val = document.getElementById('login-creds').value.trim().toUpperCase();

    if (role === 'admin') {
        if (val !== "ACE") return alert("Denied.");
        currentUser = "ADMIN";
    } else if (role === 'student') {
        if (!/^24AG1A05[A-Z0-9]{2}$/.test(val)) return alert("Invalid Format.");

        currentUser = val;

        if (!studentDB[val]) {
            studentDB[val] = [false, false, false, false];
        }

        const hash = Math.abs(
            val.split('').reduce((a, b) => (((a << 5) - a) + b.charCodeAt(0)) | 0, 0)
        );

        document.getElementById('display-guide-name').innerText = guides[hash % guides.length];
        document.getElementById('display-dept').innerText = "Technical Academics";
        document.getElementById('display-office').innerHTML = `<strong>Office:</strong> Lab Block ${hash % 50}`;
        document.getElementById('display-team').innerHTML = `<strong>Team:</strong> Group-${hash % 10}`;
    } else {
        currentUser = val || "Guest";

        if (!studentDB[currentUser]) {
            studentDB[currentUser] = [false, false, false, false];
        }
    }

    localStorage.setItem('sga_db', JSON.stringify(studentDB));
    document.body.setAttribute('data-role', role);
    document.getElementById('main-get-started').classList.add('hidden');

    toggleModal(false);
    updateHeader(role);

    navigateTo(
        role === 'admin'
            ? 'admin-data'
            : role === 'visitor'
            ? 'visitor-home'
            : 'workspace'
    );

    if (role === 'student') {
        updateStudentUI();
        renderCategories();
    }

    showWelcome(currentUser, role);
}

/* Continue pasting the remaining JavaScript from the <script> section exactly as it is */
