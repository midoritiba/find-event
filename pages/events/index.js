import { Fragment } from 'react'
import { useRouter } from 'next/router'
import { getAllEvents } from '../../data'
import EventList from '../../components/events/event-list'
import EventSearch from '../../components/events/event-search'

const AllEvents = () => {
    const events = getAllEvents()
    const router= useRouter()
    
    const findEventsHandler = (year, month) => {
        const fullPath = `/events/${year}/${month}`
        router.push(fullPath)
    }
    return (
        <Fragment>
            <EventSearch onSearch={findEventsHandler} />
            <EventList events={events} />
        </Fragment>
    );
}
 
export default AllEvents;