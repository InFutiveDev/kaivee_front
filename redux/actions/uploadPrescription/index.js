import { MakeProtectedApiCall } from "utility/api";

// ** Headers
const getHeaders = () => {
  return {
    "x-auth-token": `bearer ${localStorage.getItem("accessToken")}`,
    "Content-type": "multipart/form-date",
    Accept: "application/json",
  };
};

const baseUrl = process.env.REACT_APP_BASE_URL;

export const POST_PRESCRIPTION = (data) => {
  return async (dispatch) => {
    try {
      const url = `${baseUrl}/upload/add`;
      const res = await MakeProtectedApiCall(url, "POST", getHeaders(), data);
      if (res?.status === 200) {
        return { success: true, data: res };
      }
    } catch (error) {
      console.log(error.response.data.replace(/\\/g, ""));
    }
  };
};
