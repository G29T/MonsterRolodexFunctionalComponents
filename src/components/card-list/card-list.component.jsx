import './card-list.styles.css'
import Card from '../card/card.component.jsx';

//props= object that has all diff parameters and properties that are being passed inside a component like CardList
const CardList = ({ monsters }) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return (
                <Card monster={monster} />
            )
        }
        )}
    </div>
);

export default CardList;