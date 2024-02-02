"use client";
import React,{useTransition,useState} from 'react';
import  Image  from 'next/image';
import TabButton from "./TabButton";

const TAB_DATA = [
    {
      title: "Skills",
      id: "skills",
      content: (
        <ul className="list-disc pl-2">
          <li>Java</li>
          <li>Angular</li>
          <li>NextJs</li>
          <li>Phython</li>
          <li>PHP</li>
          <li>HTML,CSS,Javascript</li>
          <li>MYSQL.MongoDB</li>
          <li>React</li>
        </ul>
      ),
    },
    {
      title: "Education",
      id: "education",
      content: (
        <ul className="list-disc pl-2">
          <li>Sri Lanka Institute of Information Technology</li>
          <li>Sanghamitta Balika Vidayalaya - Galle
</li>
        </ul>
      ),
    },
    {
      title: "Certifications",
      id: "certifications",
      content: (
        <ul className="list-disc pl-2">
          <li>National Diploma In Information & Communication Technology</li>
          <li>Introduction To Networking Basics</li>
          <li>Network Addressing And Basic Troubleshooting</li>
          <li>Introduction To Javascript Essentials 1</li>
          <li>English For It 1</li>
          <li>UI / UX for Beginners</li>
          <li>View Requirements</li>
          <li>Oracle Cloud Infrastructure 2022 Certified Foundations Associate</li>
          </ul>
      ),
    },
  ];



const AboutSection = () => {
    const [tab,setTab] = useState("skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(() => {
          setTab(id);
        });
      };

  return (
    <section className='text-white'><div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
        <Image src="/images/edited.png" width={500} height ={500}/>

        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4"> About Me </h2>
            <p className="text-base lg:text-lg">I am young energetic individual who is seeking career opportunities to fulfill my
              career dreams in further. I am a good communicator with proven interpersonal
              skills and I am used to work in a team whilst also being capable of using my own
              initiative. Skilled in dealing with problems in a resourceful manner and always
              eager to learn and undertake new challenges</p>
        <div className='flex flex-row justify-start mt-8'>

        <TabButton
              selectTab={() => handleTabChange("skills")}
              active={tab === "skills"}
            >
              {" "}
              Skills{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("education")}
              active={tab === "education"}
            >
              {" "}
              Education{" "}
            </TabButton>
            <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              {" "}
              Certifications{" "}
            </TabButton>
            </div>
            <div className="mt-8">
            {TAB_DATA.find((t) => t.id === tab).content}
          </div>
        </div>
        </div>
        </section>
  )
}

export default AboutSection