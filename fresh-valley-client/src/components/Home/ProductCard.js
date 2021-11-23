import React, { useState } from 'react';
import { addItemsToCart } from '../../actions/cartAction';
import { useAlert } from 'react-alert';
import { useDispatch } from 'react-redux';

const ProductCard = (props) => {
	const { product } = props;

	const dispatch = useDispatch();
	const alert = useAlert();
	const [quantity] = useState(1);

	const addToCartHandler = () => {
		// console.log(product._id);
		dispatch(addItemsToCart(product._id, quantity));
		alert.success('Item Added To Cart');
	};
	return (
		<div className='flex flex-col items-center justify-center bg-white rounded-lg shadow-lg'>
			<img
				src={product.images[0].url}
				alt='Marks Milk'
				className='max-w-full rounded h-60 '
			/>
			<div className='p-6'>
				<h2 className='mb-2 font-bold text-purple-800 text-1xl'>
					{product.name}
				</h2>
			</div>
			<div className='flex items-center justify-around w-full mb-4'>
				<p className='text-3xl font-bold text-green-500'>${product.price}</p>
				<button
					className='px-5 py-2 font-bold text-white bg-green-500 rounded'
					onClick={addToCartHandler}
				>
					Buy Now
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
