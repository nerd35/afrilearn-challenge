import React, { useState } from 'react';
import './Navigation.scss';
import {
	Collapse,
	Navbar,
	NavbarToggler,
	NavbarBrand,
	Nav,
	NavItem,
	NavLink,
	Form,
	Input,
	Container,
	FormGroup
} from 'reactstrap';

const Navigation = (props) => {
	const [isOpen, setIsOpen] = useState(false);

	const toggle = () => setIsOpen(!isOpen);

	return (
		<div className='container-fluid'>
			<Navbar className='shadow fixed-top navbar-section navbar-light navbar' light expand='md'>
				<Container>
					<NavbarBrand href='/'>
						<img src={require('../../assets/images/afrilearn_logo.png')} alt='logo' className='logo' />
					</NavbarBrand>
					<NavbarToggler onClick={toggle} />
					<Collapse isOpen={isOpen} navbar>
						<Nav className='mx-auto' navbar>
							<NavItem>
								<NavLink href='#' className='navigation-link'>
									about
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='#' className='navigation-link'>
									faq
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='#' className='navigation-link'>
									Blog
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='#' className='navigation-link'>
									forum
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='#' className='navigation-link'>
									contact
								</NavLink>
							</NavItem>
							<Form>
								<FormGroup className="px-3 mt-1">
									<span>
										<i class='fas fa-search' aria-hidden='true'></i>
									</span>
									<Input type='text' className='form-rounded' placeholder='Search' />
								</FormGroup>
							</Form>
						</Nav>
						<Nav navbar>
							<NavItem className='px-3'>
								<NavLink href='#' className='btn btn-success btn-sm text-light mb-2 px-4 border-0'>
									LOGIN
								</NavLink>
							</NavItem>
							<NavItem>
								<NavLink href='#' className='btn btn-danger btn-sm text-light px-3 border-0'>
									Register
								</NavLink>
							</NavItem>
						</Nav>
					</Collapse>
				</Container>
			</Navbar>
		</div>
	);
};

export default Navigation;
