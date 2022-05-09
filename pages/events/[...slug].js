import {Fragment} from 'react'
import { useRouter } from 'next/router'
import { getFilteredEvents } from '../../data'
import EventList from '../../components/events/event-list'
import ResultsTitle from '../../components/events/results-title'
import Button from '../../components/ui/button'
import ErrorAlert from '../../components/ui/error-alert'

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
        return (
            <Fragment>
                <ErrorAlert>
                    <p>Invalid filter. Please insert a valid value</p>
                </ErrorAlert>
                <div className="center">
                    <Button link='/events'>Show All Events</Button>
                </div>
            </Fragment>
            )
    }
    console.log(numYear, numMonth);

    const filteredEvents = getFilteredEvents({
        year: numYear, 
        month: numMonth,
    })
    console.log(filteredEvents);
    if(!filteredEvents || filteredEvents.length ===0){
        return (
        <Fragment>
            <ErrorAlert>
                <p>No events found for the chosen values</p>
            </ErrorAlert>
            <div className="center">
                <Button link='/events'>Show All Events</Button>
            </div>
        </Fragment>
        )
    }

    const date = new Date(numYear, numMonth - 1)

    return (
        <Fragment>
            <ResultsTitle date={date}/>
            <EventList events={filteredEvents} />
        </Fragment>
    );
}
 
export default FilteredEvents;