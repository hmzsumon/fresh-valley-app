import React, { useEffect, useState } from 'react';
import FooterAdmin from './FooterAdmin';
import NavbarAdmin from './NavbarAdmin';
import Sidebar from './Sidebar';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';
import {
	clearErrors,
	getProductDetails,
	updateProduct,
} from '../../actions/productAction';
import { useRouteMatch, useHistory } from 'react-router-dom';
import { UPDATE_PRODUCT_RESET } from '../../constants/productConstants';

const EditProduct = () => {
	const match = useRouteMatch();
	const history = useHistory();
	console.log(match);

	const dispatch = useDispatch();
	const alert = useAlert();

	const { error, product } = useSelector((state) => state.productDetails);
	const {
		loading,
		error: updateError,
		isUpdated,
	} = useSelector((state) => state.product);

	const [name, setName] = useState('');
	const [price, setPrice] = useState(0);
	const [description, setDescription] = useState('');
	const [category, setCategory] = useState('');
	const [Stock, setStock] = useState(0);
	const [images, setImages] = useState([]);
	const [oldImages, setOldImages] = useState([]);
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

	// product id
	const productId = match.params.id;

	// update Product Handler
	const updateProductSubmitHandler = (e) => {
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
		dispatch(updateProduct(productId, myForm));
	};

	// Update Product Image Handler
	const updateProductImagesChange = (e) => {
		const files = Array.from(e.target.files);

		setImages([]);
		setImagesPreview([]);
		setOldImages([]);

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

	// icon for the upload button
	const icon = (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			className='w-5 h-5 mr-2 text-sm text-blueGray-400'
			viewBox='0 0 20 20'
			fill='currentColor'
		>
			<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
		</svg>
	);

	useEffect(() => {
		if (product && product._id !== productId) {
			dispatch(getProductDetails(productId));
		} else {
			setName(product.name);
			setDescription(product.description);
			setPrice(product.price);
			setCategory(product.category);
			setStock(product.Stock);
			setOldImages(product.images);
		}
		if (error) {
			alert.error(error);
			dispatch(clearErrors());
		}

		if (updateError) {
			alert.error(updateError);
			dispatch(clearErrors());
		}

		if (isUpdated) {
			alert.success('Product Updated Successfully');
			history.push('/admin/products');
			dispatch({ type: UPDATE_PRODUCT_RESET });
		}
	}, [
		product,
		productId,
		dispatch,
		error,
		updateError,
		isUpdated,
		alert,
		history,
	]);

	return (
		<div className='w-screen h-screen md:flex'>
			<div className='bg-red-500 md:w-64'>
				<Sidebar />
			</div>
			<div className=' md:flex-1'>
				<NavbarAdmin title={'Edit Product'} icon={icon} />
				<div className='flex items-center justify-center px-1 mt-10 min-h-auto'>
					<div className='w-full max-w-md p-8 space-y-8 bg-white rounded shadow'>
						<div>
							<h2 className='text-2xl font-extrabold text-center text-gray-700 md:text-3xl'>
								Update Product
							</h2>
						</div>
						<form
							className='mt-8 space-y-6'
							encType='multipart/form-data'
							onSubmit={updateProductSubmitHandler}
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
										value={name}
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
										value={price}
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
										value={Stock}
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
										value={category}
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
								{oldImages &&
									oldImages.map((image, index) => (
										<img
											key={index}
											src={image.url}
											alt='Old Product Preview'
											className='inline-block w-10 h-10 m-2 rounded-full ring-2 ring-white'
										/>
									))}

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
											onChange={updateProductImagesChange}
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
				<FooterAdmin />
			</div>
		</div>
	);
};

export default EditProduct;
