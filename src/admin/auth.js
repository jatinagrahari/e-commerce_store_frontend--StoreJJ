const createAccount = async (name, email, password) => {
  try {
    const user = await axios.post("/api/v1/auth/register", {
      name,
      email,
      password,
    });
  } catch (error) {}
};
