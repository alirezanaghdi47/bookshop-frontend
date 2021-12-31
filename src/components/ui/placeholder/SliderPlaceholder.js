import Skeleton from 'react-loading-skeleton';

//=================//
//===== style =====//
//=================//

import 'react-loading-skeleton/dist/skeleton.css';


const SliderPlaceholder = () => {

    return (
        <Skeleton
            baseColor="#e0e0e0"
            highlightColor="#eeeeee"
            borderRadius="0.5rem"
            width="100%"
            height={320}
        />
    );
};

export default SliderPlaceholder;
