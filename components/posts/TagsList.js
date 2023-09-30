export default function TagsList({ tags }) {
    return (
        <div className="tags">
            {tags.map((tag) => {
                return <div className="item">{tag}</div>
            })}
        </div>
    )
}
