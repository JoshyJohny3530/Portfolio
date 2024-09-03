
"use client";
import Head from "next/head";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { BsFillMoonStarsFill } from "react-icons/bs";
import { useState } from "react";
import Image from "next/image";
import design from "../public/design.webp";
import code from "../public/code.webp";
import web1 from "../public/web1.webp";
import web2 from "../public/web2.webp";
import web3 from "../public/web3.webp";
import web4 from "../public/web4.webp";
import web5 from "../public/web5.webp";
import web6 from "../public/web6.webp";
import web7 from "../public/web7.webp";
import web8 from "../public/web8.webp";

export default function Home() {
  const [darkMode, setDarkMode] = useState<boolean>(false);

  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Joshy Johny</title>
        <meta name="description" content="Portfolio" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="bg-white px-10 dark:bg-gray-900 md:px-20 lg:px-40">
        <section className="mb-20">
          <nav className="py-10 mb-6 flex justify-between dark:text-white">
            <h1 className="font-burtons text-xl">Joshy Johny</h1>
            <ul className="flex items-center">
              <li>
                <BsFillMoonStarsFill
                  onClick={() => setDarkMode(!darkMode)}
                  className="cursor-pointer text-2xl"
                />
              </li>
            </ul>
          </nav>
          <div className="text-center p-10 py-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium dark:text-teal-400 md:text-6xl">
              Joshy Johny
            </h2>
            <h3 className="text-2xl py-2 dark:text-white md:text-3xl">
              Developer and designer.
            </h3>
            <p className="text-md py-5 leading-8 text-gray-800 dark:text-gray-200 max-w-xl mx-auto md:text-xl">
              With a strong foundation in both development and design, I am
              passionate about creating innovative digital solutions that drive
              business success. My experience spans multiple industries, where I
              have contributed to building robust, scalable applications and
              designing user-centric interfaces.
            </p>
            <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600 dark:text-gray-400">
              <a
                href="https://github.com/JoshyJohny3530?tab=repositories"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/joshy-johny"
                target="_blank"
                rel="noopener noreferrer"
              >
                <AiFillLinkedin />
              </a>
            </div>
          </div>
        </section>
        <section>
          <div className="mb-10">
            <h3 className="text-3xl py-1 dark:text-white">What I Do</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Throughout my career, I’ve worked with teams to develop
              cutting-edge web applications, design intuitive user interfaces,
              and deliver high-quality digital products. My goal is to blend
              functionality with aesthetics, ensuring that each project not only
              performs well but also provides an exceptional user experience.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-10">
            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <Image className="m-auto" src={design} width={100} height={100} alt="Design Icon" />
              <h1 className="text-xl pt-8 pb-2 font-bold">Design Excellence</h1>
              <p className="py-2">
                Crafting visually appealing and functional designs to enhance
                user experience and brand identity.
              </p>
              <h4 className="py-4 text-teal-600 font-bold">Design Tools I Use</h4>
              <p className="italic text-gray-800 py-1">Adobe Photoshop</p>
              <p className="italic text-gray-800 py-1">Adobe Illustrator</p>
              <p className="italic text-gray-800 py-1">Figma</p>
              <p className="italic text-gray-800 py-1">InDesign</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <Image className="m-auto" src={code} width={100} height={100} alt="Code Icon" />
              <h1 className="text-xl pt-8 pb-2 font-bold">Frontend Development</h1>
              <p className="py-2">
                Creating engaging and intuitive user interfaces that enhance
                user experiences.
              </p>
              <h4 className="py-4 text-teal-600 font-bold">Tools I Use</h4>
              <p className="italic text-gray-800 py-1">
                <b>Frameworks/Libraries:</b> ReactJS, AngularJS, Vue.js, jQuery, Next.js
              </p>
              <p className="italic text-gray-800 py-1">
                <b>Styling:</b> Tailwind CSS, Bootstrap
              </p>
              <p className="italic text-gray-800 py-1">Platforms: SharePoint</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <Image className="m-auto" src={code} width={100} height={100} alt="Code Icon" />
              <h1 className="text-xl pt-8 pb-2 font-bold">Backend Development</h1>
              <p className="py-2">
                Building reliable and efficient server-side solutions to power
                applications.
              </p>
              <h4 className="py-4 text-teal-600 font-bold">Languages/Frameworks I Use</h4>
              <p className="italic text-gray-800 py-1">Node.js</p>
              <p className="italic text-gray-800 py-1">Express.js</p>
              <p className="italic text-gray-800 py-1">TypeScript</p>
              <p className="italic text-gray-800 py-1">ASP.NET Core</p>
              <p className="italic text-gray-800 py-1">Python</p>
              <p className="italic text-gray-800 py-1">PHP</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <Image className="m-auto" src={code} width={100} height={100} alt="Code Icon" />
              <h1 className="text-xl pt-8 pb-2 font-bold">Databases</h1>
              <p className="py-2">
                Designing and managing data storage solutions to ensure robust
                data handling and retrieval.
              </p>
              <h4 className="py-4 text-teal-600 font-bold">Databases I Use</h4>
              <p className="italic text-gray-800 py-1">MongoDB</p>
              <p className="italic text-gray-800 py-1">MySQL</p>
              <p className="italic text-gray-800 py-1">PostgreSQL</p>
              <p className="italic text-gray-800 py-1">Firebase</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <Image className="m-auto" src={code} width={100} height={100} alt="Code Icon" />
              <h1 className="text-xl pt-8 pb-2 font-bold">CI/CD & Version Control</h1>
              <p className="py-2">
                Streamlining development workflows and maintaining code quality.
              </p>
              <p className="italic text-gray-800 py-1">
                <b>CI/CD Tools:</b> Jenkins, AWS
              </p>
              <p className="italic text-gray-800 py-1">
                <b>Version Control:</b> Git, GitHub, GitLab
              </p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <Image className="m-auto" src={code} width={100} height={100} alt="Code Icon" />
              <h1 className="text-xl pt-8 pb-2 font-bold">APIs</h1>
              <p className="py-2">
                Developing and integrating APIs to enable seamless communication
                between systems.
              </p>
              <p className="italic text-gray-800 py-1">REST</p>
              <p className="italic text-gray-800 py-1">GraphQL</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <Image className="m-auto" src={code} width={100} height={100} alt="Code Icon" />
              <h1 className="text-xl pt-8 pb-2 font-bold">Mobile Development</h1>
              <p className="py-2">
                Building responsive and functional mobile applications.
              </p>
              <h4 className="py-4 text-teal-600 font-bold">Languages/Frameworks I Use</h4>
              <p className="italic text-gray-800 py-1">Flutter</p>
              <p className="italic text-gray-800 py-1">Android Development</p>
            </div>

            <div className="text-center shadow-lg p-10 rounded-xl dark:bg-white">
              <Image className="m-auto" src={code} width={100} height={100} alt="Code Icon" />
              <h1 className="text-xl pt-8 pb-2 font-bold">Testing</h1>
              <p className="py-2">
                Ensuring the quality and reliability of applications through
                rigorous testing.
              </p>
              <h4 className="py-4 text-teal-600 font-bold">Testing Tools I Use</h4>
              <p className="italic text-gray-800 py-1">Selenium</p>
              <p className="italic text-gray-800 py-1">PyTest</p>
            </div>
          </div>
        </section>

        <section className="py-10">
          <div className="text-center">
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              Here are some of the projects I've worked on, showcasing my skills
              in development and design.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-10 py-10">
            <Image src={web1} alt="Project 1" className="rounded-lg" width={500} height={500} />
            <Image src={web2} alt="Project 2" className="rounded-lg" width={500} height={500} />
            <Image src={web3} alt="Project 3" className="rounded-lg" width={500} height={500} />
            <Image src={web4} alt="Project 4" className="rounded-lg" width={500} height={500} />
            <Image src={web5} alt="Project 5" className="rounded-lg" width={500} height={500} />
            <Image src={web6} alt="Project 6" className="rounded-lg" width={500} height={500} />
            <Image src={web7} alt="Project 7" className="rounded-lg" width={500} height={500} />
            <Image src={web8} alt="Project 8" className="rounded-lg" width={500} height={500} />
          </div>
        </section>
      </main>
    </div>
  );
}
