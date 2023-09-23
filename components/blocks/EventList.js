import { tinaField } from 'tinacms/dist/react'

export default function EventList({ data }) {
    const { eventsList, title } = data.eventList ?? []
    return (
        <div className="events row">
            <h2 className="title-section">{title}</h2>
            {eventsList &&
                eventsList.map((event, i) => {
                    const featured = event.featured ? 'promote' : ''
                    const eventTitle = event.title ? `${event.title}` : ''
                    const eventDate = event.textDate
                        ? `${event.textDate} // `
                        : ''
                    return (
                        <>
                            <div
                                className={`description ${featured}`}
                                key={`${event.title}-${i}`}
                                data-tina-field={tinaField(event, 'title')}
                            >
                                <p>
                                    <span className="date">
                                        {`${eventDate}  ${eventTitle}`}
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
