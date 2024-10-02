export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export const handleAxiosError = (error) => {
  if (axios.isAxiosError(error)) {
    return {
      message: error.message,
      code: error.code,
      response: error.response
        ? {
            data: error.response.data,
            status: error.response.status,
            headers: error.response.headers,
          }
        : null,
    };
  }
  return {
    message: error.message,
  };
};
