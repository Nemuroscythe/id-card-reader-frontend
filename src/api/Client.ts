import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.ID_CARD_READER_BACKEND_BASE_URL,
});

export default apiClient;
