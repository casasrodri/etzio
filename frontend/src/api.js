import axios from "axios";
const baseURL = 'http://127.0.0.1:8000/api/v1'

export class BaseApi {
    constructor(clase) {
        this.axios_ = axios.create({
            baseURL: `${baseURL}/${clase}/`
        })
    }

    create = data => this.axios_.post('/', data)
    list = () => this.axios_.get('/')
    get = id => this.axios_.get(`/${id}/`)
    update = (id, data) => this.axios_.put(`/${id}/`, data)
    delete = id => this.axios_.delete(`/${id}/`)
}

export class CiclosApi extends BaseApi {
    constructor() {
        super('ciclos');
    }

    listNodes = () => axios.get(`${baseURL}/ciclosNodos/`)
}
