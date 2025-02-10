import React from 'react';
import { ExternalLink, Github } from 'lucide-react';

interface Project {
  title: string;
  date: string;
  description: string;
  image?: string;
  link: string;
  githubUrl?: string;
  bulletPoints: string[];
}

export function Projects() {
  const projects: Project[] = [
    //////////////////////////////////////////////////
    {
      title: 'Pokenet',
      date: 'May 22, 2024',
      description: 'This project uses a deep learning model (ResNet-34) to classify Pokémon images. Built with Fastai and Streamlit, it’s simple and easy to use.',
      link: 'https://pokenet-bpratik01.streamlit.app/',
      githubUrl: 'https://github.com/bpratik01/Pokenet',
      bulletPoints: [
        'Python, Fastai, Streamlit',
      ]
    },
    {
      title: 'Pesonal Portfolio Website',
      date: 'Feb 10, 2025',
      description: 'My personal portfolio website built with React, TypeScript, and Tailwind CSS.',
      link: 'https://habitxp.com',
      githubUrl: 'https://github.com/shinbehavior',
      bulletPoints: [
        ' React, TypeScript, Tailwind CSS',
        ' Dark mode, responsive design',
        ' Blog with markdown support',
      ]
    },
    {
      title: 'Omni-Vision',
      date: 'Feb 8, 2025',
      description: 'Omni-Vision is a computer vision project that aims at providing a semi-autonomus driving experience to the user.',
      link: 'https://github.com/bpratik01/Omni_Vision',
      githubUrl: 'https://github.com/bpratik01/Omni_Vision',
      bulletPoints: [
        'Python, TensorFlow, YOLO, OpenCV ',
      ]
    },
    {
      title: 'MLOPS',
      date: 'Jan 8, 2025',
      description: 'A collection of scripts and projects that’s all about the Ops in MLOps.',
      link: 'https://github.com/bpratik01/MLOPS',
      githubUrl: 'https://github.com/bpratik01/MLOPS',
      bulletPoints: [
        'Python, Docker, CI/CD',
        'Kubernetes, ArgoCD',
      ]
    },
    {
      title: 'yt-transcription',
      date: 'Feb 5, 2025',
      description: 'Transcribe YouTube videos effortlessly using Whisper (OpenAI) for accurate speech-to-text conversion.',
      link: 'https://github.com/bpratik01/yt-transcription',
      githubUrl: 'https://github.com/bpratik01/yt-transcription',
      bulletPoints: [
        'yt-dlp, Whisper (OpenAI), Python',
      ]
    },
    {
      title: 'US-Accident_Severity-Prediction',
      date: 'Jan 11, 2025',
      description: 'Predicting accident severity in the United States using advanced machine learning techniques, specifically XGBoost.',
      link: 'https://github.com/bpratik01/US-Accident_Severity-Prediction',
      githubUrl: 'https://github.com/bpratik01/US-Accident_Severity-Prediction',
      bulletPoints: [
        'Python, XGBoost, DVC, Git',
      ]
    },
    {
      title: 'NutriScan',
      date: 'Aug 1, 2024',
      description: 'NutriScan is a web app that uses Gemini API and Hugging Face Inference API to scan food images and provide instant nutritional information.',
      link: 'https://github.com/bpratik01/NutriScan',
      githubUrl: 'https://github.com/bpratik01/NutriScan',
      bulletPoints: [
        'Python, Hugging Face, Gemini API',
      ]
    },
    
    {
      title: 'Airport-Dashboard',
      date: 'Dec 25, 2024',
      description: 'This project uses SQL to build an airport dashboard displaying available flights from various sources to destinations.',
      link: 'https://github.com/bpratik01/Airport-Dashboard',
      githubUrl: 'https://github.com/bpratik01/Airport-Dashboard',
      bulletPoints: [
        'Streamlit, Python, SQL',
      ]
    },
  ];
///////////////////////////////////////////////////////////////////////
  return (
    <div className="max-w-6xl mx-auto px-6">
      <header className="mb-16">
        <h1 className="text-2xl font-medium mb-4 dark:text-white">Projects</h1>
        <p className="text-[15px] leading-relaxed text-gray-800 dark:text-gray-300">
          Build fast, ship fast.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index}
            className="bg-white dark:bg-[#242424] rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col h-full"
          >
            {project.image && (
              <div className="h-40 overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover"
                />
              </div>
            )}
            <div className="p-6 flex-1 flex flex-col">
              <div className="flex items-baseline justify-between mb-4">
                <h2 className="text-lg font-medium dark:text-white">{project.title}</h2>
                <time className="text-sm text-gray-500 dark:text-gray-400 ml-4 shrink-0">{project.date}</time>
              </div>
              
              <p className="text-[15px] text-gray-700 dark:text-gray-300 mb-6 leading-relaxed">
                {project.description}
              </p>

              <ul className="space-y-2 mb-6 flex-1">
                {project.bulletPoints.map((point, i) => (
                  <li key={i} className="flex items-start text-[13px] text-gray-600 dark:text-gray-400">
                    <span className="mr-2 mt-1.5 h-1 w-1 shrink-0 rounded-full bg-gray-300 dark:bg-gray-600" />
                    {point}
                  </li>
                ))}
              </ul>

              <div className="flex items-center gap-4 mt-auto pt-4 border-t border-gray-100 dark:border-gray-700">
                <a 
                  href={project.link}
                  className="inline-flex items-center gap-1 text-[13px] text-blue-600 hover:text-blue-700 dark:text-blue-400 dark:hover:text-blue-300 font-medium"
                >
                  View Project <ExternalLink size={14} className="ml-0.5" />
                </a>
                {project.githubUrl && (
                  <a 
                    href={project.githubUrl}
                    className="inline-flex items-center gap-1 text-[13px] text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
                  >
                    <Github size={14} /> Source
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}