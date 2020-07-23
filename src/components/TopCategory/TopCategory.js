import React from 'react';
import { NavLink } from 'reactstrap';
import './TopCategory.scss';

function TopCategory() {
	return (
		<div className='container py-3'>
			<h1 className='category-title mt-3 text-center border-bottom py-3'>Top categories</h1>
			<div className='row text-center mx-auto justify-content-center'>
				<div className='col-lg-3 col-sm-12 mt-3 px-3 mx-auto justify-content-center'>
					<img
						src={require('../../assets/images/pencil-typography-black-design.webp')}
						alt='img'
						className='category-image'
					/>
					<NavLink href='/' className='border py-3 mx-auto px-2 category-text'>
						Design
					</NavLink>
				</div>
				<div className='col-lg-3 col-sm-12 mt-3 px-3 mx-auto justify-content-center'>
					<img src={require('../../assets/images/development.webp')} alt='img' className='category-image ' />
					<NavLink href='/' className='border py-3 mx-auto px-2 category-text'>
						Development
					</NavLink>
				</div>
				<div className='col-lg-3 col-sm-12 mt-3 px-3 mx-auto justify-content-center'>
					<img src={require('../../assets/images/marketing.webp')} alt='img' className='category-image' />
					<NavLink href='/' className='border py-3 px-2 mx-auto  category-text'>
						Marketing
					</NavLink>
				</div>
				<div className='col-lg-3 col-sm-12 mt-3 mx-auto px-3'>
					<img src={require('../../assets/images/itsoftware.webp')} alt='img' className='category-image' />
					<NavLink href='/' className='border py-3 px-2 mx-auto category-text'>
						It & Software
					</NavLink>
				</div>
      </div>
      <div className='row text-center mx-auto justify-content-center'>
				<div className='col-lg-3 col-sm-12 mt-3 px-3 mx-auto justify-content-center'>
					<img
						src={require('../../assets/images/personal.webp')}
						alt='img'
						className='category-image'
					/>
					<NavLink href='/' className='border py-3 mx-auto px-2 category-text'>
						Personal Development
					</NavLink>
				</div>
				<div className='col-lg-3 col-sm-12 mt-3 px-3 mx-auto justify-content-center'>
					<img src={require('../../assets/images/business.webp')} alt='img' className='category-image ' />
					<NavLink href='/' className='border py-3 mx-auto px-2 category-text'>
						Business
					</NavLink>
				</div>
				<div className='col-lg-3 col-sm-12 mt-3 px-3 mx-auto justify-content-center'>
					<img src={require('../../assets/images/photography.webp')} alt='img' className='category-image' />
					<NavLink href='/' className='border py-3 px-2 mx-auto  category-text'>
						Photography
					</NavLink>
				</div>
				<div className='col-lg-3 col-sm-12 mt-3 mx-auto px-3'>
					<img src={require('../../assets/images/music.webp')} alt='img' className='category-image' />
					<NavLink href='/' className='border py-3 px-2 mx-auto category-text'>
						Music
					</NavLink>
				</div>
			</div>
		</div>
	);
}

export default TopCategory;
