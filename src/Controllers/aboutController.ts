import type { Request, Response } from 'express';
import {
  about,
  skills,
  experiences,
  Testimonials,
  Brands,
  works,
} from '../json/about';

export const getAbouts = async (req: Request, res: Response) => {
  res.status(200).json({
    about,
  });
};
export const getSkills = async (req: Request, res: Response) => {
  res.status(200).json({
    skills,
  });
};
export const getExperience = async (req: Request, res: Response) => {
  res.status(200).json({
    experiences,
  });
};
export const getTestimonials = async (req: Request, res: Response) => {
  res.status(200).json({
    Testimonials,
  });
};

export const getBrands = async (req: Request, res: Response) => {
  res.status(200).json({
    Brands,
  });
};
export const getWorks = async (req: Request, res: Response) => {
  res.status(200).json({
    works,
  });
};

export const getEmails = async (req: Request, res: Response) => {
  const data = req.body;
  console.log(data);
  res.status(200).json({
    message: 'success',
  });
};
