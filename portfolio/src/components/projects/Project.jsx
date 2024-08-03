import React from 'react';
import { useState } from 'react';
import './project.css';
import Menu from './Menu';


const Project = () => {
  const[items, setItems] = useState(Menu);

  {/* onclick button function to show the clicked items only */}
  const filterItem = (titleItem) => {
    const updatedItems = Menu.filter((curElem) => {
      return curElem.title === titleItem;
    });
    setItems(updatedItems);
  };
  return (
    <section className="work container section" id="projects">
    <h2 className="section__title">Projects</h2>

    <div className="work__filters">

      {/* onclick button show the clicked items only */}
      <span className="work__item" onClick={() => setItems(Menu)}>All</span>

      <span className="work__item" onClick={() => filterItem("AI Resume Builder")}>AI Resume Builder</span>
      <span className="work__item" onClick={() => filterItem("Sudoku Solver")}>Sudoku Solver</span>
      
    </div>

    <div className="work__container grid">
      {items.map((elem) =>{
        const{id, image, title, category} = elem;
        return(
          <div className="work__card" key={id}>
            <div className="work__thumbnail">
              <img src={image} alt="" className="work__img" />
              <div className="work__mask"></div>
            </div>

            <span className="work__category">{category}</span>
            <h3 className="work__title">{title}</h3>
            <a href="" className="work__button">
              <i className="icon-link work__button-icon"></i>
            </a>
          </div>
        )
      })}
    </div>
  </section>
  )
}

export default Project