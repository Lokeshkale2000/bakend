const Resume = require("../models/Resume");

// Create a new resume
const createResume = async (req, res) => {
  try {
    const { name, personalInfo, education, workExperience, skills, summary } =
      req.body;

    const newResume = new Resume({
      name,
      personalInfo,
      education,
      workExperience,
      skills,
      summary,
    });

    const savedResume = await newResume.save();
    res.status(201).json(savedResume);
  } catch (error) {
    console.error("Error creating resume:", error);
    res.status(500).json({ message: "Failed to create resume", error });
  }
};

// Get all resumes
const getAllResumes = async (req, res) => {
  try {
    const resumes = await Resume.find();
    res.status(200).json(resumes);
  } catch (error) {
    console.error("Error fetching resumes:", error);
    res.status(500).json({ message: "Failed to fetch resumes", error });
  }
};

// Get a resume by ID
const getResumeById = async (req, res) => {
  try {
    const { id } = req.params;
    const resume = await Resume.findById(id);

    if (!resume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.status(200).json(resume);
  } catch (error) {
    console.error("Error fetching resume:", error);
    res.status(500).json({ message: "Failed to fetch resume", error });
  }
};

// Update a resume by ID
const updateResume = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, personalInfo, education, workExperience, skills, summary } =
      req.body;

    const updatedResume = await Resume.findByIdAndUpdate(
      id,
      { name, personalInfo, education, workExperience, skills, summary },
      { new: true }
    );

    if (!updatedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.status(200).json(updatedResume);
  } catch (error) {
    console.error("Error updating resume:", error);
    res.status(500).json({ message: "Failed to update resume", error });
  }
};

// Delete a resume by ID
const deleteResume = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedResume = await Resume.findByIdAndDelete(id);

    if (!deletedResume) {
      return res.status(404).json({ message: "Resume not found" });
    }
    res.status(200).json({ message: "Resume deleted successfully" });
  } catch (error) {
    console.error("Error deleting resume:", error);
    res.status(500).json({ message: "Failed to delete resume", error });
  }
};

module.exports = {
  createResume,
  getAllResumes,
  getResumeById,
  updateResume,
  deleteResume,
};
