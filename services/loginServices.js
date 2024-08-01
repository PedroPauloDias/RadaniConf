import axios from 'axios';

const baseUrl = 'http://localhost:3000/api';

export async function userExists(email) {
  try {
    const response = await axios.post(`${baseUrl}/userExist`, { email });
    return response.data;
  } catch (error) {
    console.error('Error checking user existence:', error);
    throw error;
  }
}

export async function registerUser(data) {
  try {
    const response = await axios.post(`${baseUrl}/register`, data);
    return response.data;
  } catch (error) {
    console.error('Error registering user:', error);
    throw error;
  }
}

export async function createAdmin(body) {
  try {
    const response = await axios.post(`${baseUrl}/register`, body);
    return response.data;
  } catch (error) {
    console.error('Error creating admin:', error);
    throw error;
  }
}

export async function getAllAdmins() {
  try {
    const response = await axios.post(`${baseUrl}/login`);
    return response.data;
  } catch (error) {
    console.error('Error getting all admins:', error);
    throw error;
  }
}
