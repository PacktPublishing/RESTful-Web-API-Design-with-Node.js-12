import { Router } from "express";
import { rootControllers } from "../controllers";
import { AsyncWrapper } from "../utils";
const rootRouter = Router();

// GET /v1/
rootRouter.get("/", AsyncWrapper(rootControllers.getRoot));

// POST /v1/
rootRouter.post("/", AsyncWrapper(rootControllers.postRoot));

// PUT /v1/
rootRouter.put("/", AsyncWrapper(rootControllers.putRoot));

// DELETE /v1/
rootRouter.delete("/", AsyncWrapper(rootControllers.deleteRoot));

export { rootRouter };
