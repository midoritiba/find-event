import { getFeaturedEvents } from '../data'
import EventList from '../components/events/event-list'


export default function Home() {
  const featuredEvents = getFeaturedEvents()

  return (
    <div>
      <EventList events={featuredEvents} />
    </div>
  )
}
