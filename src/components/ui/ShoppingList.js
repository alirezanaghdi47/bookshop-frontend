import PropTypes from 'prop-types';

//=====================//
//===== component =====//
//=====================//

import ShoppingItem from './ShoppingItem';


const ShoppingList = ({orders}) => {

    return (
        <div className="container-fluid p-0">

            <ul className="row g-3 h-100">

                {
                    orders?.map((order, index) => (
                            <li className="col-24 col-sm-12 col-lg-8 h-available" key={index}>
                                <ShoppingItem order={order}/>
                            </li>
                        )
                    )
                }

            </ul>

        </div>
    );
};

ShoppingList.prototype = {
    orders: PropTypes.array
};

export default ShoppingList;
