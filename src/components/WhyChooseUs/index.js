import React from 'react';
import './WhyChooseUs.scss';
import { NavLink } from 'reactstrap';

function WhyChooseUs() {
	return (
		<div className=''>
			<div className='container mt-5'>
				<div className='row mt-3'>
					<div className='col-lg-12 col-sm-12 mt-4 text-center'>
						<h1 className='py-3 border-bottom why-choose-title'>WHY USE OUR COURSES?</h1>
						<p className='why-choose-text mt-3 text-center'>
							We have collected all of the necessary tools for effective study. Here you can find high
							quality free and paid programs. Every student has the
							<br /> opportunity to become a teacher.
						</p>
					</div>
				</div>
				<div className='row mt-4 px-3 mb-3'>
					<div className='col-lg-4 col-sm-12  bg-warning mb-3'>
						<img
							src={require('../../assets/images/banner-right-alligned-e1450519499226.png')}
							alt='info'
							className='whychoose-img mt-5'
						/>
						<div className='text-right mr-3 text-light whychoose-text-div'>
							<i class='fas fa-award fa-2x mb-2'></i>
							<h3 className='certified'>CERTIFICATE LEAD</h3>
							<p className='get-job'>TO GET JOB</p>
						</div>
					</div>
					<div className='col-lg-4 col-sm-12 bg-info1 mb-3'>
						<img src={require('../../assets/images/img-2.png')} alt='info' className='whychoose-img1' />
						<div className='text-right mr-3 text-light whychoose-text-div1'>
							<i class='far fa-check-circle fa-2x mb-2'></i>
							<h3 className='certified'>SAVE MONEY BY</h3>
							<p className='get-job'>SIGNING UP</p>
							<NavLink
								href='/'
								className='btn btn-transparent text-light font-weight-bold border-1 border border-light float-right'
							>
								SIGN UP
							</NavLink>
						</div>
					</div>
					<div className='col-lg-4 col-sm-12 bg-primary1 mb-3'>
						<img
							src={require('../../assets/images/banner-pencil-e1450532824100.png')}
							alt='info'
							className='whychoose-img2'
						/>
						<div className='text-right mr-3 text-light whychoose-text-div1'>
							<i class='fas fa-laptop fa-2x mb-2'></i>
							<h3 className='certified'>TRAINING FOR</h3>
							<p className='get-job'>SCHOOLS, GOVERNMENTS...</p>
							<NavLink
								href='/'
								className='btn btn-transparent text-light font-weight-bold border-1 border border-light w-50 float-right'
							>
								VIEW ALL
							</NavLink>
						</div>
					</div>
        </div>
        <div className="row mt-4 text-center">
        <div className="col-lg-4 col-sm-12">
          <h3 className="what-to-get-title">WHAT YOU GET?</h3>
          <p className="what-to-get-text">Courses for all levels cover technical skills, <br/>creative techniques, business strategies, and <br/> more.</p>
        </div>
        <div className="col-lg-4 col-sm-12">
        <h3 className="what-to-get-title">HOW TO DO THIS</h3>
        <p className="what-to-get-text">Starting your own education platform is as easy <br/>as creating, sharing and monetizing your<br/> content & more!</p>
        </div>
        <div className="col-lg-4 col-sm-12">
        <h3 className="what-to-get-title">BENEFITS</h3>
        <p className="what-to-get-text">We have thousands of online courses, <br/>certificates, tests and tools! And, we add new <br/>material everyday!</p>
        </div>
        </div>
			</div>
		</div>
	);
}

export default WhyChooseUs;
