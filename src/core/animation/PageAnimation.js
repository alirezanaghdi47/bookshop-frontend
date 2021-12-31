import {motion} from "framer-motion";

//====================//
//===== variable =====//
//====================//

const animationVariants = {
    initial: {opacity: 0 , y: 10},
    animate: {opacity: 1 , y: 0},
    exit: {opacity: 0 , y: 0},
}

const PageAnimation = ({children}) => {

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{duration: 0.3, ease: "easeInOut"}}
            variants={animationVariants}
        >
            {children}
        </motion.div>
    );
};

export default PageAnimation;
