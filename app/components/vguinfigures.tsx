import Image from 'next/image';
import { sans } from '../ui/fonts';
<script src="../path/to/countup.min.js"></script>
export default function VguInFigures() {
  return (
    <div className={`${sans.className} mt-12`}>
      <div className="mb-12">
        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="bg-vgu-orange rounded px-2 text-white">
            In Figures
          </mark>{' '}
        </h1>
      </div>

      <div className="mx-auto grid w-8/12 grid-cols-7 ">
        <div className="h-500 relative col-span-5">
          <Image
            src="/vgulibrary.jpeg"
            alt="VGU Library Image"
            width={750}
            height={750}
          />
        </div>
        <div className="col-span-2 mx-6 flex flex-col justify-between">
          <div>
            <p className="from-vgu-orange to-vgu-yellow bg-gradient-to-r bg-clip-text text-7xl text-transparent">
              1700
            </p>
            <p className="text-xl">approximate number of students</p>
          </div>
          <div>
            <p className="text-vgu-darkblue text-6xl">200</p>
            <p>millions of dollars investment in infrastructure</p>
          </div>
          <div>
            <p className="text-vgu-darkblue text-6xl">71</p>
            <p>technical laboratories</p>
          </div>
          <div>
            <p className="text-vgu-darkblue text-6xl">20</p>
            <p>study programs</p>
          </div>
        </div>
      </div>
    </div>
    
  );
}
