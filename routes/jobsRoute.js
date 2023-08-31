import express from "express";
import userAuth from "../middelwares/authMiddleware.js";
import {
  createJobController,
  deleteJobController,
  getAllJobsController,
  jobStatsController,
  updateJobController,
} from "../controllers/jobsController.js";

const router = express.Router();

//router
//Create jobs || post
router.post("/create-job", userAuth, createJobController);

//get jobs
router.get("/get-jobs", userAuth, getAllJobsController);

//Update jobs || patch
router.patch("/update-job/:id", userAuth, updateJobController);

//DELETE jobs || delete
router.delete("/delete-job/:id", userAuth, deleteJobController);

// JOBS STATS FILTER || GET
router.get("/job-stats", userAuth, jobStatsController);

export default router;
