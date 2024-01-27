import './card-list.styles.css'
import Card from '../card/card.component';
import { Monster } from '../../App'

type CardListProps = {
    monsters: Monster[]; //an array of Monster objects
}

//props= object that has all diff parameters and properties that are being passed inside a component like CardList
const CardList = ({ monsters }: CardListProps) => (
    <div className='card-list'>
        {monsters.map((monster) => {
            return (
                <Card monster={monster} key={monster.id}/>
            )
        }
        )}
    </div>
);

export default CardList;