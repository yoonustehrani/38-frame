import { useState, FC } from "react";

export interface StepObject {
    title: string
    description_title: string
    description: string
    icon: string
}

interface RoadmapProps {
    steps: StepObject[]
}

const Roadmap:FC<RoadmapProps> = ({steps}) => {
    const [currentStep, setCurrentStep] = useState(0)
    return (
        <>
            <div className="grid grid-cols-5 text-center">
                {steps.map(({icon}, i) => (
                    <div key={`${i}--${icon}`} className={`h-12 flex justify-center w-auto ${i <= currentStep ? '' : 'grayscale'}`}>
                        <img className="h-full w-auto" src={`/icons/${icon}.svg`} alt="" />
                    </div>
                ))}
            </div>
            {/* bars and steps go here */}
            <div className="bg-gray-300 h-2 rounded-full w-4/5 mx-[10%] mt-8">
                <div style={{ width: `${(100 / (steps.length - 1)) * currentStep}%` }} className="h-2 bg-zebra width-transition"></div>
            </div>
            <div className="grid grid-cols-5 text-center mt-2 font-iran-sans">
                {steps.map(({title}, i) => (
                    <div key={i} className="px-3 grow text-center pt-3 relative">
                        <span onClick={() => setCurrentStep(i)} className={`cursor-pointer duration-300 circleular-dot text-black ${i <= currentStep ? 'bg-x-yellow' : 'bg-gray-400'}`}>{i + 1}</span>
                        <span onClick={() => setCurrentStep(i)} className={`cursor-pointer duration-300 text-sm ${i <= currentStep ? 'text-black' : 'text-gray-500'}`}>{title}</span>
                    </div>
                ))}
            </div>
            <div className="md:px-8 mt-8 [direction:rtl] font-iran-sans">
                <div className="bg-white border border-black/5 shadow-md rounded-md py-6 px-6 md:px-12">
                    <span className="w-full block text-center font-bold text-2xl mb-6">{steps[currentStep].description_title}</span>
                    <p className="text-gray-800 text-justify">{steps[currentStep].description}</p>
                </div>
            </div>
        </>
    );
}

export default Roadmap;