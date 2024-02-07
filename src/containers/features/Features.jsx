import React from 'react';
import './features.css';
import { Feature } from '../../components';
const featuresData=[
  {
    title:'Improving and distrusts instantly',
    text:'From they fine john he give of rich he. They are and draw mrs like. improving and distrusts may instantly was household applauded',
  },
  {
    title:'Become the tended active',
    text:'Considered sympathize ten uncommonly occasional assisstance sufficient not.Letter of an become he tended active enable to',
  },
  {
    title:'Message or an nothing',
    text:'Led ask possible mistress relation elegance eat likewise debating.By message or am nothing amongst chiefty address',
  },
  {
    title:'Really boy law county',
    text:'Really boy law county she unable her sister feet you off its like six. Among six are live law build now. in build table in an rapid brush',
  }
]

const Features = () => {
  return (
    <div className='gpt3__features section__padding' id="features">
      <div className="gpt3__features-heading">
        <h1 className="gradient__text">The Future is now and you just need to realize it.Step into future today & make it happen.</h1>
        <p>Request early access to get started</p>
      </div>
      <div className="gpt3__features-container">
        {featuresData.map((item,index)=>(
          <Feature title={item.title} text={item.text} key={item.title + index} />
        ))}
      </div>

    </div> 
  )
}

export default Features