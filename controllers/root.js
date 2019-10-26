const getRequestData = req => ({
  method: req.method,
  path: req.path,
  headers: req.headers,
  host: req.hostname,
  baseUrl: req.baseUrl,
  ip: req.ip,
  message: `Handling ${req.method} request`
});

const getRoot = (req, res, next) => {
  res.json(getRequestData(req));
};

const postRoot = (req, res, next) => {
  res.json(getRequestData(req));
};

const putRoot = (req, res, next) => {
  res.json(getRequestData(req));
};

const deleteRoot = (req, res, next) => {
  res.status(501).json(getRequestData(req));
};

export const rootControllers = {
  getRoot,
  postRoot,
  putRoot,
  deleteRoot
};
