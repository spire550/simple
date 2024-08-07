import { asyncHandler } from "./error.handler.js";
import { Router } from "express";
import * as patientController from "./patient.controller.js";

const router = Router();
router.post("/addPatient", asyncHandler(patientController.add));
router.get("/", asyncHandler(patientController.getAllData));
router.put("/updatePatient/:id", asyncHandler(patientController.updatePatient));
router.delete(
  "/deletePatient/:id",
  asyncHandler(patientController.deletePatient)
);
export default router;
