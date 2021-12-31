import PropTypes from 'prop-types';

//=====================//
//===== component =====//
//=====================//

import OrderItem from './OrderItem';


const OrderList = ({cart}) => {

    return (
        <div className="container-fluid p-0">

            <ul className="row g-3 h-100">

                {
                    cart && cart?.orders?.map((order, index) => (
                            <li className="col-24 col-sm-12 col-md-12 col-xl-8 h-available" key={index}>
                                <OrderItem order={order}/>
                            </li>
                        )
                    )
                }
            </ul>

        </div>
    );
};

OrderItem.prototype = {
    cart: PropTypes.object
};

export default OrderList;
