import {motion} from "framer-motion";

//====================//
//===== variable =====//
//====================//

const variants = {
    initial: {opacity: 0 , scale: 0.99},
    animate: {opacity: 1 , scale: 1},
    exit: {opacity: 0 , scale: 0.99},
}

const transition = {
    duration: 0.3,
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
