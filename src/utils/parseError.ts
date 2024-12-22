import { isAxiosError } from 'axios';

export const parseError = (error: any) => {
  if (process.env.NODE_ENV !== 'production') {
    console.warn('[Axios Error....]', error);
  }

  if (isAxiosError(error)) {
    const { response } = error;
    switch (response?.status) {
      case 400:
        return (
          (response?.data.error && JSON.stringify(response?.data.error)) ||
          response?.data.message ||
          response?.data ||
          'Bad Request'
        );
      case 401:
        return response?.data.detail || 'Unauthorized User!';
      case 403:
        return response?.data.detail || 'Forbidden';
      case 404:
        return response?.data.detail || response?.data || 'Resource not found';
      case 409:
        return response?.data.detail || 'A duplicate already exists';
      case 422:
        return response?.data.detail;
      default:
        return response?.data.detail || 'Something went wrong';
    }
  } else {
    const { detail } = error;
    return detail;
  }
};
