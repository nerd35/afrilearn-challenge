import React from 'react';
import { NavLink } from 'reactstrap';
import './Header.scss';

const Header = (props) => {
	return (
		<div className=' container mt-5'>
			<div className="row">
				<div className='mt-5 col-lg-6 col-sm-12'>
					<div className='py-5'>
            <h1 className='mt-5 header-title'>LEARN FROM THE BEST. ANYWHERE.</h1>
            <p className='header-text mt-4'>Afrilearn is Africa’s free education portal. We believe in free, world-class education for Africans, and our mission is to provide excellent educational content for Africans, anywhere.</p>
            <NavLink href='/' className="btn btn-danger btn-lg px-5 w-50 border-0 text-light1">Get Started</NavLink>
					</div>
				</div>
				<div className='mt-5 col-lg-6 col-sm-12'>
          <div className="">
            <img src={require('../../assets/images/content-01.png')} alt="header" style={{ maxWidth: '100%'}}/>
          </div>
				</div>
			</div>
		</div>
	);
};

export default Header;
