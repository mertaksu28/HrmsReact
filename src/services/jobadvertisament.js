import axios from "axios";

export default class JobAdvertisementService{
    getAll(){
        return axios.get("http://localhost:8080/api/jobadvertisement/getall")
    }
    confirmed(id) {
        return axios.post("http://localhost:8080/api/jobadvertisement/confirmed?id=" + id)
    }
}