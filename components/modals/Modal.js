export default function Modal(props) {
    const { title, onClose } = props

    return (
        <div className="modal-wrapper">
            <div className="modal-content modal-on">
                <div className="js-close-wrapper">
                    <button className="js-close-modal" onClick={onClose}>
                        Fermer
                    </button>
                </div>
                <h2 className="modal-title">{title}</h2>
                <div>{props.children}</div>
            </div>
        </div>
    )
}
