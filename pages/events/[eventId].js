import { useRouter } from 'next/router'

const EventSpecific = () => {
    const router = useRouter()
    const eventId = router.query.eventId

    const event = getEventById(eventId)

    if (!event) {
        return <p>No event Found</p>
    }
    
    return (
        <div>
            <h1>Some specific event</h1>
        </div>
    );
}
 
export default EventSpecific;