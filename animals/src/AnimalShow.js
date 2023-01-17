import './AnimalShow.css'
import { useState } from 'react';

import bird from './svg/bird.svg';
import cat from './svg/cat.svg';
import cow from './svg/cow.svg';
import dog from './svg/dog.svg';
import gator from './svg/gator.svg';
import heart from './svg/heart.svg';
import horse from './svg/horse.svg';

// in an object where the key is identical to the value, you can just write the key. Ex: bird, ; instead of bird: bird,
const svgMap = {
    bird, cat, cow, dog, gator, horse
}

// use object destructuring for the props
function AnimalShow({ type }) {

    const [clicks, setClicks] = useState(0);

    const handleClick = () => {
        setClicks(clicks + 1);
    };

    return(
        <div className="animal-show" onClick={handleClick}>
            {/* the image src is the svgMap object at the key of the type of animal */}
            <img className="animal" alt="animal" src={svgMap[type]} />
            <img
                className="heart"
                alt="heart"
                src={heart} 
                // inline style; {} means inline style; {{}} means an object in inline style
                // string interpolation adding 'px' to make sure the result is #px as a string so that it styles correctly
                style={{ width: 10 + 10 * clicks + 'px' }}
            />
        </div>
    );
}

export default AnimalShow;