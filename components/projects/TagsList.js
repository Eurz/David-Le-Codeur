export default function TagsList({ tags }) {
    return (
        <div className="tags">
            {tags?.map((tag, i) => {
                return (
                    <div key={i} className="item">
                        {tag}
                    </div>
                )
            })}
        </div>
    )
}
