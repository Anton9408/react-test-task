import React, { Component } from 'react';
import './FormRegistration.post.css';
import { Input, Form, Row, Col, AutoComplete, Button } from 'antd';
import 'antd/dist/antd.css';
import IntlTelInput from 'react-intl-tel-input';
import '../../../node_modules/react-intl-tel-input/dist/main.css';
import '../../../node_modules/react-intl-tel-input/dist/libphonenumber.js';



class FormRegistration extends Component {
	state = {
		dataSource: ['Парикмахер', 'Парикмахер-Визажист', 'Frontend Developer', 'Backend Developer', 'Дизайнер', 'Веб-дизайнер'],
	};

	render(){
		const { dataSource } = this.state;

		return (
			<section className="content">
				<div className="content-title"><strong>Зарегистрируйтесь</strong> и начните продавать услуги через интернет сегодня</div>
				<Form className='form'>
					<Row gutter={12}>
						<Col span={12} className='content-col'>
							<label htmlFor="firstName" className='content-label'>Имя</label>
							<Input placeholder="Ваше имя" id='firstName' size='large'/>
						</Col>
						<Col span={12} className='content-col'>
							<label htmlFor="lastName" className='content-label'>Фамилия</label>
							<Input placeholder="Ваша фамилия" id='lastName' size='large' />
						</Col>
					</Row>
					<Row gutter={12} className='content-row'>
						<label htmlFor="profession" className='content-label'>Профессия</label>
						<AutoComplete
							dataSource={dataSource}
							placeholder="Выбирите профессию"
							id='profession'
							filterOption={(inputValue, option) => option.props.children.toUpperCase().indexOf(inputValue.toUpperCase()) !== -1}
							size='large'
						/>
					</Row>
					<Row gutter={12} className='content-row'>
						<label htmlFor="phone" className='content-label'>Телефон</label>
						<IntlTelInput
							preferredCountries={['ru']}
							css={ ['intl-tel-input', 'ant-input form-control'] }
							id='phone'
							size='large'
						/>
					</Row>
					<Row className='content-row btn'>
						<Button type="primary" size='large'>Зарегистрироваться</Button>
					</Row>
				</Form>
			</section>
		);
	}
}

export default FormRegistration;
