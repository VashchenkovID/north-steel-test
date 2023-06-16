import axios, { AxiosResponse } from "axios";
import { EndpointsEnum } from "../../utils/enums";
import { ResponseModel } from "../models/ResponseModel/ResponseModel";

const $host = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
});
export default {
  getReq: (): Promise<AxiosResponse<ResponseModel>> => {
    return $host.get(`${EndpointsEnum.GET}`);
  },
  postReq: (): Promise<AxiosResponse<ResponseModel>> =>
    $host.post(`${EndpointsEnum.POST}`),
  deleteReq: (): Promise<AxiosResponse<ResponseModel>> =>
    $host.delete(`${EndpointsEnum.DELETE}`),
};
