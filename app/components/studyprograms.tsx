import Image from 'next/image';
import { sans } from '../ui/fonts';

export default function StudyPrograms() {
  return (
    <div className={`${sans.className} my-12`}>
      <div className="mb-12">
        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
          Explore{' '}
          <mark className="bg-vgu-orange rounded px-2 text-white">
            Our Programs
          </mark>{' '}
        </h1>
      </div>

      {/* ---PROGRAMS LIST--- */}

      <div id="programlist" className="mx-auto grid w-fit grid-cols-3 gap-4 ">
        <div className=" max-w-xs overflow-hidden rounded shadow-lg">
          <Image
            src="/opengraph-image.png"
            width={300}
            height={300}
            alt="Placeholder image"
            className="card-image border-b-vgu-orange block w-full border-b-2"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pb-2 pt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              Learn more
            </span>
          </div>
        </div>
        <div className="max-w-xs overflow-hidden rounded shadow-lg">
          <Image
            src="/opengraph-image.png"
            width={300}
            height={435}
            alt="Placeholder image"
            className="card-image border-b-vgu-orange block w-full border-b-2"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pb-2 pt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              Learn more
            </span>
          </div>
        </div>
        <div className="max-w-xs overflow-hidden rounded shadow-lg">
          <Image
            src="/opengraph-image.png"
            width={300}
            height={435}
            alt="Placeholder image"
            className="card-image border-b-vgu-orange block w-full border-b-2"
          />
          <div className="px-6 py-4">
            <div className="mb-2 text-xl font-bold">The Coldest Sunset</div>
            <p className="text-base text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <div className="px-6 pb-2 pt-4">
            <span className="mb-2 mr-2 inline-block rounded-full bg-gray-200 px-3 py-1 text-sm font-semibold text-gray-700">
              Learn more
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
