import Skeleton from 'react-loading-skeleton';

//=================//
//===== style =====//
//=================//

import 'react-loading-skeleton/dist/skeleton.css';


const PricePlaceholder = () => {

    return (
        <Skeleton
            baseColor="#e0e0e0"
            highlightColor="#eeeeee"
            borderRadius="0.5rem"
            height={90}
        />
    );
};

export default PricePlaceholder;
