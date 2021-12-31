import Skeleton from 'react-loading-skeleton';
import {range} from '../../../utils/functions';

//=================//
//===== style =====//
//=================//

import 'react-loading-skeleton/dist/skeleton.css';


const TablePlaceholder = () => {

    const rows = range(0, 5);

    return (
        <div className="vstack gap-1">

            <Skeleton
                baseColor="#4D1DFE"
                highlightColor="#eeeeee"
                borderRadius="0.5rem"
                width="100%"
                height={40}
            />

            {
                rows.map((row) => (
                        <Skeleton
                            key={row}
                            baseColor="#e0e0e0"
                            highlightColor="#eeeeee"
                            borderRadius="0.5rem"
                            width="100%"
                            height={40}
                        />
                    )
                )
            }

        </div>
    );
};

export default TablePlaceholder;
