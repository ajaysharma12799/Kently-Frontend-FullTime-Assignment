/* eslint-disable react/no-unescaped-entities */
import Image from "next/image"
import MainImage from '../assets/MainImage.svg'

const Main = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between px-10">
        <div>
            <div className="text-[46px] font-normal">
                <h1>
                    Don't just integrate
                </h1>
                <h1 className="text-primary">
                    Accelerate your CRM
                </h1>
            </div>
            <div className="text-[18px] font-medium mt-5">
                <p>Propel your sales team into a state of flow with CRM </p> 
                <p>Accelerations. Switch out boring hours of repetitive work with</p>
                <p>high-impact activities. Build a repeatable sales process. </p>
            </div>
            <button type="submit" className="mt-5 uppercase rounded-lg bg-primary text-white px-[16px] py-[12px]">get started</button>
        </div>
        <div className="mt-10 mb-10 md:mt-0 md:mb-0">
            <Image src={MainImage} className="md:w-fit h-fit" alt="Klenty Main Image" />
        </div>
    </section>
  )
}

export default Main