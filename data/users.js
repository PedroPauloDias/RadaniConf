const users = [
  { id: 1, name: "Alice", email: "alice@example.com" , password: "123", role: "user" },
  { id: 2, name: "Bob", email: "bob@example.com" ,password: "123" , role: "vendedor"},
  { id: 3, name: "Charlie", email: "charlie@example.com",password: "password2", role:"user"},
];
export const getUserByEmail = (email) => {
  const found = users.find((user) => user.email === email);
  return found;
};

export const getSession = async (req) => {
  const session = await getSession({ req });
  if (session?.user) {
    const user = getUserByEmail(session.user.email);
    if (user) {
      session.user.role = user.role;
    }
  }
  return session;
};