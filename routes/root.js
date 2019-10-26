import { Router } from "express";
import { rootControllers } from "../controllers";
const rootRouter = Router();

// GET /v1/
rootRouter.get("/", rootControllers.getRoot);

// POST /v1/
rootRouter.post("/", rootControllers.postRoot);

// PUT /v1/
rootRouter.put("/", rootControllers.putRoot);

// DELETE /v1/
rootRouter.delete("/", rootControllers.deleteRoot);

export { rootRouter };
