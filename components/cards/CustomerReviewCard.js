import Image from "next/image"
import DoubleQuotes from '../../assets/DoubleQuotes.svg';

const CustomerReviewCard = ({ data }) => {
  return (
    <div className="flex items-center flex-col md:flex-row w-[80%] mx-auto mt-10 mb-10">
        <div className="p-5 w-full md:w-[60%] order-2 md:order-1 duration-1000 ease-in-out transition-all">
            <div className="-ml-4 w-fit">
                <Image src={DoubleQuotes} alt="Double Quotes" className="w-fit" />
            </div>
            <h1 className="text-textSecondary text-[24px] font-semibold">
                Klenty has helped us engage a far greater number of leads per week, resulting in an outbound revenue jump of 93%
            </h1>
            <div className="flex mt-[10%] mx-auto md:mx-0 w-fit">
                <div className="mr-3">
                    <Image src={data.orgImage} alt={data.personName} className="w-fit" />
                </div>
                <span className="border-l-2"></span>
                <div className="ml-3">
                    <h6 className="font-semibold text-[16px]">
                        {data.personName}
                    </h6>
                    <p className="font-normal text-[14px] md:text-[16px]">
                        {data.designation}
                    </p>
                </div>
            </div>
        </div>
        <div className="ml-0 md:ml-auto order-1 md:order-1">
            <Image src={data.image} alt="Person 1" className="w-fit" />
        </div>
    </div>
  )
}

export default CustomerReviewCard