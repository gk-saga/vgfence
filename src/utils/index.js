export const getServiceURL = () => {
  let SERVICE_URL = "http://localhost:3000";

  let HOST_NAME = window.location.hostname;

  switch (true) {
    // case HOST_NAME.includes('localhost'): SERVICE_URL = "http://localhost/gvs";
    //     break;

    default:
      SERVICE_URL = "http://localhost:3000";
      break;
  }

  return SERVICE_URL;
};
