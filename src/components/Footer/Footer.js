import React from 'react';
import './Footer.scss';

function Footer() {
	return (
		<div className="bg-dark">
			<div className='container'>
				<div className='row mt-4 '>
					<div className='col-lg-3 py-5 col-sm-12'>
						<h3
							className='px-5 text-success'
							style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Raleway' }}
						>
							Popular Links
						</h3>
						<div className='mt-3 px-5'>
							<a href='/' className='footer-links '>
								Afrilean for Student
							</a>
							<br />
							<a href='/' className='footer-links'>
								Afrilean for Teachers
							</a>
							<br />
							<a href='/' className='footer-links'>
								Download app
							</a>
							<br />
							<a href='/' className='footer-links'>
								About us
							</a>
							<br />
							<a href='/' className='footer-links'>
								Contact us
							</a>
							<br />
						</div>
					</div>
					<div className='col-lg-3 py-5 col-sm-12'>
						<h3
							className='px-5 text-success'
							style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Raleway' }}
						>
							Extra Links
						</h3>
						<div className='mt-3 px-5'>
							<a href='/' className='footer-links '>
								Careers
							</a>
							<br />
							<a href='/' className='footer-links'>
								Blog
							</a>
							<br />
							<a href='/' className='footer-links'>
								Help and Support
							</a>
							<br />
							<a href='/' className='footer-links'>
								Affiliate
							</a>
							<br />
							<br />
						</div>
					</div>
					<div className='col-lg-3 py-5 col-sm-12'>
						<h3
							className='px-5 text-success'
							style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Raleway' }}
						>
							Website Links
						</h3>
						<div className='mt-3 px-5'>
							<a href='/' className='footer-links '>
								Terms
							</a>
							<br />
							<a href='/' className='footer-links'>
								Privacy policy
							</a>
							<br />
							<a href='/' className='footer-links'>
								Cookie Policy
							</a>
							<br />
							<a href='/' className='footer-links'>
								Sitemap
							</a>
							<br />
							<a href='/' className='footer-links'>
								Featured courses
							</a>
							<br />
						</div>
					</div>
					<div className='col-lg-3 py-5 col-sm-12'>
						<h3
							className='px-5 text-success'
							style={{ fontSize: '20px', fontWeight: 'bold', fontFamily: 'Raleway' }}
						>
							Social Links
						</h3>
						<div className='mt-3 px-5'>
							<a href='/' className='footer-links '>
								<i className='fab fa-facebook-f mr-3 fa-2x text-light'></i>
							</a>
							<a href='/' className='footer-links'>
              <i className="fab fa-twitter mr-3 fa-2x text-light"></i>
							</a>
							<a href='/' className='footer-links'>
              <i className="fab fa-instagram mr-3 fa-2x text-light"></i>
							</a>
						</div>
					</div>
				</div>
				<h1 className='py-2 border-top copyright-text'>© Afrilearn. All Rights Reserved.</h1>
			</div>
		</div>
	);
}

export default Footer;
