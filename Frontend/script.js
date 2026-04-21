const projectData = {
    "Web Development": ["Student Portfolio Website", "College Event Registration Page", "Online Quiz Application", "Simple Blog Website"],
    "Python Programming": ["Student Result Management System", "Library Book Tracker", "To-Do List Application", "Number Guessing Game"],
    "Data Structures": ["Student Record Sorting Tool", "Searching Algorithm Visualizer", "Stack Operations Simulator"],
    "Machine Learning": ["Student Performance Prediction", "Spam Email Detection", "Movie Recommendation System"],
    "Cyber Security": ["Password Strength Checker", "Login Authentication System", "File Encryption Tool"],
    "Mobile App": ["Student Reminder App", "College Notice Board App", "Fitness Tracking App"]
};

let studentDB = JSON.parse(localStorage.getItem('sga_db')) || {};
let currentUser = null;
let currentDomain = "";
const guides = ["Dr. A. Sharma", "Prof. R. Verma", "Dr. S. Kumar", "Prof. M. Iyer"];

function toggleModal(show) { 
    document.getElementById('login-modal').classList.toggle('hidden', !show); 
}

function navigateTo(viewId) {
    // Hide all view containers
    document.getElementById('public-view').classList.add('hidden');
    document.getElementById('student-view').classList.add('hidden');
    document.getElementById('admin-view').classList.add('hidden');
    document.getElementById('visitor-view').classList.add('hidden');

    // Show selected parent and specific section
    if (viewId === 'workspace' || viewId === 'guide' || viewId === 'gallery') {
        document.getElementById('student-view').classList.remove('hidden');
        document.querySelectorAll('.view-section').forEach(s => s.classList.add('hidden'));
        document.getElementById(viewId === 'gallery' ? 'gallery-hub' : viewId + '-page').classList.remove('hidden');
    } else {
        document.getElementById(viewId + '-view').classList.remove('hidden');
    }
    window.scrollTo(0,0);
}

function doLogin() {
    const role = document.getElementById('role-select').value;
    const val = document.getElementById('login-creds').value.trim().toUpperCase();

    if (role === 'admin') {
        if(val !== "ACE") return alert("Denied. Secret Key Required.");
        currentUser = "ADMIN";
    } else if (role === 'student') {
        if (!/^24AG1A05[A-Z0-9]{2}$/.test(val)) return alert("Invalid Format (Use 24AG1A05XX).");
        currentUser = val;
        if (!studentDB[val]) studentDB[val] = [true, false, false, false];
        
        // Mock Guide Assignment based on ID hash
        const hash = val.charCodeAt(val.length - 1);
        document.getElementById('display-guide-name').innerText = guides[hash % guides.length];
        document.getElementById('display-dept').innerText = "Department of CS & Engineering";
        document.getElementById('display-office').innerHTML = `<strong>Office:</strong> Academic Block ${hash % 10 + 1}`;
        document.getElementById('display-team').innerHTML = `<strong>Team:</strong> Batch-${hash % 5 + 1}`;
    } else {
        currentUser = "Visitor_" + Math.floor(Math.random() * 1000);
    }

    localStorage.setItem('sga_db', JSON.stringify(studentDB));
    document.body.setAttribute('data-role', role);
    
    // Update Header
    document.getElementById('login-nav-btn').innerText = "Logout";
    document.getElementById('login-nav-btn').onclick = () => location.reload();
    
    if (role === 'student') {
        document.getElementById('student-nav').classList.remove('hidden');
        updateStudentUI();
        renderCategories();
        navigateTo('workspace');
    } else if (role === 'admin') {
        renderAdminLogs();
        navigateTo('admin');
    } else {
        navigateTo('visitor');
    }

    toggleModal(false);
    showWelcome(currentUser, role);
}

function updateStudentUI() {
    const progress = studentDB[currentUser] || [false, false, false, false];
    const completedCount = progress.filter(p => p).length;
    const percent = (completedCount / 4) * 100;
    
    document.getElementById('student-pb').style.width = percent + "%";
    document.getElementById('student-status-text').innerText = `Your project is currently in Phase ${completedCount}. Please consult your guide for next steps.`;
}

function renderCategories() {
    const grid = document.getElementById('category-grid');
    grid.innerHTML = Object.keys(projectData).map(cat => `
        <div class="card" onclick="openCategory('${cat}')">
            <div class="badge">Tech Domain</div>
            <h3>${cat}</h3>
            <p style="margin-top:10px; font-size:0.85rem; color:var(--text-dim);">Click to explore project ideas.</p>
        </div>
    `).join('');
}

function openCategory(cat) {
    currentDomain = cat;
    document.querySelectorAll('.view-section').forEach(s => s.classList.add('hidden'));
    document.getElementById('category-detail').classList.remove('hidden');
    document.getElementById('cat-title').innerText = cat;
    document.getElementById('project-list').innerHTML = projectData[cat].map(proj => `
        <div class="card" onclick="showProjectDetails('${proj}')">
            <div class="badge">Project Idea</div>
            <h3>${proj}</h3>
        </div>
    `).join('');
}

function showProjectDetails(projName) {
    document.querySelectorAll('.view-section').forEach(s => s.classList.add('hidden'));
    document.getElementById('project-info-page').classList.remove('hidden');
    document.getElementById('info-project-title').innerText = projName;
    document.getElementById('info-badge').innerText = currentDomain;
    
    document.getElementById('info-problem').innerText = `Designing a robust ${projName} to solve modern efficiency challenges in the field of ${currentDomain}.`;
    document.getElementById('info-abstract').innerText = `This academic project focuses on building a functional prototype for ${projName}. It involves frontend development using modern frameworks and a backend capable of handling specific domain logic.`;
    
    document.getElementById('info-back-btn').onclick = () => openCategory(currentDomain);
}

function showWelcome(user, role) {
    const toast = document.getElementById('welcome-toast');
    const symbols = { admin: '🛡️', student: '🎓', visitor: '👋' };
    document.getElementById('role-symbol').innerText = symbols[role] || '✨';
    document.getElementById('toast-msg').innerText = `Logged in as ${user}`;
    toast.style.display = 'block';
    toast.style.animation = 'slideIn 0.5s ease forwards';
    setTimeout(() => { toast.style.display = 'none'; }, 4000);
}

function renderAdminLogs() {
    const body = document.getElementById('admin-logs-body');
    body.innerHTML = Object.keys(studentDB).map(id => `
        <tr>
            <td>${id}</td>
            <td>Pending Approval</td>
            <td>${studentDB[id][1] ? '✅' : '❌'}</td>
            <td>${studentDB[id][2] ? '✅' : '❌'}</td>
            <td>${studentDB[id][3] ? '✅' : '❌'}</td>
            <td><button class="btn-danger">Review</button></td>
        </tr>
    `).join('');
}
