import {motion} from 'framer-motion';
import {styles} from '../styles';
import {staggerContainer} from '../utils/motion';

{/* component that return a component */}
const SectionWrapper = (Component, idName) =>
function HOC() {
    return (
        //a outer box that wraps component and applies a motion effect
        <motion.section
            variants = {staggerContainer()}
            initial ="hidden"
            whileInView = "show"
            viewport = {{once: true, amount: 0.25}}
            className = {`${styles.padding} max-w-7xl mx-auto relative z-0`}
            >
                <span className ="hash-span" id ={idName}>
                    &nbsp;
                </span>
                <Component />

        </motion.section>
    )
}

export default SectionWrapper