import Image from 'next/image';
import { sans } from '../ui/fonts';
import Link from 'next/link';

const studyProgramsData = [
  {
    label: "Bachelor Programs",
    content: "Explore our bachelor programs.",
    imageUrl: "/girl1.jpeg"
  },
  {
    label: "Master Programs",
    content: "Explore our master programs.",
    imageUrl: "/girl2.jpeg"
  },
  {
    label: "Exchange Programs",
    content: "Explore our exchange programs.",
    imageUrl: "/girl3.jpeg"
  },
];

export default function StudyPrograms() {
  return (
    <div className={`${sans.className} mt-12`}>
      <div className="mb-12">
        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
          Explore{' '}
          <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
            Our Program
          </mark>{' '}
        </h1>
      </div>

      {/* ---PROGRAMS LIST--- */}

      <div id="programlist" className="mx-auto grid w-8/12 grid-cols-3 gap-6 ">
        {studyProgramsData.map(({ label, content, imageUrl }) => (
          <div className=" max-w-xs overflow-hidden duration-200 hover:scale-105 rounded shadow-lg">
            <Image
              src={`${imageUrl}`}
              width={300}
              height={300}
              alt="Placeholder image"
              className="card-image border-b-vgu-orange block w-full border-b-2"
            />
            <div className="px-6 py-4">
              <div className="mb-2 text-2xl font-bold">{label}</div>
              <p className="text-base text-gray-700">
                {content}
              </p>
            </div>
            <div className="p-6">

              <Link href={`/studyprograms`}>
                <button className=" text-vgu-darkblue hover:outline-vgu-darkblue hover:bg-vgu-darkblue inline-block rounded-full bg-white px-3 py-2 text-sm font-semibold uppercase outline outline-1 duration-300 hover:text-white ">
                  Learn more
                </button>
              </Link>

            </div>
          </div>
        ))}

      </div>
      <div>
        <Image
          src="/dot.jpg"
          width={100}
          height={100}
          alt="Placeholder image"
          className="card-image my-16 mx-auto block duration-200 hover:scale-105"
        />
      </div>

    </div>
  );
}
