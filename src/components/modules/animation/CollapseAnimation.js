import {AnimatePresence , motion} from "framer-motion";

//====================//
//===== variable =====//
//====================//

const animationVariants = {
    show: {visibility: "visible" , opacity: 1 , height: "auto"},
    hide: {visibility: "hidden" , opacity: 0 , height: 0},
}


const CollapseAnimation = ({children, show}) => {

    return (
        <AnimatePresence initial={false}>

            <motion.div
                initial="hide"
                animate={show ? "show" : "hide"}
                exit="hide"
                transition={{duration: 0.25, ease: "easeInOut"}}
                variants={animationVariants}
            >
                {children}
            </motion.div>

        </AnimatePresence>
    );
};

export default CollapseAnimation;
