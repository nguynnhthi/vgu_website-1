import Image from 'next/image';
import { sans } from '../ui/fonts';
import React from 'react';

export default function VguInFigures() {
  const VguNumbersData = [
    {
      label: 'Student numbers',
      number: 1700,
      desc: 'Vietnamese - German University is governed by the executive board',
    },
    {
      label: 'Investment in infrastructure',
      number: 200,
      desc: 'millions of dollars investment in infrastructure',
    },
    {
      label: 'Technical laboratories',
      number: 71,
      desc: 'technical laboratories',
    },
    {
      label: 'Study programs',
      number: 20,
      desc: 'study programs',
    },
  ];
  return (
    <div className={`${sans.className}`}>
      <div className="mb-12 ">
        <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="rounded bg-vgu-orange px-2 text-white">
            In Figures
          </mark>{' '}
        </h1>
      </div>

      <div className="mx-auto grid h-auto w-8/12 grid-cols-7 ">
        <div className="relative col-span-5 ">
          <Image
            src="/vgu_library.jpeg"
            alt="VGU Library Image"
            width={1000}
            height={750}
            className="h-auto rounded"
          />
        </div>
        <div className="col-span-2 mx-6 flex flex-col justify-between">
          {VguNumbersData.map((item, index) => (
            <div key={index}>
              <p className="text-6xl font-semibold text-vgu-darkblue">
                {item.number}
              </p>
              <p className="text-xl">{item.desc}</p>
            </div>
          ))}

          {/* <div>
            <p className="text-6xl font-semibold text-vgu-darkblue">1700</p>
            <p className="text-xl">approximate number of students</p>
          </div>
          <div>
            <p className="text-6xl font-semibold text-vgu-darkblue">200</p>
            <p className="text-xl">
              millions of dollars investment in infrastructure
            </p>
          </div>
          <div>
            <p className="text-6xl font-semibold text-vgu-darkblue">71</p>
            <p className="text-xl">technical laboratories</p>
          </div>
          <div>
            <p className=" text-6xl font-semibold text-vgu-darkblue">20</p>
            <p className="text-xl">study programs</p>
          </div> */}
        </div>
      </div>

      <div>
        <Image
          src="/dot.jpg"
          width={100}
          height={100}
          alt="Placeholder image"
          className="card-image mx-auto my-16 block duration-200 hover:scale-105"
        />
      </div>
    </div>
  );
}
