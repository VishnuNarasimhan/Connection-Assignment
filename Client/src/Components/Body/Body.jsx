import React, { useState } from 'react';
import './body.css';
import { RiSuitcaseLine } from 'react-icons/ri';
import { GrLocation } from 'react-icons/gr';
import { BsBookmark } from 'react-icons/bs';
import data from '../../data';

function Body() {
  const [isReadMore, setIsReadMore] = useState(false);
  return (
    <div className='body-container'>
      {data.map((content) => {
        const { id, name, profession, work, date, location, para, img } =
          content;
        return (
          <div className='body-content' key={id}>
            <div>
              <main>
                <h3 className='body-content-h5'>{name}</h3>
                <p className='body-content-p'>{profession}</p>
              </main>
              <div className='body-subcontent'>
                <div className='body-subcontent-work'>
                  <RiSuitcaseLine className='body-subcontent-work-icon' />
                  <div>
                    <p className='body-subcontent-work-p'>{work}</p>
                    <p className='body-subcontent-work-sub-p'>{date}</p>
                  </div>
                </div>
                <div className='body-subcontent-work'>
                  <RiSuitcaseLine className='body-subcontent-work-icon-2' />
                  <div>
                    <p className='body-subcontent-work-p-p2'>{work}</p>
                    <p className='body-subcontent-work-sub-p'>{date}</p>
                  </div>
                </div>
                <div className='body-subcontent-work'>
                  <GrLocation className='body-subcontent-work-icon' />
                  <div>
                    <p className='body-subcontent-work-p-p3'>{location}</p>
                  </div>
                </div>
              </div>
              <div className='body-footer'>
                <p className='body-footer-p'>
                  {isReadMore ? para : `${para.substring(0, 80)}...`}
                  <button onClick={() => setIsReadMore(!isReadMore)}>
                    {isReadMore ? 'show less' : 'read more'}
                  </button>
                </p>
                <BsBookmark className='body-footer-icon' />
              </div>
            </div>
            <div className='body-right-content'>
              <img src={img} alt={name} className='body-content-image' />
              <button className='body-content-btn'>View Details</button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default Body;
