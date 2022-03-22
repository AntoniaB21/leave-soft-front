export default function authHeader() {
    const token = localStorage.getItem('tk');
    if (typeof token === 'string') {
      // return { Authorization: 'Bearer ' + user.accessToken };
      return { 'x-auth-token': token };
    } else {
      return {};
    }
  }
  