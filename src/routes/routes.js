import { Router } from "express";

const router = Router();

router.get("/test", (request, response) => {
  response.send({
    message: "Hello World! Everything's ok.",
  });
});

export default router;
