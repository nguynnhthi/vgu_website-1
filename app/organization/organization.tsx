import Image from 'next/image';
import { sans } from '../ui/fonts';

export default function Organization() {
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

            <div id="programlist" className="mx-auto grid w-8/12 grid-cols-3 gap-6 ">
                <div className=" max-w-xs overflow-hidden rounded shadow-lg pb-4">
                    <Image
                        src="/girl1.jpeg"
                        width={300}
                        height={300}
                        alt="Placeholder image"
                        className="card-image border-b-vgu-orange block w-full border-b-2"
                    />
                    <div className="px-6 py-4">
                        <div className="mb-2 text-2xl font-bold uppercase">Excutive Board</div>
                        <p className="text-base text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus quia, nulla! Maiores et perferendis eaque,
                            exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pb-2 pt-4">
                        <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                            Learn more
                        </span>
                    </div>
                </div>
                <div className="max-w-xs overflow-hidden rounded shadow-lg">
                    <Image
                        src="/girl2.jpeg"
                        width={300}
                        height={435}
                        alt="Placeholder image"
                        className="card-image border-b-vgu-orange block w-full border-b-2"
                    />
                    <div className="px-6 py-4">
                        <div className="mb-2 text-2xl font-bold uppercase">Falcuties</div>
                        <p className="text-base text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus quia, nulla! Maiores et perferendis eaque,
                            exercitationem praesentium nihil.
                        </p>
                    </div>

                    <div className="px-6 pb-2 pt-4">
                        <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                            Learn more
                        </span>
                    </div>
                </div>
                <div className="max-w-xs overflow-hidden rounded shadow-lg">
                    <Image
                        src="/girl3.jpeg"
                        width={300}
                        height={435}
                        alt="Placeholder image"
                        className="card-image border-b-vgu-orange block w-full border-b-2"
                    />
                    <div className="px-6 py-4">
                        <div className="mb-2 text-2xl font-bold uppercase">Central Units</div>
                        <p className="text-base text-gray-700">
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Voluptatibus quia, nulla! Maiores et perferendis eaque,
                            exercitationem praesentium nihil.
                        </p>
                    </div>
                    <div className="px-6 pb-2 pt-4">
                        <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                            Learn more
                        </span>
                    </div>
                </div>

            </div>
        </div>
    );
}
