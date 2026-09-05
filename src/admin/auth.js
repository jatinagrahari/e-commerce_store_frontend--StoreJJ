import axios from "axios";

const createAccount = async (name, email, password) => {
  try {
    const user = await axios.post("/api/v1/auth/register", {
      name,
      email,
      password,
    });
    return user;
  } catch (error) {
    throw error;
  }
};

const login = async (email, password) => {
  try {
    const user = await axios.post("/api/v1/auth/login", { email, password });
    return user;
  } catch (error) {
    throw error;
  }
};

const logout = async () => {
  try {
    const user = await axios.post("/api/v1/auth/logout");
    return user;
  } catch (error) {
    throw error;
  }
};

const verifyOtp = async (otp) => {
  try {
    const user = await axios.post("/api/v1/auth/verify-email", { otp });
    return user;
  } catch (error) {
    throw error;
  }
};

const resendOtp = async () => {
  try {
    await axios.post("/api/v1/auth/resendotp");
  } catch (error) {
    throw error;
  }
};

export { createAccount, verifyOtp, resendOtp, login, logout };
