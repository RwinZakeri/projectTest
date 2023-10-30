import axios from 'axios';
const Base_Url = 'https://fakestoreapi.com';
const GetData = async()=> {
    const Response = await axios.get(`${Base_Url}/products`);
    return Response.data;
}
export default GetData;
