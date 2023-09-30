export default function SocialLinks({ data }) {
    // for (const key in Object.entries(data)) {
    //     if (Object.hasOwnProperty.call(object, key)) {
    //         const element = object[key]
    //     }
    // }
    return (
        <div className="socials" role="menubar">
            {/* {data?.map((item) => {
                return (
                    <>
                        <a
                            href={item}
                            target="_blank"
                            role="menuitem"
                            className="tooltip"
                        >
                            <span className="tooltiptext">GitHub</span>
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </>
                )
            })} */}
        </div>
    )
}
