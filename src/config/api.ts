import axios, { AxiosResponse } from 'axios';

// export const BASE_URL = '';

export const api = axios.create({
  baseURL: 'asdasd.asd',
  timeout: 25000,
  headers: {
    'Content-Type': 'application/json',
  },
});

const responseBody = <T>(response: AxiosResponse<{ data: T }>) => response.data;

export const apiv2 = {
  // eslint-disable-next-line
  get: <T, TParams = undefined | any>(url: string, queryParams?: TParams) =>
    api.get<{ data: T }>(url, { params: queryParams }).then(responseBody),
  // eslint-disable-next-line
  post: <T>(url: string, body?: Record<string, any>) =>
    api.post<{ data: T }>(url, body).then(responseBody),
  // eslint-disable-next-line
  put: <T>(url: string, body?: Record<string, any>) =>
    api.put<{ data: T }>(url, body).then(responseBody),

  delete: <T>(url: string) => api.delete<{ data: T }>(url).then(responseBody),
};
