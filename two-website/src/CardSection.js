import React from 'react';
import Card from './Card'

const CardSection = () => (
    <section className="contact bg-success ">
      <div className="container ">
        <h2 className="text-white">
          We love new friends!
        </h2>
        <div className="row">
          <div className="col-4">
            <Card title="LearnCodeOnline" buttonText="My LCO App" contentText="Learn Web Development"/>
          </div>
          <div className="col-4">
            <Card title="Udemy" buttonText="Udemy App" contentText="Learn many skills"/>
          </div>
          <div className="col-4">
            <Card title="iNeuron" buttonText="iNeuron App" contentText="Learn Data Science"/>
          </div>
        </div>
      </div>
    </section>
);

export default CardSection;