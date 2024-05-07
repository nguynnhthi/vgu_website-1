import Image from 'next/image';
import { sans } from '../ui/fonts';
import Link from 'next/link';

export default function Departments() {

    const organizationData = [
        {
            label: "PRESIDENTIAL BOARD",
            content: "Vietnamese - German University is governed by the executive board",
            imageUrl: "/girl1.jpeg",
            url: "presidentialboard"
        },
        {
            label: "FALCUTIES",
            content: "Vietnamese - German University is governed by the executive falcuties",
            imageUrl: "/girl2.jpeg",
            url: "falcuties"
        }, {
            label: "CENTRAL UNITS",
            content: "Vietnamese - German University is governed by the central units",
            imageUrl: "/girl3.jpeg",
            url: "centralunits"
        },
        {
            label: "ADMISSIONS",
            content: "Learn about admissions at Vietnamese - German University.",
            imageUrl: "/girl3.jpeg",
            url: "admission"
        },
        {
            label: "ACADEMICS",
            content: "Explore academic programs at Vietnamese - German University.",
            imageUrl: "/girl1.jpeg",
            url: "academics"
        },
        {
            label: "RESEARCH",
            content: "Discover research opportunities at Vietnamese - German University.",
            imageUrl: "/girl2.jpeg",
            url: "research"
        }

    ];

    return (

        <div className={`${sans.className} my-12`}>
            <div className="mb-12">
                <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                    VGU {' '}
                    <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                        Organization
                    </mark>{' '}
                </h1>
            </div>

            {/* ---PROGRAMS LIST--- */}

            < div className="mx-auto w-8/12">
                <div className="rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                    {organizationData.map(({ label, content, imageUrl, url }) => (
                        <div key={label}>
                            <div className="overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                                <div className="width-full h-auto shadow-lg">
                                    <img
                                        src={imageUrl}
                                        alt="Placeholder image"
                                        className="card-imageblock w-full h-auto border-b-vgu-orange
                                                    border-b-2"
                                    />
                                </div>
                                <div className="px-6 py-4">
                                    <div className="mb-2 text-2xl font-bold">{label}</div>
                                    <p className="text-base text-gray-700">
                                        {content}
                                    </p>
                                </div>
                                <div className="px-6 py-6 ">
                                    <Link href={`/organization/${url}`}>
                                        <button className="text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                                            Learn more
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            </div >
        </div >
    );
}
