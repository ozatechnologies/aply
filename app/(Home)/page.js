import Link from 'next/link';
import ImgTilt from './ImgTilt';
import { IoIosRocket } from 'react-icons/io';

const LandingPage = () => {
    return (
        <div className="flex flex-col-reverse md:flex-row justify-center items-center px-4 py-8 max-w-screen-xl mx-auto min-h-[calc(100vh-5rem)] gap-10 overflow-hidden text-center md:text-left">
            <div>
                <h4 className="text-lg md:text-xl">
                    <span className="text-gradient">Craft Smarter Resumes — For Free</span>
                </h4>
                <h1 className="text-3xl md:mt-3 md:text-5xl 2xl:text-[2.8rem] leading-tight font-semibold">
                    <span className="text-gradient">Your Resume. Just Smarter.</span>
                </h1>

                <p className="mt-4 max-w-screen-sm text-gray-400 text-sm md:text-base md:mt-10">
                    Aply.ai lets you design an elegant, job-ready resume — no login required.
                    <span className="hidden md:inline">
                        Just fill out your info, export a polished PDF, and start applying. Optimized for ATS systems and modern hiring tools. Tool by Dev Oza and AprmAi
                    </span>
                </p>

                <div className="mt-10 flex flex-col md:flex-row items-center justify-start gap-4">
                    <Link href="/editor" className="btn-filled w-full md:w-auto">
                        <span>Start Building</span>
                        <IoIosRocket />
                    </Link>
                </div>
            </div>

            <div>
                <ImgTilt>
                    <img src="/sample.png" alt="Resume Preview" />
                </ImgTilt>
            </div>
        </div>
    );
};

export default LandingPage;
