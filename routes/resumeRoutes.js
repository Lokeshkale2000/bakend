const express = require('express');
const router = express.Router();
const {
  createResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
} = require('../controllers/resumeController');

// Route to create a new resume
router.post('/', createResume);

// Route to get all resumes
router.get('/', getAllResumes);

// Route to get a resume by ID
router.get('/:id', getResumeById);

// Route to update a resume by ID
router.put('/:id', updateResume);

// Route to delete a resume by ID
router.delete('/:id', deleteResume);

module.exports = router;
