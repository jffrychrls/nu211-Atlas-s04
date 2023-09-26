const registeredUsernames = ['Gojo Saturo', 'Levi Ackerman', 'Kisuke Uraha'];
const registeredEmails = ['Gojo@email.com', 'Levi@email.com', 'Uraha@email.com'];

function findUsername(username) {
  const foundUsername = registeredUsernames.find(name => name === username);
  if (foundUsername) {
    console.log(`Username ${foundUsername} is already registered.`);
  } else {
    console.log('Username is available, proceed to registration.');
  }
}

// Testing the findUsername function
findUsername('Gojo Saturo');  // Output: "Username Gojo Saturo is already registered."
findUsername('Kisuke Uraha'); // Output: "Username Kisuke Uraha is already registered."

function findEmail(email) {
  // Converting both the email and registered emails to lowercase for comparison
  const emailExists = registeredEmails.some(regEmail => regEmail.toLowerCase() === email.toLowerCase());
  if (emailExists) {
    console.log('Email Already Exists.');
  } else {
    console.log('Email is available, proceed to registration.');
  }
}

// Testing the findEmail function
findEmail('Uraha@email.com');  // Output: "Email Already Exists."
findEmail('newuser@email.com'); // Output: "Email is available, proceed to registration."
