import Image from 'next/image';
import { sans } from '../ui/fonts';

export default function VguPartners() {
  return (
    <div className={`${sans.className} m-12`}>
      <div className="mb-12">
        <h1 className="text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
            PARTNERS
          </mark>{' '}
        </h1>
      </div>
      <div
        id="partners-list"
        className="mx-auto grid w-8/12 grid-cols-6 place-items-center gap-6 "
      >
        <div>
          <Image
            src="/Goethe_University_Logo.jpg"
            width={300}
            height={70}
            alt="Placeholder image"
            className="card-image block w-full "
          />
        </div>
        <div>
          <Image
            src="/TUBerlin_Logo.jpg"
            width={90}
            height={70}
            alt="Placeholder image"
            className="card-image block object-contain "
          />
        </div>

        <div>
          <Image
            src="/Furtwangen_University_Logo.jpg"
            width={300}
            height={70}
            alt="Placeholder image"
            className="card-image block w-full "
          />
        </div>
        <div>
          <Image
            src="/Goethe_University_Logo.jpg"
            width={300}
            height={70}
            alt="Placeholder image"
            className="card-image block w-full "
          />
        </div>
        <div>
          <Image
            src="/TUBerlin_Logo.jpg"
            width={90}
            height={70}
            alt="Placeholder image"
            className="card-image block object-contain "
          />
        </div>

        <div>
          <Image
            src="/Furtwangen_University_Logo.jpg"
            width={300}
            height={70}
            alt="Placeholder image"
            className="card-image block w-full "
          />
        </div>
      </div>
    </div>
  );
}
