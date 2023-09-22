import { tinaField } from 'tinacms/dist/react'

export default function EventList({ data }) {
    const { eventsList, title } = data.eventList ?? []
    return (
        <div className="events">
            <h2 className="title-section">{title}</h2>
            {eventsList &&
                eventsList.map((event, i) => {
                    const featured = event.featured ? 'promote' : ''

                    return (
                        <>
                            <div
                                className={`description ${featured}`}
                                key={`${event.title}-${i}`}
                                data-tina-field={tinaField(event, 'title')}
                            >
                                <p>
                                    <span className="date">
                                        {event.textDate} // {event.title}
                                    </span>
                                </p>
                                <p className="place">
                                    {event.entreprise} - {event.place}
                                </p>
                                <p>{event.description}</p>
                            </div>
                        </>
                    )
                })}
        </div>
    )
}
