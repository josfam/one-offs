const backendClientAddress = `${import.meta.env.VITE_BACKEND_CLIENT_ADDRESS}/`;
const backendApiUrl = `${backendClientAddress}api/v1/`;
const filmsApiEndpoint = `${backendApiUrl}films/`;

export { backendApiUrl, filmsApiEndpoint };
