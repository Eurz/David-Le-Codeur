export default function SocialLinks() {
    return (
        <div className="socials" role="menubar">
            <a
                href="https://github.com/Eurz"
                target="_blank"
                role="menuitem"
                className="tooltip"
            >
                <span className="tooltiptext">GitHub</span>
                <i className="fa-brands fa-github"></i>
            </a>
            <a
                href="https://www.linkedin.com/in/david-blard/"
                target="_blank"
                role="menuitem"
                className="tooltip"
            >
                <span className="tooltiptext">Linkedin</span>
                <i className="fa-brands fa-linkedin"></i>
            </a>
        </div>
    )
}
