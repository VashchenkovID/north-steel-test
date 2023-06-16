import axios from "axios";
import { EndpointsEnum } from "../../utils/enums";
const $host = axios.create({
    baseURL: import.meta.env.VITE_API_URL
});
console.log();
export default {
    getReq: () => {
        return $host.get(`${EndpointsEnum.GET}`);
    },
    postReq: () => $host.post(`${EndpointsEnum.POST}`),
    deleteReq: () => $host.delete(`${EndpointsEnum.DELETE}`),
};
//# sourceMappingURL=requests.js.map