import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../data'
import EventList from '../../components/events/event-list'


const FilteredEvents = () => {

    const router = useRouter()
    const filterData = router.query.slug

    if(!filterData) {
        return <p className='center'>Loading ...</p>
    }

    const filteredYear = filterData[0]
    const filteredMonth = filterData[1]

    console.log(filteredYear);

    const numYear = +filteredYear
    const numMonth = +filteredMonth

    if(isNaN(numYear) || isNaN(numMonth) || numYear > 2050 || numYear < 2022 || numMonth > 12 || numMonth < 1){
        return <p>Invalid filter. Please insert a valid value</p>
    }
    console.log(numYear, numMonth);

    const filteredEvents = getFilteredEvents({
        year: numYear, 
        month: numMonth,
    })
    console.log(filteredEvents);
    if(!filteredEvents || filteredEvents.length ===0){
        return <p>No events found for the chosen values</p>
    }

    return (
        <div>
            <EventList events={filteredEvents} />
        </div>
    );
}
 
export default FilteredEvents;