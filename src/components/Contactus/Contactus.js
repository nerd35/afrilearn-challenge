import React from 'react';
import { Col, Row, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './Contactus.scss';

function Contactus() {
	return (
		<div className='pt-5'>
			<div className='container bg-light'>
				<Form className='py-5 mx-auto'>
					<Row form className='justify-content-center'>
						<Col md={4}>
							<FormGroup className='px-4'>
								<Label for='exampleEmail'>Your Name (required)</Label>
								<Input type='Text' className='h-100' id='exampleEmail' />
							</FormGroup>
							<FormGroup className='px-4'>
								<Label for='exampleEmail'>Your Email (required)</Label>
								<Input type='email' className='h-100' id='exampleEmail' />
							</FormGroup>
							<FormGroup className='px-4'>
								<Label for='exampleEmail'>Subject</Label>
								<Input type='email' className='h-100' id='exampleEmail' />
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup className='px-4'>
								<Label for='exampleEmail'>Your Message</Label>
								<Input type='textarea' rows={8} className='h-100' id='exampleEmail' />
							</FormGroup>
						</Col>
					</Row>
					<Row form className='justify-content-center mt-3'>
						<Col md={4}>
							<FormGroup className='px-4'>
								<h1 className='mt-2' style={{ fontSize: '14px' }}>
									We will contact you within one business day.
								</h1>
							</FormGroup>
						</Col>
						<Col md={4}>
							<FormGroup className='px-4 float-right'>
								<Button className='btn botder-0 rounded-0 px-3  btn-primary'>SEND MESSAGE</Button>
							</FormGroup>
						</Col>
					</Row>
				</Form>
			</div>
		</div>
	);
}

export default Contactus;
