import Skeleton from 'react-loading-skeleton';

//=================//
//===== style =====//
//=================//

import 'react-loading-skeleton/dist/skeleton.css';


const PaginationPlaceholder = () => {

    return (
        <div className="hstack gap-1 mx-auto">

            <Skeleton
                baseColor="#e0e0e0"
                highlightColor="#eeeeee"
                borderRadius="0.5rem"
                width={40}
                height={40}
            />

            <Skeleton
                baseColor="#e0e0e0"
                highlightColor="#eeeeee"
                borderRadius="0.5rem"
                width={40}
                height={40}
            />

            <Skeleton
                baseColor="#e0e0e0"
                highlightColor="#eeeeee"
                borderRadius="0.5rem"
                width={40}
                height={40}
            />

            <Skeleton
                baseColor="#4D1DFE"
                highlightColor="#eeeeee"
                borderRadius="0.5rem"
                width={40}
                height={40}
            />

            <Skeleton
                baseColor="#e0e0e0"
                highlightColor="#eeeeee"
                borderRadius="0.5rem"
                width={40}
                height={40}
            />

        </div>
    );
};

export default PaginationPlaceholder;
