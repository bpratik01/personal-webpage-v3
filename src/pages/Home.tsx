import React from 'react';
import { Github, Twitter, Linkedin, Mail } from 'lucide-react';
import { SiBuymeacoffee } from "react-icons/si";
import { TimelineItem } from '../types';
import { Timeline } from '../components/Timeline';

export function Home() {
  const timelineItems: TimelineItem[] = [
    {
      type: 'project',
      title: 'Personal Portfolio Website',
      date: 'Feb 10, 2025',
      description: 'A minimalist portfolio built with React, TypeScript, and Tailwind CSS.',
      link: '/projects/',
      isNew: true
    },
    {
      type: 'project',
      title: 'Omni-Vision',
      date: 'Feb 8, 2025',
      description: 'Omni-Vision is a computer vision project that aims at providing a semi-autonomus driving experience to the user.',
      link: '/projects/',
    },
    {
      type: 'project',
      title: 'MLOPS',
      date: 'Jan 8, 2025',
      description: 'A straight-up collection of scripts and projects that’s all about the Ops in MLOps.',
      link: '/projects',
    },
    {
      type: 'project',
      title: 'yt-transcription',
      date: 'Oct 8, 2024',
      description: 'Transcribe YouTube videos effortlessly using Whisper (OpenAI) for accurate speech-to-text conversion.',
      link: '/projects',
    },
    {
      type: 'project',
      title: 'US-Accident_Severity-Prediction',
      date: 'Jan 11, 2025',
      description: 'This project focuses on predicting accident severity in the United States using advanced machine learning techniques, specifically XGBoost',
      link: '/projects/',
    },
    {
      type: 'project',
      title: 'NutriScan',
      date: 'Aug 1, 2024',
      description: 'NutriScan is a web app that uses Gemini API and Hugging Face Inference API to scan food images and provide instant nutritional information.',
      link: '/projects/',
    },
    {
      type: 'project',
      title: 'Pokenet',
      date: 'May 22, 2024',
      description: "This project uses a deep learning model (ResNet-34) to classify Pokémon images. Built with Fastai and Streamlit, it’s simple and easy to use.",
      link: '/projects/',
    },
    {
      type: 'project',
      title: 'Airport-Dashboard',
      date: 'Dec 25, 2024',
      description: "This project uses SQL to build an airport dashboard displaying available flights from various sources to destinations.",
      link: '/projects/',
    },
    {
      type: 'blog',
      title: '9 Data Transformations Every Data Scientist Wishes They’d Known Sooner',
      date: 'Jan 1, 2024',
      description: 'A guide to most common data transformations that every data scientist should know.',
      link: 'https://medium.com/@pratikrbokade05/9-data-transformations-every-data-scientist-wishes-theyd-known-sooner-717040cbb1fe',
    }
  ];

  return (
    <div className=" max-w-3xl mx-auto flex flex-col inset-0  overflow-hidden"> {/* Added h-screen and overflow-hidden */}
      <header className="mb-16">
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300 mb-4">
        Machine Learning Engineer.  I talk to machines, and they listen (most of the time).  I specialize in computer vision, generative AI, and Core ML. I build AI models that are big, fast, and smart.  MLOps? I make it disappear (the chaos, not the pipelines).  I'm good at solving problems with AI – recommendations, images, predictions... you name it.
        </p>
        <div className="flex gap-4">
          <a 
            href="https://github.com/bpratik01" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Github size={18} />
          </a>
          <a 
            href="https://x.com/pratik_csv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Twitter size={18} />
          </a>
          <a 
            href="https://linkedin.com/in/pratik-bokade" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Linkedin size={18} />
          </a>
          <a 
            href="mailto:pratikbokadework@gmail.com" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <Mail size={18} />
          </a>
          <a 
            href="https://buymeacoffee.com/pratik.csv" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
          >
            <SiBuymeacoffee size={18} />
          </a>
        </div>
      </header>

      <Timeline items={timelineItems} />
    </div>
  );
}