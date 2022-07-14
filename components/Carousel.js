import Data from '../helper/CustomerData';
import CustomerReviewCard from './cards/CustomerReviewCard';

const Carousel = ({ currentIndex }) => {

    return (
        <div>
            {
              Data.map((data, idx) => {
                return(
                    <div key={idx}>
                    {
                        idx === currentIndex && (<CustomerReviewCard data={data} />)
                    }
                    </div>
                )
              })
            }
        </div>
    )
}

export default Carousel