import React from "react";

const Resume: React.FC = () => (
  <section id="resume" className="py-20 bg-white dark:bg-gray-900">
    <div className="container mx-auto px-4 text-center">
      <h2 className="text-3xl font-bold mb-6">Resume</h2>
      <a
        href="https://res.cloudinary.com/dn4okkd2p/raw/upload/v1747582696/resume-1_otykca.docx"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Download Resume (DOCX)
      </a>
    </div>
  </section>
);

export default Resume;