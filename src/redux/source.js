import { request } from "../request";

export const fetchData = ()=>{
    return request.get("posts")
}