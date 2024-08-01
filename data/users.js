const users = [
  { id: 1, name: "Alice", email: "alice@example.com" , password: "password"},
  { id: 2, name: "Bob", email: "bob@example.com" ,password: "123"},
  { id: 3, name: "Charlie", email: "charlie@example.com",password: "password2" },
];
export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};
