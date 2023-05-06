"use client";

import axios from "axios";
import { deleteCookie, getCookie } from "cookies-next";
import { useRouter } from "next/router";

const axiosApiIntances = axios.create({
  baseURL: process.env.REACT_APP_BACK_END_URL,
  headers: {
    "Content-Type": "application/json",
  },
});
// Add a request interceptor
axiosApiIntances.interceptors.request.use(
  (config) => {
    const tokenCookie = getCookie("token");
    const token = JSON.parse(tokenCookie);
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosApiIntances.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      error.response.status === 401 &&
      error.response.data.message === "Token expired"
    ) {
      deleteCookie("token");
      window.location.href = "/auth/login";
    }
    return Promise.reject(error);
  }
);

export default axiosApiIntances;
