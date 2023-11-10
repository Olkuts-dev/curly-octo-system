import axios, { AxiosInstance } from "axios";

const $axios: AxiosInstance = axios.create({
  baseURL: "https://nominatim.openstreetmap.org"
});

export default $axios;