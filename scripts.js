// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('enrollment-form'); // Get the form element
    
    form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent the form from submitting normally
        
        // Get the value of the selected course
        const course = document.getElementById('course').value;
        
        // Mapping of courses to their respective HTML pages with videos
        const coursePages = {
            'basic-computer': 'basic-computer.html',
            'graphic-design': 'graphic-design.html',
            'html5': 'html5.html',
            'python': 'python.html',
            'css': 'css.html'
        };

        // Redirect to the page corresponding to the selected course
        if (coursePages[course]) {
            window.location.href = coursePages[course];
        } else {
            alert('Please select a valid course.');
        }
    });
});
