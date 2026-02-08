function navigateTo(role) {
    if (role === 'student') {
        console.log("Redirecting to Student Login...");
        // window.location.href = "student-login.html"; 
        alert("Navigating to Student Login Path");
    } else if (role === 'admin') {
        console.log("Redirecting to Admin Login...");
        // window.location.href = "admin-login.html";
        alert("Navigating to Admin Login Path");
    }
}