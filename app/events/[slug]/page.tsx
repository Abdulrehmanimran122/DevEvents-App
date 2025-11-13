import BookEvent from '@/components/BookEvent';
import EventCard from '@/components/EventCard';
import { getSimilarEventsBySlug } from '@/lib/actions/event.action';
import { cacheLife } from 'next/dist/server/use-cache/cache-life';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface IEvent {
    id: string;
    title: string;
    description: string;
    overview: string;
    image: string;
    date: string;
    time: string;
    location: string;
    mode: string;
    audience: string;
    agenda: string[];
    organizer: string;
    tags: string[];
    slug: string;
}

const BaseUrl = process.env.NEXT_PUBLIC_BASE_URL;

const EventDetailsItems = ({ icon, alt, label }: { icon: string, alt: string, label: string }) => (
    <div className='flex items-center gap-2'>
        <Image
            src={icon}
            alt={alt}
            width={17}
            height={17}
        />
        <p>{label}</p>
    </div>
)

const EventAgenda = ({ agendaItems }: { agendaItems: string[] }) => (
    <div className="agenda">
        <h2>Agenda</h2>
        <ul>
            {agendaItems.map((item) => (
                <li key={item}>{item}</li>
            ))}
        </ul>
    </div>
)

const EventTags = ({ tags }: { tags: string[] }) => (
    <div className="flex flex-row gap-2 flex-wrap">
        {tags.map((tag) => (
            <div className="pill" key={tag}>{tag}</div>
        ))}
    </div>
)


const EventCardDetailPage = async ({ params }: { params: Promise<{ slug: string }> }) => {
    'use cache'
    cacheLife('hours'); 

    const { slug } = await params;
    const request = await fetch(`${BaseUrl}/api/events/${slug}`)
    const { event } = await request.json();
    if (!event) return notFound();




    const Bookings = 10;
    // normalize raw DB documents to the IEvent interface (convert _id -> id and ensure arrays)
    const rawSimilarEvents = await getSimilarEventsBySlug(slug);
    const similarEvents: IEvent[] = (rawSimilarEvents || []).map((e: any) => ({
        id: e._id?.toString?.() ?? e.id ?? '',
        title: e.title ?? '',
        description: e.description ?? '',
        overview: e.overview ?? '',
        image: e.image ?? '',
        date: e.date ?? '',
        time: e.time ?? '',
        location: e.location ?? '',
        mode: e.mode ?? '',
        audience: e.audience ?? '',
        agenda: Array.isArray(e.agenda) ? e.agenda : (e.agenda ? [e.agenda] : []),
        organizer: e.organizer ?? '',
        tags: Array.isArray(e.tags) ? e.tags : (e.tags ? [e.tags] : []),
        slug: e.slug ?? '',
    }));

    return (
        <section id='event'>
            <div className='header'>
                <h1>Event Description</h1>
                <p className='mt-2'>{event.description}</p>
            </div>
            <div className='details'>
                {/* for left side  */}
                <div className='content'>
                    <Image
                        src={event.image}
                        alt='Event Banner'
                        width={800}
                        height={800}
                        className='banner'
                    />
                    <section className='flex-col-gap-2 '>
                        <h2>Overview</h2>
                        <p>{event.overview}</p>
                    </section>
                    <section className='flex-col-gap-2'>
                        <h2>Event Details</h2>
                        <EventDetailsItems icon="/icons/calendar.svg" alt="calender" label={event.date} />
                        <EventDetailsItems icon="/icons/clock.svg" alt="clock" label={event.time} />
                        <EventDetailsItems icon="/icons/pin.svg" alt="pin" label={event.location} />
                        <EventDetailsItems icon="/icons/mode.svg" alt="mode" label={event.mode} />
                        <EventDetailsItems icon="/icons/audience.svg" alt="audience" label={event.audience} />
                    </section>

                    <EventAgenda agendaItems={event.agenda} />

                    <section className='flex-col-gap-2'>
                        <h2>About the Organizer</h2>
                        <p>{event.organizer}</p>
                    </section>

                    {/* Use the parsed tags */}
                    <EventTags tags={event.tags} />

                </div>

                {/* for the right side  */}
                <aside className='booking'>
                    <div className='signup-card'>
                        <h2>Book Your Spot</h2>
                        {Bookings > 0 ? (
                            <p className='text-sm'>Join {Bookings} People who have Already booked their Spot</p>
                        ) : (
                            <p className='text-sm'>Be the Frist to book your spot!</p>
                        )}
                        <BookEvent eventId={event._id} slug={event.slug} />
                    </div>
                </aside>
            </div>
            <div className='flex w-full flex-col gap-4 pt-20'>
                <h2>Similar Events</h2>
                <div className='events'>
                    {similarEvents.length > 0 && similarEvents.map((similarEvent: IEvent) => (
                        <EventCard key={similarEvent.id} {...similarEvent} />
                    ))}
                </div>
            </div>
        </section>
    )
}

export default EventCardDetailPage