import React from 'react';
import { NavLink } from 'reactstrap';
import './BecomeTutor.scss';

function BecomeTutor() {
	return (
    <div>
    <img src={require('../../assets/images/bg6.jpg')} alt="img" className="d-none d-md-block" style={{ position: 'absolute', width: '400px', height: '380px', marginLeft: '250px', marginTop: '-23px'}}/>
			<div className='become-tutor-section mt-5'>
				<div className='container'>
					<div className='row'>
						<div className='col-lg-6 mt-5 mb-5 ml-auto col-sm-12'>
							<h1 className='become-tutor-title'>Become an instructor</h1>
							<p className='become-tutor-text mb-5'>
								Top instructors from around the world teach millions of students on Udemy. We provide
								the tools and skills to teach what you love.
							</p>
							<NavLink href='/' className='btn btn-light btn-lg w-50 border-0 rounded-0'>
								Start Teaching
							</NavLink>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default BecomeTutor;
