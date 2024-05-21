'use client';
import { sans } from '../ui/fonts';
import React from 'react';
import Link from 'next/link';
import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from '@material-tailwind/react';

export default function ProgramTabs() {
  const [activeTab, setActiveTab] = React.useState('html');

  const bachelorProgramsData = [
    {
      label: 'Computer Science',
      content: 'Explore our undergraduate major in Computer Science.',
      imageUrl: '/girl1.jpeg',
      url: 'computer_science',
    },
    {
      label: 'Electrical Engineering',
      content: 'Explore our undergraduate major in Electrical Engineering.',
      imageUrl: '/girl2.jpeg',
      url: 'electrical_engineering',
    },
    {
      label: 'Mechanical Engineering',
      content: 'Explore our undergraduate major in Mechanical Engineering.',
      imageUrl: '/girl3.jpeg',
      url: 'mechanical_engineering',
    },
  ];

  const masterProgramsData = [
    {
      label: 'Data Science',
      content: "Explore our master's program in Data Science.",
      imageUrl: '/girl3.jpeg',
    },
    {
      label: 'Software Engineering',
      content: "Explore our master's program in Software Engineering.",
      imageUrl: '/girl1.jpeg',
    },
    {
      label: 'Civil Engineering',
      content: "Explore our master's program in Civil Engineering.",
      imageUrl: '/girl2.jpeg',
    },
  ];

  return (
    <div className={`${sans.className}`}>
      <div className="mx-auto w-8/12">
        <Tabs value="bachelor">
          <TabsHeader
            className="mx-auto my-6 w-9/12 p-4 text-vgu-darkblue"
            indicatorProps={{
              className: '',
            }}
          >
            <Tab
              value="bachelor"
              activeClassName="text-vgu-orange"
              onClick={() => setActiveTab('bachelor')}
              className={activeTab === 'bachelor' ? 'text-vgu-orange' : ''}
            >
              <p className="py-2 text-center text-3xl font-extrabold uppercase leading-none tracking-tight">
                Bachelor Programs
              </p>
            </Tab>

            <Tab
              value="master"
              onClick={() => setActiveTab('master')}
              className={activeTab === 'master' ? 'text-vgu-orange' : ''}
            >
              <p className="py-2 text-center text-3xl font-extrabold uppercase leading-none tracking-tight">
                Master Programs
              </p>
            </Tab>
          </TabsHeader>

          <TabsBody>
            <TabPanel value="bachelor">
              <div className=" grid grid-cols-1 gap-6  md:grid-cols-2 lg:grid-cols-3">
                {bachelorProgramsData.map(
                  ({ label, content, imageUrl, url }) => (
                    <div key={label}>
                      <div className="max-w-xs overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                        <div className="width-full h-auto">
                          <img
                            src={imageUrl}
                            alt="Placeholder image"
                            className="card-imageblock border-b-2
                                                    border-b-vgu-orange"
                          />
                        </div>
                        <div className="px-6 py-4">
                          <div className="mb-2 text-xl font-bold">{label}</div>
                          <p className="text-base text-gray-700">{content}</p>
                        </div>
                        <div className="px-6 py-6 ">
                          <Link href={`/studyprograms/${url}`}>
                            <button className="inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue ">
                              Learn more
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ),
                )}
              </div>
              <div id="viewAllBtn">
                <button className=" mx-auto mt-10 block w-auto rounded-full bg-white px-5 py-2 text-xl font-extrabold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue ">
                  View all programs
                </button>
              </div>
            </TabPanel>

            <TabPanel value="master">
              <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
                {masterProgramsData.map(({ label, content, imageUrl }) => (
                  <div key={label}>
                    <div className="max-w-xs overflow-hidden rounded shadow-lg duration-200 hover:scale-105">
                      <div className="width-full h-auto overflow-hidden">
                        <img
                          src={imageUrl}
                          alt="Placeholder image"
                          className="card-image block w-full border-b-2
                                                    border-b-vgu-orange"
                        />
                      </div>
                      <div className="px-6 py-4">
                        <div className="text-xxl mb-2 font-bold">{label}</div>
                        <p className="text-base text-gray-700">{content}</p>
                      </div>
                      <div className="px-6 py-6 ">
                        <span className="inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue ">
                          Learn more
                        </span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div id="viewAllBtn">
                <button className=" mx-auto mt-10 block w-auto rounded-full bg-white px-5 py-2 text-xl font-extrabold uppercase text-vgu-darkblue outline outline-1 duration-300 hover:bg-vgu-darkblue hover:text-white hover:outline-vgu-darkblue ">
                  View all programs
                </button>
              </div>
            </TabPanel>
          </TabsBody>
        </Tabs>
      </div>
    </div>
  );
}
