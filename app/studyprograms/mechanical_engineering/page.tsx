import Header from "@/app/components/header"
import Footer from "@/app/components/footer"
import Image from 'next/image';
export default function Page() {
    return (
        <main>
            <Header />
            <div className="w-full h-auto">
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

                <div className='grid w-9/12 border-2 p-6 rounded mx-auto grid-flow-row-dense grid-cols-8 gap-8 m-4'>
                    <div className='col-span-3'>
                        <div id="quote">
                            <p className="text-vgu-orange">“Scientists dream about doing great things. Engineers do them.”</p>
                            <p className="text-vgu-darkblue">- James A. Michéner, US Author</p>

                        </div>
                        <hr className="my-6" />
                        {/* <Image
                            className='rounded'
                            src="/drhathucvien.jpg"
                            width={350}
                            height={200}
                            alt="Placeholder image"
                        /> */}

                        <div id="accreditation">
                            <h1 className="text-vgu-orange text-2xl font-bold">Accreditation</h1>
                            <p className="text-vgu-darkblue">The Mechanical Engineering program is accredited by German accreditation agency ACQUIN. The award of the ACQUIN quality seal is valid until 30/09/2028.</p>
                            <hr className="mt-6" />
                        </div>



                        <div id="contact">

                            {/* <hr className="h-px my-4 bg-vgu-darkblue border-0"></hr> */}
                            <h1 className="text-vgu-orange text-2xl font-bold">Contact</h1>
                            <div className="flex flex-col text-vgu-darkblue">
                                <p>Admission hotline: 0988 54 52 54</p> <br />
                                <p>Telephone number: 0274-222 0990 <p>(Dial Extension 70154)</p> </p> <br />
                                <p>Gmail: study@vgu.edu.vn</p><br />
                                <p>Consulting hours: 8:30 - 16:00</p>
                                {/* <p className="text-gray-400">Ext: 70158</p> */}
                            </div>
                        </div>
                    </div>


                    <div className='col-span-5'>
                        <div id="about">
                            <h1 className='text-vgu-orange uppercase text-2xl font-bold mb-2' >ABOUT THE MECHANICAL ENGINEERING (MEN) PROGRAM</h1>
                            <p>
                                - The Bachelor Program in Mechanical Engineering (MEN) at VGU is a fulltime program consisting of seven semesters (three and a half years) excluding a foundation semester (or 1/2 academic year).  The program consists of a combination of fundamentals of natural sciences and mathematics with mechanical engineering basics. Students can choose between two majors "Engineering Design and Automation" or "Energy and Process Engineering". The program provides students with expert skills and knowledge needed for a career in industry as well as a broad and solid academic foundation for the continuation of their studies in post-graduate programs.<br /> <br />
                                - The language of teaching, learning and assessment is English. <br /> <br />
                                - After completion, the graduates will be awarded double degrees (Bachelor of Science degree) in Mechanical Engineering conferred by both Ruhr-University Bochum (RUB), Germany and VGU, Vietnam.
                            </p>
                        </div>

                        <hr className="my-6" />

                        <div>
                            <h1 className='text-vgu-orange uppercase text-2xl font-bold mb-2' >PARTNER UNIVERSITY IN GERMANY</h1>
                            <Image
                                className='rounded'
                                src="/rub.jpg"
                                width={300}
                                height={200}
                                alt="Placeholder image"
                            />
                            <p>
                                - Ruhr-University Bochum is the partner university for the Mechanical Engineering program at VGU. Ruhr-University is located at the heart of the Ruhr area, once famous for its coal mining industry.
                                <br />
                                <br />
                                - Since its foundation in 1962 and operation in 1965 it has developed under the guiding principle "universitas" and the motto "human, open to the world, accomplished" to one of the five largest Universities in Germany, being the academic home of more than 42,000 students currently. Its focus on international collaboration has resulted in over 15 dual degree study programs and nearly 6,000 international students participating in everyday education.
                            </p>
                        </div>

                        <hr className="my-6" />
                        <div>
                            <h1 className='text-vgu-orange uppercase text-2xl font-bold mb-2' >SCHOLARSHIPS AND STUDENT EXCHANGE PROGRAM</h1>
                            {/* <Image
                                className='rounded'
                                src="/rub.jpg"
                                width={300}
                                height={200}
                                alt="Placeholder image"
                            /> */}
                            <p>
                                - All students are eligible to study and conduct their graduation thesis at RUB in the 7th (or last) semester with the support of DAAD scholarships or other scholarships or by self-finances.
                                <br />
                                <br />
                                - In both cases, either choosing to stay at VGU or going to RUB/VGU for studying and doing thesis in the 7th (or last) semester, students are eligible to be awarded with double degrees: Bachelor of Science (BSc) Degree conferred by both by RUB and VGU.
                            </p>
                        </div>

                        <hr className="my-6" />

                        <div>
                            <h1 className='text-vgu-orange uppercase text-2xl font-bold mb-2' >MESSAGE FROM THE ACADEMIC DIRECTOR</h1>
                            <Image
                                className='rounded mb-4'
                                src="/RolandSpan_me.jpeg"
                                width={300}
                                height={200}
                                alt="Placeholder image"
                            />
                            <p>
                                "An outstanding Bachelor degree in Mechanical Engineering opens doors worldwide in industry and academia. RUB educates students at VGU to become highly qualified Engineers with internationally recognized education standard. Personally, it is a pleasure for me to teach at VGU, seeing highly motivated students revealing their talents and gaining expertise at fast pace in an environment with high standards both in education and research."
                            </p>
                            <br />
                            <p className="italic">
                                Prof. Dr.-Ing. Roland Span, <br />
                                Chair of Thermodynamics, Ruhr-University Bochum (RUB), <br />
                                Academic Director of the program
                            </p>
                        </div>

                    </div>
                </div>

            </div>
            <Footer />
        </main>
    )
}