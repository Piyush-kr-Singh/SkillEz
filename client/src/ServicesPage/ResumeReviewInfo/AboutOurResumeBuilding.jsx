import React from 'react';
import ProjectBuildingImg from '../../../public/reumebuilding.png';

const AboutOurResumeBuilding = () => {
    return (
        <div style={{ width: '100%', height: '100%', position: 'relative', background: 'white' }}>
            <section className='bg-[#eef5ff] dark:bg-slate-900 duration-300 w-full py-8'>
                <div style={{ width: 118, height: 28, left: 1100, top: 302, position: 'absolute', background: 'rgba(254, 197, 54, 0.30)', borderRadius: 14 }} />
                <div style={{ width: 39, height: 39, left: 1400, top: 439, position: 'absolute', background: 'rgba(43, 183, 157, 0.30)', borderRadius: 9999 }} />
                <div style={{ width: 39, height: 39, left: 800, top: 168, position: 'absolute', background: 'rgba(43, 183, 157, 0.30)', borderRadius: 9999 }} />
                <div style={{ width: 39, height: 39, left: 71, top: 100, position: 'absolute', background: 'rgba(43, 183, 157, 0.30)', borderRadius: 9999 }} />
                <div style={{ width: 39, height: 39, left: 1100, top: 436, position: 'absolute', background: 'rgba(255, 0, 0, 0.30)', borderRadius: 9999 }} />
                <div style={{ width: 39, height: 39, left: 800, top: 450, position: 'absolute', background: 'rgba(255, 0, 0, 0.30)', borderRadius: 9999 }} />
                <div style={{ width: 39, height: 39, left: 450, top: 230, position: 'absolute', background: 'rgba(110.50, 142.29, 255, 0.30)', borderRadius: 9999 }} />
                <div style={{ width: 39, height: 39, left: 227, top: 346, position: 'absolute', background: 'rgba(110.50, 142.29, 255, 0.30)', borderRadius: 9999 }} />
                <div className='max-w-[1290px] mx-auto'>
                    <div className='flex flex-col md:flex-row justify-center gap-8'>
                        <div className='mx-auto'>
                            <h1 className='text-3xl md:text-5xl text-center md:text-start font-monts text-blue-500 font-bold mb-4'>About Resume Review Service</h1>
                            <p className='text-[16px] md:text-[19px] text-justify md:px-0 px-1 dark:text-white text-black'>
                                Our professional resume building service is tailored to elevate your career prospects by crafting a compelling and polished document that showcases your skills, accomplishments, and potential. Our experienced team of writers ensures your resume is not only visually appealing but also strategically aligned with industry standards, optimizing your chances of standing out to potential employers. We prioritize individuality, focusing on personalized content that reflects your unique strengths and qualifications.
                            </p>
                        </div>

                        <div>
                            <img src={ProjectBuildingImg} alt="Project Building" className='max-w-[500px] md:max-w-[600px] rounded-md shadow-lg mx-auto pt-1 md:pt-0 px-1 md:px-0' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default AboutOurResumeBuilding;
