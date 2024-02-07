import React from 'react';
import './website.css';
import { Feature } from '../../components';

const Website = () => {
  return (
    <div className="gpt3__website section__margin" id="wgpt3">
    <div className="gpt3__website-feature "> 
    <Feature title="What is GPT-3" text="we se opinion friends me messages as delight. whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments hoisterous. At jointure ladyship an insisted so humanity he. friendly bachrlor entrance to on by"/>

    </div>
    <div className="gpt3__website-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the library</p>
    </div>
    <div className="gpt3__website-container">
    <Feature title="Chatbots" text="we so opinion friends me message as delight whole front do of plate heard oh might"/>
    <Feature title="Knowledgebase" text="Ar jointure ladyship an insisted so hymanity he. Friendly bachelor entrance to on by. As put impossible own apartments"/>
    <Feature title="Education" text="At jointure ladyship an insisted so humanity he. friendly bachelor entrance to on by.As put impossible own apartments "/>
    </div>
    </div>
  )
}

export default Website