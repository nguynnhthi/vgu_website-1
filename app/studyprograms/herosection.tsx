import { sans } from '../ui/fonts';
export default function HeroSection() {
    return (

        <div className={`${sans.className}`}>
            <div className="relative max-w-full mb-8">
                <img
                    src="/students.jpg"
                    className="w-full h-full brightness-75 filter"
                    alt="VGU Campus Image"
                />

                {/* <video src="https://www.youtube.com/watch?v=aKexZlnITqg"></video> */}
                <div className=" w-1/2 absolute inset-0 py-16 text-center mx-auto my-auto h-auto">
                    <h1 className=" mb-8 text-vgu-orange text-center text-4xl font-extrabold uppercase leading-none tracking-tight md:text-5xl lg:text-6xl">
                        EXPLORE{' '}
                        <mark className="bg-vgu-orange rounded px-2 py-0 text-white">
                            VGU PROGRAMS
                        </mark>{' '}
                    </h1>
                    <div>
                        <p className='text-white'>
                            Choose from a range of majors and programs that will have you career-ready from day one.

                        </p>
                        <p className='text-white'> There is a reason VGU graduates stand out from the crowd.</p>
                    </div>
                </div>
            </div>
            {/* Search bar */}

            {/* <div className='mb-20'>
                <form className=" bg-vgu-darkblue py-2 mx-auto rounded-lg border flex flex-row w-7/12 justify-around">
                    <label htmlFor="countries" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Select an option</label>

                    <div className='basis-1/4 '>
                        <select id="countries" name='countries' required className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option value="" disabled selected hidden>Choose a falcuty</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className='basis-1/4'>
                        <select id="countries" name='countries' required className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option value="" disabled selected hidden>Choose program level</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                    <div className='basis-1/4'>
                        <select id="countries" name='countries' required className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ">
                            <option value="" disabled selected hidden>Search programs</option>
                            <option value="US">United States</option>
                            <option value="CA">Canada</option>
                            <option value="FR">France</option>
                            <option value="DE">Germany</option>
                        </select>
                    </div>
                </form>
            </div> */}
        </div>
    );
}
