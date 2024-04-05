import Image from 'next/image';
import { sans } from '../ui/fonts';

export default function VguToday() {
  return (
    <div className={`${sans.className} m-12`}>
      <div className="mb-12">
        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
            TODAY
          </mark>{' '}
        </h1>
      </div>

      {/* ---Upcoming events--- */}
      <div
        id="Upcoming-events"
        className=" mx-auto mb-12 w-8/12 rounded border p-10
        drop-shadow-lg"
      >
        <h1 className="text-vgu-darkblue mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight md:text-3xl lg:text-4xl">
          Upcoming Events
        </h1>

        <div className="mx-auto grid grid-cols-3 gap-6 ">
          <div className=" max-w-xs overflow-hidden rounded shadow-lg">
            <div className="max-h-[300px] max-w-[300px] overflow-hidden">
              <Image
                src="/girl1.jpeg"
                width={300}
                height={300}
                alt="Placeholder image"
                className="card-image block w-full  duration-200 hover:scale-105"
              />
            </div>

            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">Event 1</div>
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
            <div className="max-h-[300px] max-w-[300px] overflow-hidden">
              <Image
                src="/girl2.jpeg"
                width={300}
                height={300}
                alt="Placeholder image"
                className="card-image block w-full  duration-200 hover:scale-105"
              />
            </div>

            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">Event 2</div>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>

            <div className="px-6 py-6 ">
              <span className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                Learn more
              </span>
            </div>
          </div>
          <div className="max-w-xs overflow-hidden rounded shadow-lg">
            <div className="max-h-[300px] max-w-[300px] overflow-hidden">
              <Image
                src="/girl3.jpeg"
                width={300}
                height={300}
                alt="Placeholder image"
                className="card-image block w-full  duration-200 hover:scale-105"
              />
            </div>

            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">Event 3</div>
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

      {/* ---VGU News--- */}
      <div
        id="Upcoming-events"
        className="d mx-auto w-8/12 rounded
        drop-shadow-lg"
      >
        <h1 className="text-vgu-darkblue mb-4 text-4xl font-extrabold uppercase leading-none tracking-tight md:text-3xl lg:text-4xl">
          VGU News
        </h1>

        <div className="mx-auto grid grid-cols-3 gap-6 ">
          <div className=" max-w-xs overflow-hidden rounded shadow-lg">
            <Image
              src="/girl1.jpeg"
              width={300}
              height={435}
              alt="Placeholder image"
              className="card-image border-b-vgu-orange block w-full border-b-2"
            />

            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">Bachelor Program</div>
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
              <div className="mb-2 text-2xl font-bold">Master Program</div>
              <p className="text-base text-gray-700">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Voluptatibus quia, nulla! Maiores et perferendis eaque,
                exercitationem praesentium nihil.
              </p>
            </div>

            <div className="px-6 py-6 ">
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
              <div className="mb-2 text-2xl font-bold">Exchange Program</div>
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
    </div>
  );
}
