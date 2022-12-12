import {FaFacebook, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "facebook", icon: <FaFacebook /> },
    { name: "gitgub", icon: <FaGithub /> },
    { name: "instagram", icon: <FaInstagram /> },
]

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href="#" className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>;
};

export default SocialNetworks;