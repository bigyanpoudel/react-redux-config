import * as source from "./source"
export const fetchData = ()=>{
    return {
        type:"FETCH_DATA",
        payload:source.fetchData()
    }
}