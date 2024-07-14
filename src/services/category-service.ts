import { AxiosRequestConfig } from "axios"
import { requestBackend } from "../utils/requests"

export const findAllRequest = () => {
    const config: AxiosRequestConfig = {
        method: "GET",
        url: "/categories"
    }

    return requestBackend(config);
}