import axios from 'axios';

export default function setAuthorizationToken(token) {
  // Add header to every request
  if(token) {
    // Bearer - Standard naming
    axios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common['Authorization'];
  }
}
