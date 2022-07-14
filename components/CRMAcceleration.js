import CRMCard from "./cards/CRMCard"
import Data from '../helper/helperData';

const CRMAcceleration = () => {
  return (
    <section className="px-10 crm-section w-full py-10">
        <h1 className="text-center text-[40px] text-textSecondary font-normal">CRM Acceleration</h1>
        <p className="text-center text-[18px] font-medium mt-5">Everything CRM Integrations was supposed to be. And more.</p>
        <div className="flex flex-col md:flex-row items-center justify-between mt-10">
            {
                Data.map((data, idx) => <CRMCard data={data} key={idx} />)
            }
        </div>
    </section>
  )
}

export default CRMAcceleration