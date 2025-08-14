document.getElementById("generate").addEventListener("click", generatePassword);

function generatePassword() {
    const length = parseInt(document.getElementById("length").value, 10);

    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const numbers = "0123456789";
    const symbols = "!@#$%^&*()_+[]{}|;:,.<>?/";

    let chars = "";

    if (document.getElementById("uppercase").checked) chars += uppercase;
    if (document.getElementById("lowercase").checked) chars += lowercase;
    if (document.getElementById("numbers").checked) chars += numbers;
    if (document.getElementById("symbols").checked) chars += symbols;

    if (chars.length === 0) {
        document.getElementById("result").textContent = "Please select at least one option.";
        return;
    }

    let password = "";
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * chars.length);
        password += chars[randomIndex];
    }

    document.getElementById("result").textContent = password;
}
