// script.js
function calculateAge() {
    const birthdateInput = document.getElementById('birthdate').value;
    if (!birthdateInput) {
        alert('Please enter your birthdate.');
        return;
    }

    const birthdate = new Date(birthdateInput);
    const today = new Date();
    let age = today.getFullYear() - birthdate.getFullYear();
    const monthDifference = today.getMonth() - birthdate.getMonth();

    if (monthDifference < 0 || (monthDifference === 0 && today.getDate() < birthdate.getDate())) {
        age--;
    }

    document.getElementById('result').textContent = `You are ${age} years old.`;
}
