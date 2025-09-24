// Demo Microsoft Graph sample data
// Doar pentru activitate GitHub, nu trimite date reale

console.log("Microsoft Graph demo script running!");

// Simulare interacțiune cu sample data Users
const users = [
    {name: "User1", email: "user1@example.com"},
    {name: "User2", email: "user2@example.com"}
];

users.forEach(user => {
    console.log(`Hello ${user.name}, your email is ${user.email}`);
});
