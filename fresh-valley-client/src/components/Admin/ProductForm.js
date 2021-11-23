/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { useAlert } from 'react-alert';
// import Loader from '../layout/Loader/Loader';
import { clearErrors, createProduct } from '../../actions/productAction';
import { NEW_PRODUCT_RESET } from '../../constants/productConstants';
import { useHistory } from 'react-router-dom';

const ProductForm = () => {
	const dispatch = useDispatch();
	const alert = useAlert();

	let history = useHistory();

	const { loading, error, success } = useSelector((state) => state.newProduct);

	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [Stock, setStock] = useState(0);
	const [images, setImages] = useState([]);
	const [imagesPreview, setImagesPreview] = useState([]);

	const categories = [
		'Foods',
		'Cosmetics',
		'Clothing',
		'Footwear',
		'Laptop',
		'Mobile',
		'Camera',
		'SmartPhones',
	];

	const createProductSubmitHandler = (e) => {
		e.preventDefault();

		const myForm = new FormData();

		myForm.set('name', name);
		myForm.set('price', price);
		myForm.set('description', description);
		myForm.set('category', category);
		myForm.set('Stock', Stock);

		images.forEach((image) => {
			myForm.append('images', image);
		});
		dispatch(createProduct(myForm));

		// for (let key of myForm.entries()) {
		// 	console.log(key[0] + ', ' + key[1]);
		// }
	};

	const createProductImagesChange = (e) => {
		const files = Array.from(e.target.files);

		setImages([]);
		setImagesPreview([]);

		files.forEach((file) => {
			const reader = new FileReader();

			reader.onload = () => {
				if (reader.readyState === 2) {
					setImagesPreview((old) => [...old, reader.result]);
					setImages((old) => [...old, reader.result]);
				}
			};

			reader.readAsDataURL(file);
		});
	};

	useEffect(() => {
		if (error) {
			alert.error(error);
			console.log(error);
			dispatch(clearErrors());
		}

		if (success) {
			alert.success('Product Created Successfully');
			history.push('/admin/products');
			dispatch({ type: NEW_PRODUCT_RESET });
		}
	}, [dispatch, alert, error, history, success]);

	return (
		<>
			<div className='flex flex-col items-center justify-center h-auto px-4 py-10 bg-gray-100 sm:px-6 lg:px-8 '>
				<div className='w-full max-w-md p-8 space-y-8 bg-white rounded shadow'>
					<div>
						<h2 className='text-2xl font-extrabold text-center text-gray-900 md:text-3xl'>
							Create Product
						</h2>
					</div>
					<form
						className='mt-8 space-y-6'
						encType='multipart/form-data'
						onSubmit={createProductSubmitHandler}
					>
						<input type='hidden' name='remember' defaultValue='true' />
						<div className='-space-y-px rounded-md shadow-sm'>
							<div>
								<label htmlFor='email-address' className='sr-only'>
									Name
								</label>
								<input
									name='name'
									type='name'
									required
									className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Product Name'
									onChange={(e) => setName(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor='email-address' className='sr-only'>
									Price
								</label>
								<input
									name='price'
									type='number'
									required
									className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Price'
									onChange={(e) => setPrice(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor='email-address' className='sr-only'>
									Stock
								</label>
								<input
									name='Stock'
									type='number'
									required
									className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Stock'
									onChange={(e) => setStock(e.target.value)}
								/>
							</div>
							<div>
								<label htmlFor='email-address' className='sr-only'>
									Description
								</label>
								<textarea
									className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									placeholder='Product Description'
									value={description}
									onChange={(e) => setDescription(e.target.value)}
									cols='30'
									rows='1'
								></textarea>
							</div>
							<div>
								<select
									className='relative block w-full px-3 py-2 text-gray-900 placeholder-gray-500 border border-gray-300 rounded-none appearance-none rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm'
									onChange={(e) => setCategory(e.target.value)}
								>
									<option value=''>Choose Category</option>
									{categories.map((cate) => (
										<option key={cate} value={cate}>
											{cate}
										</option>
									))}
								</select>
							</div>
						</div>
						<div className='text-center'>
							{imagesPreview.map((image, index) => (
								<img
									key={index}
									src={image}
									alt='Product Preview'
									className='inline-block w-10 h-10 m-2 rounded-full ring-2 ring-white'
								/>
							))}

							<div className='flex items-center justify-center bg-grey-lighter'>
								<label className='flex items-center w-48 px-1 py-2 tracking-wide text-blue-500 uppercase bg-white border rounded-lg shadow-lg cursor-pointer sm:w-52 justify-evenly border-blue hover:bg-blue-500 hover:text-white'>
									<svg
										className='w-8 h-8'
										fill='currentColor'
										xmlns='http://www.w3.org/2000/svg'
										viewBox='0 0 20 20'
									>
										<path d='M16.88 9.1A4 4 0 0 1 16 17H5a5 5 0 0 1-1-9.9V7a3 3 0 0 1 4.52-2.59A4.98 4.98 0 0 1 17 8c0 .38-.04.74-.12 1.1zM11 11h3l-4-4-4 4h3v3h2v-3z' />
									</svg>
									<p className='text-base leading-normal'>Select file</p>
									<input
										type='file'
										name='avatar'
										value=''
										accept='image/*'
										onChange={createProductImagesChange}
										multiple
										className='hidden'
									/>
								</label>
							</div>
						</div>
						<div>
							<button
								type='submit'
								className='relative flex justify-center w-full px-4 py-2 text-sm font-medium text-white bg-green-500 border border-transparent rounded-md group hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
							>
								{loading ? (
									<div className='w-6 h-6 border-4 border-white border-dashed rounded-full spin-slow animate-spin-slow'></div>
								) : (
									'Create Product'
								)}
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
};

export default ProductForm;
