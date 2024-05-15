import Header from "@/app/components/header"
import Image from 'next/image';
export default function Page() {
    return (
        <main>
            <Header />
            <div>
                <div className="relative max-w-full mb-8">
                    <img
                        src="/mechanical_engineering.jpg"
                        className="w-full h-auto brightness-50 filter"
                        alt="VGU Campus Image"
                    />


                    <div className="absolute inset-0 flex items-center justify-center w-full h-full text-center">
                        <h1 className=" mb-8 text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                            Mechanical{' '}
                            <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                                Engineering
                            </mark>{' '}
                        </h1>
                    </div>
                </div>
            </div>
        </main>
    )
}