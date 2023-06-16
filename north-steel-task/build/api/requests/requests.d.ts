import { AxiosResponse } from "axios";
import { ResponseModel } from "../models/ResponseModel/ResponseModel";
declare const _default: {
    getReq: () => Promise<AxiosResponse<ResponseModel>>;
    postReq: () => Promise<AxiosResponse<ResponseModel>>;
    deleteReq: () => Promise<AxiosResponse<ResponseModel>>;
};
export default _default;
