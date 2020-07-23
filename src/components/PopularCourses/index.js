import React from 'react';
import './PopularCources.scss';

function PopularCourses() {
	return (
		<div className='container mt-5 mb-5'>
			<h1 className='text-center popular-courses-title border-bottom py-3'>POPULAR COURSES</h1>
			<div className='row justify-content-between mt-3'>
				<div className='col-lg-3 col-sm-12b mt-5 '>
					<div className='card-body rounded-0 card px-3'>
						<img src={require('../../assets/images/first-crop.png')} alt='img' className='mb-0' />
						<h1 className='course-title'>Branding Like A proffesional im 11 days</h1>
						<p className='course-text'>Learn how to integrate an api with react and redux</p>
						<div>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star'></i>
						</div>
					</div>
					<div className='px-4 py-1 text-secondary border-left border-right border-bottom'>
						<p classname="ml-2 card-footer-text">
							<i className='fas fa-clock'></i> 7 Lessons<i  className="fas ml-4 fa-user"></i> Umukoro
						</p>
					</div>
				</div>
				<div className='col-lg-3 col-sm-12b mt-5 '>
					<div className='card-body rounded-0 card px-3'>
						<img src={require('../../assets/images/second-crop.png')} alt='img' className='mb-2 mt-4' />
						<h1 className='course-title'>The Complete SQL Bootcamp 2020: Go from Zero to Hero</h1>
						<p className='course-text'>Learn how to integrate an api with react and redux</p>
						<div>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star'></i>
						</div>
					</div>
					<div className='px-4 py-1 text-secondary border-left border-right border-bottom'>
						<p classname="ml-2 card-footer-text">
							<i className='fas fa-clock'></i> 12 Lessons<i  className="fas ml-4 fa-user"></i> jane
						</p>
					</div>
				</div>
				<div className='col-lg-3 col-sm-12b mt-5 '>
					<div className='card-body rounded-0 card px-3'>
						<img src={require('../../assets/images/third-crop.png')} alt='img' className='mb-3' />
						<h1 className='course-title'>French for Beginners to Advance Training</h1>
						<p className='course-text'>Learn how to integrate an api with react and redux</p>
						<div>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star'></i>
							<i className='fas fa-star'></i>
						</div>
					</div>
					<div className='px-4 py-1 text-secondary border-left border-right border-bottom'>
						<p classname="ml-2 card-footer-text">
							<i className='fas fa-clock'></i> 3 Lessons<i  className="fas ml-4 fa-user"></i> Patrick
						</p>
					</div>
				</div>
				<div className='col-lg-3 col-sm-12b mt-5 '>
					<div className='card-body rounded-0 card px-3'>
						<img src={require('../../assets/images/fourth-crop.png')} alt='img' className='mb-4' />
						<h1 className='course-title'>The Complete Financial Analyst Course 2020</h1>
						<p className='course-text'>Learn how to integrate an api with react and redux</p>
						<div>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star'></i>
						</div>
					</div>
					<div className='px-4 py-1 text-secondary border-left border-right border-bottom'>
						<p classname="ml-2 card-footer-text">
							<i className='fas fa-clock'></i> 0 Lessons<i  className="fas ml-4 fa-user"></i> John
						</p>
					</div>
				</div>
			</div>
			
			<div className='row justify-content-between mt-3'>
				<div className='col-lg-3 col-sm-12b mt-5 '>
					<div className='card-body rounded-0 card px-3'>
						<img src={require('../../assets/images/first-crop.png')} alt='img' className='mb-0' />
						<h1 className='course-title'>Branding Like A proffesional im 11 days</h1>
						<p className='course-text'>Learn how to integrate an api with react and redux</p>
						<div>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star'></i>
						</div>
					</div>
					<div className='px-4 py-1 text-secondary border-left border-right border-bottom'>
						<p classname="ml-2 card-footer-text">
							<i className='fas fa-clock'></i> 7 Lessons<i  className="fas ml-4 fa-user"></i> Umukoro
						</p>
					</div>
				</div>
				<div className='col-lg-3 col-sm-12b mt-5 '>
					<div className='card-body rounded-0 card px-3'>
						<img src={require('../../assets/images/second-crop.png')} alt='img' className='mb-2 mt-4' />
						<h1 className='course-title'>The Complete SQL Bootcamp 2020: Go from Zero to Hero</h1>
						<p className='course-text'>Learn how to integrate an api with react and redux</p>
						<div>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star'></i>
						</div>
					</div>
					<div className='px-4 py-1 text-secondary border-left border-right border-bottom'>
						<p classname="ml-2 card-footer-text">
							<i className='fas fa-clock'></i> 12 Lessons<i  className="fas ml-4 fa-user"></i> jane
						</p>
					</div>
				</div>
				<div className='col-lg-3 col-sm-12b mt-5 '>
					<div className='card-body rounded-0 card px-3'>
						<img src={require('../../assets/images/third-crop.png')} alt='img' className='mb-3' />
						<h1 className='course-title'>French for Beginners to Advance Training</h1>
						<p className='course-text'>Learn how to integrate an api with react and redux</p>
						<div>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star'></i>
							<i className='fas fa-star'></i>
						</div>
					</div>
					<div className='px-4 py-1 text-secondary border-left border-right border-bottom'>
						<p classname="ml-2 card-footer-text">
							<i className='fas fa-clock'></i> 3 Lessons<i  className="fas ml-4 fa-user"></i> Patrick
						</p>
					</div>
				</div>
				<div className='col-lg-3 col-sm-12b mt-5 '>
					<div className='card-body rounded-0 card px-3'>
						<img src={require('../../assets/images/fourth-crop.png')} alt='img' className='mb-4' />
						<h1 className='course-title'>The Complete Financial Analyst Course 2020</h1>
						<p className='course-text'>Learn how to integrate an api with react and redux</p>
						<div>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star text-warning'></i>
							<i className='fas fa-star'></i>
						</div>
					</div>
					<div className='px-4 py-1 text-secondary border-left border-right border-bottom'>
						<p classname="ml-2 card-footer-text">
							<i className='fas fa-clock'></i> 0 Lessons<i  className="fas ml-4 fa-user"></i> John
						</p>
					</div>
				</div>
			</div>
		</div>
	);
}

export default PopularCourses;
