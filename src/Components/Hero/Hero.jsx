import { Helmet } from 'react-helmet';
import Hero1 from './Hero1/Hero1';
import Hero2 from './Hero2/Hero2';

const Hero = () => {
    return (
        <>
            <Helmet>
                <title>Hero Component | Unify UI</title>
            </Helmet>
            <div className="space-y-5">
                <Hero1></Hero1>
                <Hero2></Hero2>
            </div>
        </>
    );
};

export default Hero;