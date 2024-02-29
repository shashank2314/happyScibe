import React from 'react'
import FrenchFlag from "../assets/flags/fr-dc20a69849a95e87ec9599159b2e1fd869829dff95daea316c170704f56633a6.png"
import UsFlag from "../assets/flags/us-7a83f12ed37df188b41b4dfb10091c9edadd76cc3f19b7a2796c316ecdd07948.png"
import Image from 'next/image'
import { FaArrowRightLong } from "react-icons/fa6";
import GetStartedButton from './GetStartedButton';
import LeaderSpring from "../assets/landing/g2-leader-award-a392a31dcceba7fa195d3c4919e3fe1ce2c9ec91ee08ccd4b0a6c553a4f6f0b8.svg"
import MomentumSpring from "../assets/landing/g2-momentum-leader-award-5e76b21f9f89b72e7c4f247221e7515bc47f71029cb06ddc2c3a01a602c5153f.svg"
import Im1 from "../assets/landing/old-land-bbc-6b1e59873fb75c4e0cd505eaa30fcfd3351886fd77179b3e143ae228b2f915d5.jpg";
import Im2 from "../assets/landing/old-land-forbes-a7ae62204e31b21cd8ead7daa40af2dff52409b7e39d2b5c79d932caa0089a6f.jpg";
import Im3 from "../assets/landing/old-land-spotify-a929554d8f0cad3183f474f63270668b3555c62b57b24511e7233df74569b5ff.jpg";
import Im4 from "../assets/landing/old-land-un-475db3a160081b9c795da6fd78c8acd4537561c3792f330a84d2b5b102e6a6ca.jpg";
import Im5 from "../assets/landing/old-land-dpa-2b757cd31b1573cd1ba0fcf18e7e8d8b1f393c3b3be8e2a6563da42b14ad73be.jpg";
import { FaStar } from "react-icons/fa"
import ReactStars from "react-rating-stars-component"
import { RiStarHalfFill } from "react-icons/ri";
import banner from "../assets/landing/illustrations/image.png"
import translationImage from "../assets/landing/illustrations/translation-9753ee6e25411d0adaa66761caa172b7995feb9b13a2e82d1f88f7f1815d5f63.jpg"
import limitImage from "../assets/landing/illustrations/limit-6fa4b76700d9fee7d302fc1704fc0de47e34986f182e3e5bfda4c7ee0a8b83d4.jpg"
import formatImage from "../assets/landing/illustrations/format-bc5c965b17d4dab28098b973fc992a0755fd6ee6a63ee7eb199604bb1d970346.jpg"
import Link from 'next/link';

