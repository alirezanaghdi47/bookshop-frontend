import PropTypes from "prop-types";
import Tippy from '@tippyjs/react';

//=================//
//===== style =====//
//=================//

import 'tippy.js/dist/tippy.css';
import "./../styles/core/react-tooltip.scss";


const Tooltip = ({children, content, placement}) => {

    return (
        <Tippy
            content={content}
            arrow={false}
            duration={300}
            placement={placement}
        >
            {children}
        </Tippy>
    );
};

Tooltip.prototype = {
    content: PropTypes.string,
    placement: PropTypes.string,
};


export default Tooltip;
