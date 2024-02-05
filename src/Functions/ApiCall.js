

export const API_URL = 'http://localhost:5000';

export const checkToken = async () => {
  const token = localStorage.getItem('token');
  
  if (!token) {
    return false;
  }

  try {
    const response = await fetch(`${API_URL}/check-token` , {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${token}`
      },
    });

    if (response.status !== 200) {
      throw new Error('Invalid token');
    }


    if (response.status === 200) {
      console.log('Token is valid');
      return true;
    } else {
      throw new Error('Invalid token');
    }
  } catch (error) {
    console.log(error);
    return false;
  }
};


export const logout = () => {
  localStorage.removeItem('token');
  localStorage.removeItem('LoggedIn');
};