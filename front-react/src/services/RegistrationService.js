import axios from "axios";

const REGISTATION_API_BASE_URL = "localhost:8080/auth/registrationuser";

class RegistrationService{

    postRegistration(){
        return axios.get(REGISTATION_API_BASE_URL);
    }

}

export default new RegistrationService();