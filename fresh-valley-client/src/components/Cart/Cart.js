/* This example requires Tailwind CSS v2.0+ */
import { Fragment } from 'react';
import Navbar from '../Header/Navbar';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItemsToCart, removeItemsFromCart } from '../../actions/cartAction';

export default function Cart() {
	const dispatch = useDispatch();

	const { cartItems } = useSelector((state) => state.cart);

	// increase Quantity
	const increaseQuantity = (id, quantity, stock) => {
		const newQty = quantity + 1;
		if (stock <= quantity) {
			return;
		}
		dispatch(addItemsToCart(id, newQty));
	};

	// Decrease Quantity
	const decreaseQuantity = (id, quantity) => {
		const newQty = quantity - 1;
		if (1 >= quantity) {
			return;
		}
		dispatch(addItemsToCart(id, newQty));
	};

	// remove Item From Cart
	const deleteCartItems = (id) => {
		dispatch(removeItemsFromCart(id));
	};

	return (
		<>
			<Navbar />
			{cartItems.length === 0 ? (
				<div className='flex flex-col items-center justify-center h-screen'>
					<h1 className='text-2xl font-medium '>Your Cart is Empty</h1>
					<div className='flex justify-center mt-6 text-sm text-center text-gray-500'>
						<p>
							<Link to='/'>
								<button
									type='button'
									className='font-medium text-indigo-600 hover:text-indigo-500'
								>
									Continue Shopping<span aria-hidden='true'> &rarr;</span>
								</button>
							</Link>
						</p>
					</div>
				</div>
			) : (
				<div className='grid gap-5 mx-5 mt-5 md:grid-cols-3 '>
					<div className=' md:col-span-2 md:flex-1 px-7'>
						<h1 className='text-2xl font-medium text-gray-600'>
							Shopping cart
						</h1>
						<div className='mt-8 '>
							<div className='flow-root'>
								<ul className='my-6 divide-y divide-gray-200'>
									{cartItems.map((item) => (
										<li key={Math.random()} className='flex py-6'>
											<div className='flex-shrink-0 w-24 h-24 overflow-hidden border border-gray-200 rounded-md'>
												<img
													src={item.image}
													alt={item.name}
													className='object-cover object-center w-full h-full'
												/>
											</div>

											<div className='flex flex-col flex-1 ml-4'>
												<div>
													<div className='flex justify-between text-base font-medium text-gray-900'>
														<h3>
															<a href={item.href}>{item.name}</a>
														</h3>
														<p className='ml-4'>{`$${item.price}`}</p>
													</div>
													<p className='mt-1 text-sm text-gray-500'>
														{item.color}
													</p>
												</div>
												<div className='flex items-end justify-between flex-1 text-sm'>
													<div className='flex items-center justify-center space-x-3 text-lg font-medium text-gray-500'>
														<div>
															<p className=''>Qty</p>
														</div>
														<div className='flex space-x-3'>
															<button
																className='cursor-pointer'
																onClick={() =>
																	decreaseQuantity(item.product, item.quantity)
																}
															>
																-
															</button>
															<span>{item.quantity}</span>
															<button
																className='cursor-pointer'
																onClick={() =>
																	increaseQuantity(
																		item.product,
																		item.quantity,
																		item.stock
																	)
																}
															>
																+
															</button>
														</div>
													</div>

													<div className='flex'>
														<button
															type='button'
															className='font-medium text-indigo-600 hover:text-indigo-500'
															onClick={() => deleteCartItems(item.product)}
														>
															Remove
														</button>
													</div>
												</div>
											</div>
										</li>
									))}
								</ul>
							</div>
						</div>
					</div>
					<div className=''>
						<div className='px-4 py-6 border-t border-gray-200 sm:px-6'>
							<div className='flex justify-between text-base font-medium text-gray-900'>
								<p>Subtotal</p>
								<p>{`$${cartItems.reduce(
									(acc, item) => acc + item.quantity * item.price,
									0
								)}`}</p>
							</div>

							<div className='mt-6'>
								<Link
									to='/checkout'
									className='flex items-center justify-center px-6 py-3 text-base font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700'
								>
									Checkout
								</Link>
							</div>

							<div className='flex justify-center mt-6 text-sm text-center text-gray-500'>
								<p>
									or{' '}
									<Link to='/'>
										<button
											type='button'
											className='font-medium text-indigo-600 hover:text-indigo-500'
										>
											Continue Shopping<span aria-hidden='true'> &rarr;</span>
										</button>
									</Link>
								</p>
							</div>
						</div>
					</div>
				</div>
			)}
		</>
	);
}
