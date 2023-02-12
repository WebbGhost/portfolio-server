import express, { Router } from 'express';
import {
  getAbouts,
  getSkills,
  getExperience,
  getTestimonials,
  getBrands,
  getWorks,
  getEmails,
} from '../Controllers/aboutController';

const router: Router = express.Router();

router.get('/abouts', getAbouts);
router.get('/skills', getSkills);
router.get('/experiences', getExperience);
router.get('/testimonials', getTestimonials);
router.get('/brands', getBrands);
router.get('/works', getWorks);
router.post('/emails', getEmails);

export default router;
