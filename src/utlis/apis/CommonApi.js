// AXIOS
import axios from "axios";

// cancel token
const CancelToken = axios.CancelToken;

// get data
export let cancelGetDataApi;
export async function getDataAPI() {
    const data = await axios.get("http://api.open-notify.org/astros.json", {
        headers: {},
        cancelToken: new CancelToken(function executor(c) {
            // An executor function receives a cancel function as a parameter
            cancelGetDataApi = c;
        }),
    });
    return data;
}
