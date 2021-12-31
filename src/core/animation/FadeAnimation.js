import {AnimatePresence, motion} from "framer-motion";

//====================//
//===== variable =====//
//====================//

const animationVariants = {
    show: {opacity: 1},
    hide: {opacity: 0},
}


const FadeAnimation = ({children, show}) => {

    return (
        <AnimatePresence initial={false}>

            <motion.div
                initial="hide"
                animate={show ? "show" : "hide"}
                exit="hide"
                transition={{duration: 0.3, ease: "easeInOut"}}
                variants={animationVariants}
            >
                {children}
            </motion.div>

        </AnimatePresence>
    );
};

export default FadeAnimation;
