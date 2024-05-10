"use client"
import Image from 'next/image';
import { sans } from '../ui/fonts';
import React from "react";
import {
    Button,
    Dialog,
    DialogHeader,
    DialogBody,
    DialogFooter,
} from "@material-tailwind/react";


export default function Test() {
    const presidentialBoardData = [
        {
            name: "Prof.Dr. René Thiele",
            position: "President",
            imageUrl: "/drRenéThiele.jpg",
            bio: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius soluta optio laudantium? Deleniti, sint ratione quis ullam nam unde ipsa, expedita iure quasi minus, quas commodi cumque quod mollitia incidunt?"
        },

        {
            name: "DR. HA THUC VIEN",
            position: "Vice President for Academic and Student Affairs",
            imageUrl: "/drhathucvien.jpg",
        },
        {
            name: "DR. THOMAS G. AULIG",
            position: "Vice President",
            imageUrl: "/drthomas.jpg",
        },

    ];
    const [size, setSize] = React.useState(null);

    const handleOpen = (value: any) => setSize(value);

    return (
        <div className={`${sans.className} my-12`}>

            <div className="uppercase">
                <Button onClick={() => handleOpen("lg")} variant="gradient">
                    View Info
                </Button>

            </div>


            <Dialog
                open={size === "lg"}
                size={size || "lg"}
                handler={handleOpen}
            >
                {/* <DialogHeader>Its a simple dialog.</DialogHeader> */}

                <DialogBody>
                    <div className='grid grid-flow-row-dense grid-cols-8 gap-8 m-4'>
                        <div className='col-span-3'>
                            <Image
                                className='rounded'
                                src="/drhathucvien.jpg"
                                width={400}
                                height={200}
                                alt="Placeholder image"
                            />
                            <div className="px-4 py-4">
                                <div className="mb-2 text-vgu-darkblue uppercase text-3xl font-bold">Dr. Ha Thuc Vien</div>
                                <p className="text-base h-12 text-vgu-darkblue">
                                    Vice President for Academic and Student Affairs
                                </p>
                                <hr className="h-px my-4 bg-vgu-darkblue border-0"></hr>

                                <div className="flex flex-col text-vgu-darkblue">
                                    <p>Email: vien.ht@vgu.edu.vn</p>
                                    <p>Tel: +84 (0)274 222 0990 (ext: 70113)</p>
                                    {/* <p className="text-gray-400">Ext: 70158</p> */}
                                </div>
                            </div>
                        </div>


                        <div className='col-span-5'>
                            <div className='mb-4'>
                                <p>  Ambitious and results-driven academic professional with broad-based expertise in leading teams, establishing departments and strengthening organizations. Committed to excellence in business operations.</p>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-vgu-orange uppercase text-2xl font-bold' >Academic Achievements</h1>
                                <p>
                                    - Ph.D in Resource Economics from Humboldt University, Germany, 2007. <br />
                                    - MA in Sustainable Development from Chiang Mai University, Thai Lan, 2003. <br />
                                    - BSc in Land Management from University of Agriculture and Forestry, Ho Chi Minh City, Vietnam, 1996
                                </p>
                            </div>
                            <div className='mb-4'>
                                <h1 className='text-vgu-orange uppercase text-2xl font-bold' >Academic Achievements</h1>
                                <p>
                                    Dr. Ha Thuc Vien is the Acting President of the Vietnamese German University. He is also Vice President in charge of Academic Affairs cum Director of the VGU's Management Unit (VMU, an designated unit to manage the VGU New Campus construction under the USD 200 million World Bank loaned project).
                                    <br />
                                    <br />
                                    Before joining VGU in 2012, Dr. Vien was the Head of Natural Resources and Tourism Department and also the founder and Director of Center for International Education of Ho Chi Minh City University of Agriculture and Forestry. His earlier career includes a senior lecturer in Resource and Land Economics, Resource Management, Land Use and Project Management. He has published a number of books, book chapters and articles in his specialized fields.
                                </p>
                            </div>
                        </div>
                    </div>
                </DialogBody>


                {/* <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={() => handleOpen(null)}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button
                            variant="gradient"
                            color="green"
                            onClick={() => handleOpen(null)}
                        >
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter> */}
            </Dialog>


        </div >
    );
}
