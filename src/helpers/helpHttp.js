export const helpHttp = () => {
  const customFetch = (endpoint, opitions) => {
    const defaultHeader = {
      accept: "application/json",
    };

    const controller = new AbortController();
    opitions.signal = controller.signal;
    opitions.mehtod = opitions.method || "GET";
    opitions.headers = opitions.headers
      ? { ...defaultHeader, ...opitions.headers }
      : defaultHeader;

    opitions.body = JSON.stringify(opitions.body) || false;
    if (!opitions.body) delete opitions.body;

    console.log(opitions);

    setTimeout(() => controller.abort(), 3000);

    return fetch(endpoint, opitions)
      .then(() => (res.ok ? res.json() : Promise.reject({})))
      .catch((err) => {});
  };
  const get = () => {};
  const post = () => {};
  const put = () => {};
  const del = () => {};
  return {
    get,
    post,
    put,
    del,
  };
};
