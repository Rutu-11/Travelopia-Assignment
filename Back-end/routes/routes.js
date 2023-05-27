const express = require('express');
const router = express.Router();
const Submission = require('../models/submission.js');

// API endpoint to receive form data and store it in the database
router.post('/api/submit', (req, res) => {
  const submissionData = req.body;
  const submission = new Submission(submissionData);
  submission.save((error, savedSubmission) => {
    if (error) {
      console.error('Error saving submission:', error);
      res.status(500).json({ error: 'Failed to save submission' });
    } else {
      res.status(201).json(savedSubmission);
    }
  });
});

// API endpoint to retrieve existing form submissions
router.get('/api/get', (req, res) => {
  Submission.find((error, submissions) => {
    if (error) {
      console.error('Error fetching submissions:', error);
      res.status(500).json({ error: 'Failed to fetch submissions' });
    } else {
      res.json(submissions);
    }
  });
});

module.exports = router;
