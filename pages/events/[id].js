import { useRouter } from "next/router";

import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/ui/error-alert";

const SingleEventPage = () => {
    const router = useRouter();
    const { id } = router.query;
    const event = getEventById(id);

    if (!event) {
        return (
            <div>
                <ErrorAlert>
                    <p>No Event Found</p>
                </ErrorAlert>
            </div>
        );
    }

    return (
        <>
            <EventSummary title={event.title} />
            <EventLogistics
                date={event.date}
                address={event.location}
                image={event.image}
                imageAlt={event.title}
            />
            <EventContent>
                <p>{event.description}</p>
            </EventContent>
        </>
    );
};

export default SingleEventPage;
