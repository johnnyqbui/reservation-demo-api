import axios from 'axios'

class Reservation {
  constructor() {
    this.api = axios.create({
      baseURL: 'http://localhost:3000', // json-server endpoint
    })
  }

  getAll() {
    return this.api.get('/reservations').then(res => res.data)
  }

  get(id) {
    return this.api.get(`/reservations/${id}`).then(res => res.data)
  }

  create(data) {
    return this.api.post('/reservations', JSON.stringify(data), {
      headers:{
        'Content-Type': 'application/json'
      }
    }).then(res => res.data)
  }
}

export default new Reservation()