import {FaFacebook, FaGithub, FaInstagram} from 'react-icons/fa'

import '../styles/components/socialnetworks.sass';

const socialNetworks = [
    { name: "facebook", link: "https://www.facebook.com/hmelosilvapedro", icon: <FaFacebook /> },
    { name: "gitgub", link: "https://github.com/PedroHmelosilva", icon: <FaGithub /> },
    { name: "instagram", link: "https://www.instagram.com/pedrohenriquemeloesilva/", icon: <FaInstagram /> },
]

const SocialNetworks = () => {
    return <section id="social-networks">
        {socialNetworks.map((network) => (
            <a href={network.link} className="social-btn" id={network.name} key={network.name}>
                {network.icon}
            </a>
        ))}
    </section>;
};

export default SocialNetworks;