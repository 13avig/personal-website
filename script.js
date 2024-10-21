// Function to handle user input and redirect to new pages
function handleInput() {
    const input = document.getElementById('user-input').value.toLowerCase();
    
    // Redirect to new pages based on input
    switch (input) {
        case 'about':
            window.location.href = 'about.html';
            break;
        case 'projects':
            window.location.href = 'projects.html'; // Optional if you create this page later
            break;
        case 'work':
            window.location.href = 'work.html';
            break;
        case 'in action':
            window.location.href = 'inaction.html';
            break;
        case 'hobbies':
            window.location.href = 'hobbies.html';
            break;
        case 'contact':
            window.location.href = 'contact.html';
            break;
        default:
            alert('Unknown command! Try typing "about", "projects", "work", "in action", or "hobbies".');
            break;
    }

    // Clear input box
    document.getElementById('user-input').value = '';
}