import Api from './Api'

interface Credentials {
  email: string;
  username: string;
  password: string;
}

export default {
  register (credentials: Credentials) {
    return Api().post('register', credentials)
  }
}