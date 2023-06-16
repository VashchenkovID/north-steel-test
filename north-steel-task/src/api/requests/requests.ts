import axios, { AxiosResponse } from "axios";
import { EndpointsEnum } from "../../utils/enums";

const $host = axios.create({
  baseURL:import.meta.env.VITE_API_URL
});
console.log()
export default {
  getReq: (): Promise<AxiosResponse<any>> => {
    return $host.get(`${EndpointsEnum.GET}`)
  },
  postReq: (): Promise<AxiosResponse<any>> =>
      $host.post(`${EndpointsEnum.POST}`),
  deleteReq: (): Promise<AxiosResponse<any>> =>
      $host.delete(`${EndpointsEnum.DELETE}`),
};
