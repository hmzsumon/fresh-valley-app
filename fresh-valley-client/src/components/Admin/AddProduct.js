import React from 'react';
import FooterAdmin from './FooterAdmin';
import NavbarAdmin from './NavbarAdmin';
import ProductForm from './ProductForm';
import Sidebar from './Sidebar';

const AddProduct = () => {
	const icon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='h-5 w-5 text-blueGray-400 mr-2 text-sm'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path
				fillRule='evenodd'
				d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
				clipRule='evenodd'
			/>
		</svg>
	);
	return (
		<div className='md:flex  h-screen w-screen'>
			<div className=' md:w-64 bg-red-500'>
				<Sidebar />
			</div>
			<div className=' md:flex-1'>
				<NavbarAdmin title={'Create Product'} icon={icon} />
				<div className='min-h-auto mt-10 px-1'>
					<ProductForm />
				</div>
				<FooterAdmin />
			</div>
		</div>
	);
};

export default AddProduct;
