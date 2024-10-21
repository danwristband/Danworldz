import './App.css';
import { useState, useEffect } from 'react';
import { Aboutme } from './assets/Component/Aboutme';
import { Award } from './assets/Component/Award';
import { Contact } from './assets/Component/Contact';
import { Experiences } from './assets/Component/Experiences';
import { Heros } from './assets/Component/Heros';
import { Icanhelp } from './assets/Component/Icanhelp';
import { Navbarx } from './assets/Component/Navbarx';
import { Project } from './assets/Component/Project';
import { Techskills } from './assets/Component/Techskills';

function App() {
  const [loading, setLoading] = useState(true); // State for loading screen
  const [progress, setProgress] = useState(0); // State to track loading progress

  useEffect(() => {
    const images = document.querySelectorAll('img'); // Get all images in the document
    const totalImages = images.length;

    if (totalImages === 0) {
      // If there are no images, immediately set loading to false
      setProgress(100);
      setLoading(false);
      return;
    }

    let loadedImages = 0;

    const updateProgress = () => {
      loadedImages += 1;
      const percentLoaded = Math.round((loadedImages / totalImages) * 100);
      setProgress(percentLoaded);
      if (percentLoaded === 100) {
        setTimeout(() => {
          setLoading(false); // Hide loading screen when all images are loaded
        }, 500); // Small delay for smoother transition
      }
    };

    images.forEach((img) => {
      if (img.complete) {
        // If the image is already loaded, update progress immediately
        updateProgress();
      } else {
        img.addEventListener('load', updateProgress); // Update progress when the image loads
      }
    });

    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', updateProgress); // Clean up event listeners
      });
    };
  }, []);

  return (
    <>
      {loading ? (
        // Loading screen with percentage
        <div className="flex flex-col justify-center items-center h-screen bg-gray-100">
          <div className="text-[#5ac65e] text-2xl mb-4">Loading {progress}%</div>
          <div className="w-64 bg-gray-300 rounded-full">
            <div
              className="bg-[#5ac65e] h-4 rounded-full"
              style={{ width: `${progress}%` }}
            ></div>
          </div>
        </div>
      ) : (
        <div>
          <Navbarx />

          {/* Section Me */}
          <section id="me" className="overflow-hidden m-0 p-0 ">
            <Heros />
            <Aboutme />
            <Icanhelp />
            <Techskills />
          </section>

          
          <section id="experiences" className="overflow-hidden m-0 p-0">
            <Experiences />
          </section>

         
          <section id="project" className="overflow-hidden m-0 p-0">
            <Project />
          </section>

          
          <section id="awards" className="overflow-hidden m-0 p-0">
            <Award />
          </section>

          
          <section id="contact" className="overflow-hidden m-0 p-0">
            <Contact />
          </section>
        </div>
      )}
    </>
  );
}

export default App;