const Hero = () => {
    return (
        <div className='flex flex-col items-center gap-8 py-20 px-2'>
            <div className='flex gap-3 items-center justify-center'>
                <Image src={FrenchFlag} alt="French Flag" width={70} height={70} className='rounded-md' />
                <FaArrowRightLong className='text-black text-3xl' />
                <Image src={UsFlag} alt="US Flag" width={70} height={70} className='rounded-md' />
            </div>
            <div className='md:w-[600px] w-full px-10 flex flex-col items-center gap-10'>
                <h1 className='font-bold text-black text-4xl text-center'>French video with English subtitles</h1>
                <p className="text-gray-700 text-center">Want your videos to reach a wider audience who speaks English? This
                    service is ideal for your audiovisual content - from online videos, television shows, films,
                    documentaries, marketing content and more!</p>
                <GetStartedButton />
                <div className='flex'>
                    <Image src={LeaderSpring} alt="LeaderSpring Image" />
                    <Image src={MomentumSpring} alt='Momentum Spring Image' />
                </div>
                <div className='flex flex-col items-center'>
                    <div className='text-3xl flex text-[#ffd700]'>
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <FaStar />
                        <RiStarHalfFill className='text-[2rem]' />
                    </div>
                    <div className="text-xl text-gray-600">Rated <b>4.8/5</b> based on 850+ reviews</div>
                </div>
                <div>
                    <span className="text-xl text-gray-600">Trusted by 100,000+ users and teams of all sizes.</span>
                </div>
            </div>
            <div className='flex flex-wrap justify-center items-center bg-inherit gap-5'>
                <Image src={Im1} alt='Im1' width={100} />
                <Image src={Im2} alt='Im1' width={100} />
                <Image src={Im3} alt='Im1' width={100} />
                <Image src={Im4} alt='Im1' width={100} />
                <Image src={Im5} alt='Im1' width={100} />
            </div>


            <div className="flex flex-col gap-8 items-center">
                <h2 className="font-bold text-center text-2xl ">How does it work?</h2>
                <div className='flex flex-wrap items-center justify-center gap-10'>
                    <div className="flex flex-col items-start bg-white border-2 border-gray-200 rounded-md w-[360px] gap-4 p-10 text-xl h-[200px]">
                        <div className='flex items-center gap-2'>
                            <span className='bg-red-400 px-[10px] py-[2px] rounded-md text-white font-bold'>1</span>
                            <strong className='text-gray-800'>Upload.</strong>
                        </div>
                        <p className='text-gray-600 text-[1rem] font-[5px]'> Upload your French
                            videos, your URLs, or pull from
                            Youtube, Vimeo, Drive, and more.</p>
                    </div>
                    <div className="flex flex-col items-start bg-white border-2 border-gray-200 rounded-md w-[360px] gap-4 p-10 text-xl h-[200px]">
                        <div className='flex items-center gap-2'>
                            <span className='bg-blue-700 px-[10px] py-[2px] rounded-md text-white font-bold'>2</span>
                            <strong className='text-gray-800'>Create &amp; Translate.</strong>
                        </div>
                        <p className='text-gray-600 text-[1rem] font-[5px]'> A
                            subtitler will create the original (French) subtitles. A English subtitle translator will
                            translate the subtitles.</p>
                    </div>
                    <div className="flex flex-col items-start bg-white border-2 border-gray-200 rounded-md w-[360px] gap-4 p-10 text-xl h-[200px]">
                        <div className='flex items-center gap-2'>
                            <span className='bg-blue-500 px-[10px] py-[2px] rounded-md text-white font-bold'>3</span>
                            <strong className='text-gray-800'>Download.</strong>
                        </div>
                        <p className='text-gray-600 text-[1rem] font-[5px]'> Your file will appear
                            on your dashboard with the perfect English subtitles.</p>
                    </div>
                </div>

            </div>
            <div className="flex flex-col gap-8 items-center w-full">
                <h2 className="font-bold text-center text-2xl">Features</h2>
                <div className='w-[80%] md:w-[60%]'>
                    <Image src={banner} alt="banner" className='w-full' />
                </div>
            </div>
            <div className='w-full flex flex-col items-center p-10 md:p-20 gap-16'>
                <div className="flex gap-16 flex-col md:flex-row-reverse justify-center">
                    <Image src={translationImage} className='md:w-[500px] w-full' />
                    <div className="flex flex-col md:w-[90%] items-start gap-8">
                        <h3 className="font-bold text-3xl text-left">
                            100% Human Translation Customization
                        </h3>
                        <p className="text-xl text-gray-700 text-left">All your translations are done by one of our French to
                            English subtitle translators to ensure the absolute highest quality. No machines are
                            used here, just the talents and abilities of our translators.</p>
                    </div>
                </div>
                <div className="flex gap-16 flex-col md:flex-row justify-center">
                    <Image src={limitImage} className='md:w-[500px] w-full' />
                    <div className="flex flex-col md:w-[90%] items-start gap-8">
                        <h3 className="font-bold text-3xl text-left">
                            Format &amp; Hardcode Subtitles
                        </h3>
                        <p className="text-xl text-gray-700 text-left">Once your subtitles have been translated, you can format
                            your subtitles to make them match your brand. You can select multiple settings and get
                            your video ready to publish. You can also directly download the video with burned-in
                            subtitles.</p>
                    </div>
                </div>
                <div className="flex gap-16 flex-col md:flex-row-reverse justify-center">
                    <Image src={formatImage} className='md:w-[500px] w-full' />
                    <div className="flex flex-col md:w-[90%] items-start gap-8">
                        <h3 className="font-bold text-3xl text-left">
                            Subtitle Customization
                        </h3>
                        <p className="text-xl text-gray-700 text-left">Our translation experts take care of the translation and
                            making sure that your subtitles look pretty. But even then you can still decide how your
                            subtitles are going to look with our line, CPL, and CPS management.</p>
                    </div>
                </div>
                <GetStartedButton />
            </div>
            <div className='flex flex-col gap-2 items-center'>
                <div className='flex gap-10 flex-col md:flex-row items-start p-10'>
                    <div className='w-[90%] md:w-[80%]'>
                        <Image src={banner} alt="banner" className='w-full' />
                    </div>
                    <ol className='list-decimal md:w-[80%] flex flex-col items-start bg-white border-2 border-gray-200 rounded-md gap-4 p-10 text-xl'>
                        <h2 className='text-3xl font-bold text-left'>How to create English subtitles for an French video?</h2>
                        <li className='text-2xl font-bold'>
                            Upload your file.
                        </li>
                        <div className='text-lg'>
                            With our uploader,
                            you can
                            import your file from anywhere,
                            whether it &#39;s on your laptop, Google Drive, Youtube, or Dropbox.
                        </div>
                        <li className='text-2xl font-bold'>
                            Select &quot;French&quot;.
                        </li>
                        <div className='text-lg'>
                            Determine the language of the audio of your video.
                        </div>
                        <li className='text-2xl font-bold'>
                            Select &quot;Human made&quot;.
                        </li>
                        <div className='text-lg'>
                            With our Human-Made service, the original (French) subtitles will be created by a native subtitler and proofread by an experienced reviewer.

                        </div>
                        <li className='text-2xl font-bold'>
                            Toggle &quot;Translate subtitles to another language&quot;.
                        </li>
                        <div className='text-lg'>
                            Select &quot;English&quot; to determine the target language for the subtitle translation process.
                        </div>
                        <li className='text-2xl font-bold'>
                            Get notified when your French and English subtitles are ready.
                        </li>
                        <div className='text-lg'>
                            Receive an email when the subtitles have been created within 24 hours for the French subtitles and 3-5 days for English subtitles.

                        </div>
                        <li className='text-2xl font-bold'>
                            Receive your subtitles.
                        </li>
                        <div className='text-lg'>
                            Access your subtitles from the dashboard.
                        </div>
                        <li className='text-2xl font-bold'>
                            Click on &quot;Export&quot; and choose your preferred file format.
                        </li>
                        <div className='text-lg'>
                            You can export to SRT, VTT, and many more. It&# 39;s that easy to have your video professionally subtitled!
                        </div>
                    </ol>

                </div>
            </div>
            <div className='flex flex-col items-center gap-10 justify-center'>

                <span className="text-3xl font-bold">Customer Reviews</span>

                <div className="text-xl">
                    Rated <b>Excellent 4.8/5</b> based on 850+ reviews
                </div>

                <div className="flex md:flex-row flex-wrap md:p-20 p-10 gap-10">
                    <div className="flex flex-col md:w-[500px] w-full items-start bg-white border-2 border-gray-200 rounded-md gap-4 p-10">
                        <div className="flex justify-between items-center w-full">
                            <div className="font-bold text-2xl">Easy and quick to use!</div>
                            <div className='text-xl flex text-[#ffd700]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <div >Very nice and structured tool :) Not only does it
                            auto-caption very accurately, even if you have to change something, it is really easy and
                            userfriendly to do so!</div>
                        <div className='text-gray-700 pt-5'>Konstantin Kloppe - Trustpilot</div>
                    </div>
                    <div className="flex flex-col md:w-[500px] w-full items-start bg-white border-2 border-gray-200 rounded-md gap-4 p-10" >
                        <div className="flex justify-between items-center w-full">
                            <div className="font-bold text-2xl">Works really well and is very easy
                                to use</div>
                                <div className='text-xl flex text-[#ffd700]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <div >Works really well and is very easy to use. Transcript
                            and subtitles are very accurate and where they are not it&#39;s really easy to amend them.
                            Loads of customisation options. Excellent value for money.</div>
                        <div className='text-gray-700 pt-5'>Customer - Trustpilot</div>
                    </div>
                    <div  className="flex flex-col md:w-[500px] w-full items-start bg-white border-2 border-gray-200 rounded-md gap-4 p-10">
                        <div className="flex justify-between items-center w-full">
                            <div className="font-bold text-2xl">Fab service</div>
                            <div className='text-xl flex text-[#ffd700]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <div >Fab service - reasonable pricing and good result.</div>
                        <div className='text-gray-700 pt-5'>Iona Kirkpatrick - Trustpilot</div>
                    </div>
                    <div  className="flex flex-col md:w-[500px] w-full items-start bg-white border-2 border-gray-200 rounded-md gap-4 p-10">
                        <div className="flex justify-between items-center w-full">
                            <div className="font-bold text-2xl">It&#39;s a very useful app for
                                translating…</div>
                                <div className='text-xl flex text-[#ffd700]'>
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                                <FaStar />
                            </div>
                        </div>
                        <div >It&#39;s a very useful app for translating recordings
                            in languages other than English.</div>
                        <div className='text-gray-700 pt-5'>Katherine Sypher - Trustpilot</div>
                    </div>

                </div>
                <Link href="/reviews">See all reviews ▸</Link>
                <GetStartedButton />
            </div>
        </div >
    )
}

export default Hero
