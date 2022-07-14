import Image from 'next/image';

const CRMCard = ({ data }) => {
  return (
    <div className="bg-white rounded-2xl p-5 m-3 crm-card h-[300px]">
        <div>
            <Image src={data.image} alt={data.title} className="w-fit h-fit" />
        </div>

        <h1 className="text-textSecondary text-[20px] mb-5">
            {data.title}
        </h1>
        <p className="text-[16px]">
            {data.description}
        </p>
    </div>
  )
}

export default CRMCard