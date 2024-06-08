import React from 'react';

const ProjectElement = ({ project, setCurrentPage }) => {

  const { image, alt, title, description, labels, type } = project;  

  const handleClick = () => {
    setCurrentPage();
  };

  return (
    <div className="col-md-5 projectElement" onClick={handleClick}>
      
      <img src={image} alt={alt} height={250} width={300}/>
      <div className="background d-flex flex-column p-3 pb-0 rounded">
        <div className="d-flex justify-content-between align-items-center"><h5 className='mainColor d-flex mb-3'>{title}</h5>{type ? <p className="label fw-bold end-0 p-2">{type}</p> : ""}</div>
        
        <p>{description}</p>
        <p className='fst-italic mt-auto mb-0'>{labels}</p>
      </div>
    </div>
  );
};

export default ProjectElement;