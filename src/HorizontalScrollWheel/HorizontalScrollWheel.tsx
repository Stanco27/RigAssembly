import React from 'react';
import './HorizontalScrollWheel.css'

interface HorzontalScrollProps {
  name: string,
  image: string,
  checked?: boolean,
  onClick: () => void;
}

const HorizontalScrollWheel: React.FC<HorzontalScrollProps> = ({name, image, onClick, checked}) => {
  return (
      <div className="scroll-content" onClick={onClick}>
        <div className="item">
          <img className='scroll-img' src={image}/>
          <div className={checked ? 'overlay selected' : "overlay"}>
            <h4 className='product-name' >{name}</h4>
          </div>
        </div>
    </div>
  )
}

export default HorizontalScrollWheel