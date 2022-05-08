import Link from 'next/link'
import styles from './event-item.module.css'
import Button from '../ui/button'

const EventItem = (props) => {

    const { title, image, date, location, id } = props

    const readableDate = new Date(date).toLocaleDateString('en-US', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
    })

    const formattedAddress = location.replace(', ', '\n')

    const exploreLink = `/events/${id}`

    return (
        <li className={styles.item}>
            <img src={'/' + image} alt={title}/>
            <div className={styles.content}>
                <div className={styles.summary}>
                    <h2>{title}</h2>        
                    <div className={styles.date}>            
                    <time>{readableDate}</time>
                </div>
                <div className={styles.address}>
                    <address>{formattedAddress}</address>
                </div>
                </div>
                <div className={styles.actions}>
                    <Button link={exploreLink}>Explore Event</Button>
                </div>
            </div>
        </li>
    );
}
 
export default EventItem;