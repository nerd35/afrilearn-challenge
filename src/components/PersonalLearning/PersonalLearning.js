import React from 'react'
import './PersonalLearning.scss';
import { NavLink } from 'reactstrap'

function PersonalLearning() {
  return (
    <div className="container-fluid mt-3 text-center bg-danger1">
      <div className='container '>
        <div className=" text-center ">
        <h1 className="pt-5 mb-0 personal-learning-title">Get personal learning recommendations</h1>
        <p className="py-1 personal-learning-text">Answer a few questions for your top picks</p>
        </div>
        <div className="text-center pb-5">
        <NavLink href="/" className="btn btn-transparent mx-auto text-light text-center border-light w-25 ">Get started</NavLink>
        </div>
      </div>
    </div>
  )
}

export default PersonalLearning;
