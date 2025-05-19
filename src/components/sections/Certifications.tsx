import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { Award, ExternalLink, X } from 'lucide-react';

interface CertificationsProps {
  setActiveSection: (section: string) => void;
}

const Certifications: React.FC<CertificationsProps> = ({ setActiveSection }) => {
  const [ref, inView] = useInView({ threshold: 0.3 });
  const [modalCert, setModalCert] = useState<null | typeof certifications[0]>(null);

  useEffect(() => {
    if (inView) setActiveSection('certifications');
  }, [inView, setActiveSection]);

  const certifications = [
    {
      title: 'Website Creation',
      issuer: 'Infosys|Springboard',
      date: 'April 8th, 2025',
      url: 'https://res.cloudinary.com/dn4okkd2p/image/upload/v1747625067/infosys_page-0001_iotzjf.jpg',
    },
    {
      title: 'Cybersecurity Analyst Job Simulation',
      issuer: 'Tata (Forage)',
      date: 'March 15th, 2025',
      url: 'https://res.cloudinary.com/dn4okkd2p/image/upload/v1747625304/tata_page-0001_nayviq.jpg',
    },
    {
      title: 'Python Essentials 1 & 2 Cource',
      issuer: 'CISCO',
      date: 'October 11, 2024',
      url: 'https://res.cloudinary.com/dn4okkd2p/image/upload/v1747624698/cisco_page-0001_hmtgci.jpg', // <-- direct image URL
    },{
      title: 'Python(Basic)',
      issuer: 'Hackerrank',
      date: 'August 14, 2024',
      url: 'https://res.cloudinary.com/dn4okkd2p/image/upload/v1747624800/hackerrank_page-0001_dmr4ms.jpg',
    },
    {
      title: 'Full Stack Java',
      issuer: 'SkillDzire',
      date: 'June 28, 2021',
      url: 'https://res.cloudinary.com/dn4okkd2p/image/upload/v1747625062/skilldzir_page-0001_vzpz35.jpg',
    }
  ];

  // Helper to check if the URL is an image
  const isImage = (url: string) =>
    /\.(jpg|jpeg|png|gif|webp|bmp)$/i.test(url) ||
    url.includes('cloudinary.com'); // crude check for your cloudinary images

  return (
    <section id="certifications" ref={ref} className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold mb-4">Certifications</h2>
          <div className="w-16 h-1 bg-blue-500 mx-auto mb-8"></div>
          <p className="max-w-3xl mx-auto text-lg text-gray-600 dark:text-gray-400">
            I'm committed to continuous learning and professional development. Here are some of the certifications I've earned to enhance my skills.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white dark:bg-gray-900 p-6 rounded-lg shadow-md cursor-pointer"
              onClick={() => setModalCert(cert)}
            >
              <div className="flex items-start mb-4">
                <Award className="text-blue-500 mr-3" size={24} />
                <div>
                  <h3 className="text-lg font-bold">{cert.title}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{cert.issuer}</p>
                  <p className="text-gray-500 dark:text-gray-500 text-sm mt-1">{cert.date}</p>
                </div>
              </div>
              <span className="inline-flex items-center text-blue-500 hover:text-blue-600 dark:hover:text-blue-400 text-sm font-medium">
                View Certificate <ExternalLink size={16} className="ml-2" />
              </span>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Modal */}
      {modalCert && (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-70 cursor-default">
      <div className="bg-white dark:bg-gray-900 rounded-lg shadow-lg max-w-3xl w-full p-6 relative flex flex-col items-center cursor-default">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-red-500"
              onClick={() => setModalCert(null)}
              aria-label="Close"
            >
              <X size={28} />
            </button>
            <h3 className="text-2xl font-bold mb-2">{modalCert.title}</h3>
            <p className="mb-4 text-gray-600 dark:text-gray-400">{modalCert.issuer} &middot; {modalCert.date}</p>
            <div className="w-full flex justify-center mb-6">
              {isImage(modalCert.url) ? (
                <img
                  src={modalCert.url}
                  alt={modalCert.title}
                  className="max-h-[60vh] rounded shadow-lg object-contain"
                />
              ) : (
                <iframe
                  src={modalCert.url}
                  title={modalCert.title}
                  className="w-full h-[60vh] rounded shadow-lg"
                />
              )}
            </div>
            <a
              href={modalCert.url}
              download
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
            >
              Download Certificate
            </a>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certifications;