import React from 'react';
import Header from '../Header/Header';
import WhyChooseUs from '../WhyChooseUs';
import PopularCourses from '../PopularCourses';
import PastQuestions from '../PastQuestions/PastQuestions';
import PersonalLearning from '../PersonalLearning/PersonalLearning';
import TopCategory from '../TopCategory/TopCategory';
import BecomeTutor from '../BecomeTutor/BecomeTutor';
import Contactus from '../Contactus/Contactus';

const Home = () => {
	return (
		<div>
			<Header />
			<WhyChooseUs />
			<PopularCourses />
			<PersonalLearning />
			<PastQuestions />
			<TopCategory />
			<BecomeTutor />
			<Contactus />
		</div>
	);
};

export default Home;
