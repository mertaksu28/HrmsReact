import axios from "axios";

export default class EmpleyeeService{
    getAll(){
        return axios.get("http://localhost:8080/api/employees/getall")
    }
}