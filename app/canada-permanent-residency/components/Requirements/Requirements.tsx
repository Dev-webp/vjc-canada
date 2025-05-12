'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';

export default function CanadaPRRequirements() {
  return (
    <div className="bg-[#fef6f2] min-h-screen px-4 py-10 md:px-20">
      <h1 className="text-3xl lg:text-4xl text-sky-700 font-extrabold text-center mb-2">
        CANADA PR VISA <span className="text-orange-500">REQUIREMENTS</span>
      </h1>
      <p className="text-center text-lg mb-10">
        To be eligible for Canada PR, you need to score at least 67 points out of 100 under the FSWP points grid.
      </p>

      <div className="flex flex-col md:flex-row items-center gap-10">
        {/* Image section with motion */}
        <motion.div
          className="w-full md:w-1/2"
          initial={{ x: -100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <Image
            src="/assets/canadapr/require.png"
            alt="Canada PR"
            width={500}
            height={500}
            className="mx-auto rounded-2xl h-full shadow-2xl"
          />
        </motion.div>

        {/* Requirements section with motion */}
        <motion.div
          className="w-full md:w-1/2 space-y-6"
          initial={{ x: 100, opacity: 0 }}
          whileInView={{ x: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.2 }}
        >
          {[
            {
              title: 'Education (Up to 25 Points)',
              details: [
                'Points based on your highest level of education.',
                'Maximum points for PhD or Master’s with ECA (Educational Credential Assessment).'
              ],
              icon: '🎓'
            },
            {
              title: 'Language Skills (Up to 28 Points)',
              details: [
                '24 points for English (CLB 9 or higher gets maximum).',
                'Additional 4 points for French as second language.'
              ],
              icon: '🗣️'
            },
            {
              title: 'Work Experience (Up to 15 Points)',
              details: [
                'Points based on the number of years of full-time experience in NOC TEER 0, 1, 2, or 3.'
              ],
              icon: '💼'
            },
            {
              title: 'Age (Up to 12 Points)',
              details: ['Maximum points if you are between 18-35 years old.'],
              icon: '🎯'
            },
            {
              title: 'Arranged Employment (Up to 10 Points)',
              details: ['Points if you have a valid job offer from a Canadian employer.'],
              icon: '📄'
            },
            {
              title: 'Adaptability (Up to 10 Points)',
              details: [
                'Points for spouse’s language skills, Canadian education/work experience, or relatives in Canada.'
              ],
              icon: '🧳'
            }
          ].map((section, index) => (
            <motion.div
              key={index}
              className="bg-white rounded-xl shadow p-4"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h3 className="font-bold text-lg mb-1 flex items-center">
                <span className="text-2xl mr-2">{section.icon}</span>
                {section.title}
              </h3>
              <ul className="list-disc list-inside text-sm text-gray-700">
                {section.details.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
