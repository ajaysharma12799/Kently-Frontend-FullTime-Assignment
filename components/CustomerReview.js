import CarouselContainer from './CarouselContainer';

const CustomerReview = () => {
  return (
    <section className="mt-[5%] mb-10">
        <div>
            <h1 className="text-textSecondary text-[20px] md:text-[40px] font-normal text-center">
                What our customers have to say
            </h1>
        </div>
        <div className="mt-5 md:mt-0">
            <CarouselContainer />
        </div>
    </section>
  )
}

export default CustomerReview