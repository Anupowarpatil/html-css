function validateForm() {

    const name = document.getElementById('name').value;
    const age = document.getElementById('age').value;
    const email = document.getElementById('email').value;
    const adhar = document.getElementById('adhar').value;

    if (name === "" || name.length >= 10) {
        alert("Name is required!");
        return false;
    }

    if (age === "" || isNaN(age) || age < 18) {
        alert("Please enter a valid age between 18 and 120.");
        return false;
    }

    if (email === "") {
        alert("Please enter a valid email address.");
        return false;
    }

    if (adhar === "" || adhar.length != 12) {
        alert("Please enter a valid 12-digit Aadhaar number.");
        return false;
    }
    alert("Form submitted successfully!");
    return true;
}
