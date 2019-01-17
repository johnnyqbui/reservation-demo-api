import axios from 'axios'

class Reservation {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000', // json-server endpoint
    })
  }

  list() {
    return this.api.get('/reservations').then(res => res.data)
  }

  create(data) {
    return this.api.post('/reservation', data).then(res => res.data)
  }
}

export default new Reservation()