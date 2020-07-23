import React from 'react';
import { NavLink } from 'reactstrap';
import './PastQuestions.scss';

function PastQuestions() {
	return (
		<div className='container mt-3 mb-5 '>
			<h1 className='past-question-title text-center border-bottom py-3'>Free Past Questions</h1>
			<div className='row'>
				<div className='col-lg-3 col-sm-6 mt-4 text-center'>
					<div className='waec-logo-div justify-content-center mx-auto shadow text-center'>
						<NavLink href='/'>
							<img src={require('../../assets/images/waec.png')} alt='logo' className='waec-logo py-3' />
						</NavLink>
					</div>
					<p className=' mt-3 text-center waec-logo-text'>WASSCE</p>
				</div>
				<div className='col-lg-3 col-sm-6 mt-4'>
					<div className='waec-logo-div mx-auto justify-content-center shadow text-center'>
						<NavLink href='/'>
							<img
								src={require('../../assets/images/Necologo.a9dac693.png')}
								alt='logo'
								className='waec-logo py-3'
							/>
						</NavLink>
					</div>
					<p className=' mt-3 text-center waec-logo-text'>NECO</p>
				</div>
				<div className='col-lg-3 col-sm-6 mt-4'>
					<div className='waec-logo-div mx-auto justify-content-center shadow text-center'>
						<NavLink href='/'>
							<img
								src={require('../../assets/images/Necologo.a9dac693.png')}
								alt='logo'
								className='waec-logo py-3'
							/>
						</NavLink>
					</div>
					<p className=' mt-3 text-center waec-logo-text'>JAMB</p>
				</div>
				<div className='col-lg-3 col-sm-6 mt-4 mx-auto justify-content-center'>
					<div className='waec-logo-div mx-auto justify-content-center shadow text-center'>
						<NavLink href='/'>
							<img src={require('../../assets/images/waec.png')} alt='logo' className='waec-logo py-3' />
						</NavLink>
					</div>
					<p className=' mt-3 text-center  waec-logo-text'>GCE</p>
				</div>
			</div>
		</div>
	);
}

export default PastQuestions;
