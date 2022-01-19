import PropTypes from 'prop-types';
import {useMediaQuery} from 'react-responsive';
import {Menu , MenuItem , MenuButton} from "@szhsin/react-menu";

//=================//
//===== style =====//
//=================//

import '@szhsin/react-menu/dist/index.css';
import '@szhsin/react-menu/dist/transitions/slide.css';
import '../../styles/module/react-menu.scss';

//====================//
//===== variable =====//
//====================//

const sortList = [
    {id: 1, label: 'پیش فرض', value: ''},
    {id: 2, label: 'جدید ترین', value: '-createdAt'},
    {id: 3, label: 'گران ترین', value: '-price'},
    {id: 5, label: 'بیشترین تخفیف', value: '-discount'}
];


const SortMenu = ({value, onClick, onSubmit}) => {

    const isMobile = useMediaQuery({maxWidth: 576});

    const handleClick = async (value) => {
        await onClick(value);
        await onSubmit();
    };

    return (
        <Menu
            offsetY={16}
            menuClassName="z-index-500"
            transition
            menuButton={
                isMobile ? (
                    <MenuButton className="btn btn-rounded btn-primary me-3">
                        <i className="fas fa-filter fs-4 m-1"/>
                    </MenuButton>
                ) : (
                    <MenuButton className="btn btn-primary me-3" styles={{width: 180}}>
                        <i className="fas fa-filter fs-5 m-1 ms-2"/>
                        مرتب سازی
                    </MenuButton>
                )
            }
        >
            {
                sortList.map((item, index) => (
                        <MenuItem onClick={() => handleClick(item.value)} key={index}>
                              <span className={`btn btn-sm btn-start ${value === item.value ? 'btn-primary' : 'btn-link link-gray'} w-100 p-2`}>
                                {item.label}
                              </span>
                        </MenuItem>
                    )
                )
            }
        </Menu>
    );
};

SortMenu.prototype = {
    value: PropTypes.string,
    onClick: PropTypes.func,
    onSubmit: PropTypes.func
};

export default SortMenu;
