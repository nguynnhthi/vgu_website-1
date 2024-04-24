"use client"
import React from "react";
import { sans } from '../ui/fonts';
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
} from "@material-tailwind/react";

import {
    Card,
    CardHeader,
    CardBody,
    CardFooter,
    Typography,
    Button,
} from "@material-tailwind/react";


export default function Test() {
    const [activeTab, setActiveTab] = React.useState("html");


    const bachelorProgramsData = [
        {
            label: "Computer Science",
            content: "Explore our undergraduate major in Computer Science.",
            imageUrl: "/girl1.jpeg"
        },
        {
            label: "Electrical Engineering",
            content: "Explore our undergraduate major in Electrical Engineering.",
            imageUrl: "/girl2.jpeg"
        },
        {
            label: "Mechanical Engineering",
            content: "Explore our undergraduate major in Mechanical Engineering.",
            imageUrl: "/girl3.jpeg"
        },
    ];

    const masterProgramsData = [
        {
            label: "Data Science",
            content: "Explore our master's program in Data Science.",
            imageUrl: "/girl3.jpeg"
        },
        {
            label: "Software Engineering",
            content: "Explore our master's program in Software Engineering.",
            imageUrl: "/girl1.jpeg"
        },
        {
            label: "Civil Engineering",
            content: "Explore our master's program in Civil Engineering.",
            imageUrl: "/girl2.jpeg"
        },
    ];

    return (
        <div className={`${sans.className}`}>
            <div className='w-8/12 mx-auto'>
                <Tabs value={activeTab}>
                    <TabsHeader className='p-4 text-vgu-darkblue mb-6 mx-auto w-8/12'
                        indicatorProps={{
                            className: "",
                        }} >
                        <Tab value="bachelor"
                            onClick={() => setActiveTab("bachelor")}
                            className={activeTab === "bachelor" ? "text-vgu-orange" : ""}>
                            <p className="text-center text-3xl py-2 font-extrabold uppercase leading-none tracking-tight">
                                Bachelor Programs
                            </p>
                        </Tab>

                        <Tab value="master"
                            onClick={() => setActiveTab("master")}
                            className={activeTab === "master" ? "text-vgu-orange" : ""}>
                            <p className="text-center text-3xl py-2 font-extrabold uppercase leading-none tracking-tight">
                                Master Programs
                            </p>
                        </Tab>
                    </TabsHeader>

                    <TabsBody>
                        <TabPanel value="bachelor">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {bachelorProgramsData.map(({ label, content, imageUrl }) => (
                                    <div key={label}>
                                        <Card className="mt-6">
                                            <CardHeader className="relative h-auto">
                                                <img
                                                    src={imageUrl}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </CardHeader>
                                            <CardBody>
                                                <Typography variant="h5" className="mb-2">
                                                    {label}
                                                </Typography>
                                                <Typography>
                                                    {content}
                                                </Typography>
                                            </CardBody>
                                            <CardFooter>
                                                <Button>Read More</Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                            <div className="mt-4 flex justify-center">
                                <Button color="blue">View All</Button>
                            </div>
                        </TabPanel>
                        <TabPanel value="master">
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {masterProgramsData.map(({ label, content, imageUrl }) => (
                                    <div key={label}>
                                        <Card className="mt-6">
                                            <CardHeader color="blue-gray" className="relative h-auto">
                                                <img
                                                    src={imageUrl}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </CardHeader>
                                            <CardBody>
                                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                                    {label}
                                                </Typography>
                                                <Typography>
                                                    {content}
                                                </Typography>
                                            </CardBody>
                                            <CardFooter className="pt-0">
                                                <Button>Read More</Button>
                                            </CardFooter>
                                        </Card>
                                    </div>
                                ))}
                            </div>
                        </TabPanel>
                        <button
                            className="flex items-center gap-2 px-6 py-3 font-sans text-xs font-bold text-center text-gray-900 uppercase align-middle transition-all rounded-lg select-none disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none hover:bg-gray-900/10 active:bg-gray-900/20"
                            type="button">
                            Read More
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor"
                                className="w-5 h-5">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                            </svg>
                        </button>
                    </TabsBody>
                </Tabs>
            </div>
        </div>
    );
}