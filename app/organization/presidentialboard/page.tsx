import Link from 'next/link';
import Image from 'next/image';

import { sans } from '../../ui/fonts';
export default function Page() {


    const presidentialBoardData = [
        {
            name: "Prof.Dr. René Thiele",
            position: "President",
            imageUrl: "/drRenéThiele.jpg",
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

    return (
        <div className={`${sans.className} my-12`}>
            <div className="mb-12">
                <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                    VGU {' '}
                    <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                        Presidential Board
                    </mark>{' '}
                </h1>
            </div>

            {/* ---PROGRAMS LIST--- */}

            <div className="mx-auto w-8/12">
                <div className="rounded grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
                    {presidentialBoardData.map(({ name, position, imageUrl }) => (
                        <div key={name}>
                            <div className="overflow-hidden rounded shadow-lg duration-200 hover:scale-105 ">
                                <div className="border-b-vgu-orange object-cover  border-b-2 shadow-lg">
                                    <Image
                                        src={`${imageUrl}`}
                                        width={400}
                                        height={200}
                                        alt="Placeholder image"
                                    />

                                </div>
                                <div className="px-6 py-4">
                                    <div className="mb-2 text-2xl font-bold">{name}</div>
                                    <p className="text-base h-12 text-gray-700">
                                        {position}
                                    </p>
                                </div>
                                <div className="px-6 py-6 ">
                                    {/* <Link href={`/organization/${url}`}>
                                        <button className="text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                                            Learn more
                                        </button>
                                    </Link> */}

                                    <button className="text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                                        View Info
                                    </button>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div >
    )
}