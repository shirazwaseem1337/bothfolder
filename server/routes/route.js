import express from "express"
import { addScholarship, getScholarships, deleteScholarship, getScholarshipById, editScholarship } from "../controllers/scholarship.js";
import { addAnnoucement, getAnnoucements, deleteAnnoucement, getAnnoucementById, editAnnoucement } from "../controllers/annoucement.js";

const router = express.Router();

router.post('/scholarship/add', addScholarship);
router.get('/scholarship', getScholarships);
router.delete('/scholarship/:id', deleteScholarship);
router.get('/scholarship/:id', getScholarshipById);
router.put('/scholarship/:id', editScholarship);


// for annoucement

router.post('/annoucement/add', addAnnoucement);
router.get('/annoucement', getAnnoucements);
router.delete('/annoucement/:id', deleteAnnoucement);
router.get('/annoucement/:id', getAnnoucementById);
router.put('/annoucement/:id', editAnnoucement);

export default router;