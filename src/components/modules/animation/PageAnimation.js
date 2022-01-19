import {motion} from "framer-motion";

//====================//
//===== variable =====//
//====================//

const variants = {
    initial: {opacity: 0},
    animate: {opacity: 1},
    exit: {opacity: 0},
}

const transition = {
    duration: 0.25,
    ease: "easeInOut",
}

const PageAnimation = ({children}) => {

    return (
        <motion.div
            initial="initial"
            animate="animate"
            exit="exit"
            transition={transition}
            variants={variants}
        >
            {children}
        </motion.div>
    );
};

export default PageAnimation;
