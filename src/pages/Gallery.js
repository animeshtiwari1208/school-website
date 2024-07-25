import React from 'react';
import sportsDayImg from '../assets/images/sports_day.jpg';
import scienceExhibitionImg from '../assets/images/science_exhibition.jpg';
import culturalFestImg from '../assets/images/cultural_fest.jpg';
import classroomImg from '../assets/images/classroom.jpg';
import libraryImg from '../assets/images/library.jpg';
import schoolTourVid from '../assets/videos/school_tour.mp4';
import annualFunctionVid from '../assets/videos/annual_function.mp4';

const Gallery = () => {
  return (
    <div className="Gallery">
      <h2>Photo Gallery</h2>
      <div className="gallery-images">
        <img src={sportsDayImg} alt="Sports Day" />
        <img src={scienceExhibitionImg} alt="Science Exhibition"/>
        <img src={culturalFestImg} alt="Cultural Fest" />
        <img src={classroomImg} alt="Classroom"/>
        <img src={libraryImg} alt="Library" />
      </div>

      <h2>Video Gallery</h2>
      <div className="gallery-videos">
        <video controls>
          <source src={schoolTourVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <video controls>
          <source src={annualFunctionVid} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </div>
  );
};

export default Gallery;


