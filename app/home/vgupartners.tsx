import Image from 'next/image';
import { sans } from '../ui/fonts';



export default function VguPartners() {
  return (
    <div className={`${sans.className} m-12`}>
      <div className="mb-12">
        <h1 className="text-center text-4xl font-extrabold uppercase leading-none tracking-tight text-vgu-orange md:text-5xl lg:text-6xl">
          VGU{' '}
          <mark className="rounded bg-vgu-orange px-2 py-0 text-white">
            PARTNERS
          </mark>{' '}
        </h1>
      </div>
      {/* <div
        id="partners-list"
        className="mx-auto grid w-8/12 grid-cols-6 place-items-center gap-4 "
      >
        <div>
          <Image
            src="/Goethe_University_Logo.jpg"
            width={150}
            height={100}
            alt="Placeholder image"
            className="card-image block w-full "
          />
        </div>
        <div>
          <Image
            src="/tu.jpg"
            width={150}
            height={100}
            alt="Placeholder image"
            className="card-image w-full block "
          />
        </div>

        <div>
          <Image
            src="/Furtwangen_University_Logo.jpg"
            width={150}
            height={100}
            alt="Placeholder image"
            className="card-image block w-full "
          />
        </div>
        <div>
          <Image
            src="/leipzig.jpg"
            width={150}
            height={100}
            alt="Placeholder image"
            className="card-image block w-full "
          />
        </div>
        <div>
          <Image
            src="/heilbronn.jpg"
            width={150}
            height={100}
            alt="Placeholder image"
            className="card-image w-full block"
          />
        </div>

        <div>
          <Image
            src="/rub.jpg"
            width={150}
            height={100}
            alt="Placeholder image"
            className="card-image block w-full "
          />
        </div>
      </div> */}

      {/* Test  */}
      <div
        x-data="{}"
        x-init="$nextTick(() => {
            let ul = $refs.logos;
            ul.insertAdjacentHTML('afterend', ul.outerHTML);
            ul.nextSibling.setAttribute('aria-hidden', 'true');
        })"
        className="inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]"
      >
        <ul
          x-ref="logos"
          className="flex animate-infinite-scroll items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
        >
          <li>
            <img src="./frankfurt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img src="./frankfurt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img src="./frankfurt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img src="./frankfurt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img src="./frankfurt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img src="./frankfurt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img src="./frankfurt.jpg" alt="frankfurt" />
          </li>
          <li>
            <img src="./frankfurt.jpg" alt="frankfurt" />
          </li>
        </ul>
      </div>
    </div>
  );
}
