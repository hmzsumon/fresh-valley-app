/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import Search from './Search';
import { clearErrors, getProducts } from '../../actions/productAction';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import Loader from '../layout/Loader/Loader';
import Navbar from '../../components/Header/Navbar';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/solid';

const Home = ({ match }) => {
	const dispatch = useDispatch();
	const [currentPage, setCurrentPage] = useState(0);

	const { loading, error, products, totalPages } = useSelector(
		(state) => state.products
	);

	const pages = new Array(totalPages).fill(null).map((v, i) => i);

	useEffect(() => {
		if (error) {
			console.log(error);
			dispatch(clearErrors());
		}
		dispatch(getProducts(currentPage));
	}, [dispatch, error, currentPage]);

	const gotoPrevious = () => {
		setCurrentPage(Math.max(0, currentPage - 1));
	};

	const gotoNext = () => {
		setCurrentPage(Math.min(currentPage + 1));
	};

	return (
		<>
			{loading ? (
				<Loader />
			) : (
				<>
					<Navbar />
					<Search />
					<div className='grid grid-cols-1 gap-8 px-10 py-10 sm:grid-cols-2 md:grid-cols-3 '>
						{products &&
							products.map((product) => (
								<ProductCard key={product._id} product={product} />
							))}
					</div>
					{/* Start Pagination */}
					<div className='flex items-center justify-between px-4 py-3 bg-white border-t border-gray-200 sm:px-6'>
						<div className='flex justify-between flex-1 sm:hidden'>
							<button className='relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
								Previous
							</button>
							<button className='relative inline-flex items-center px-4 py-2 ml-3 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-gray-50'>
								Next
							</button>
						</div>
						<div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between'>
							<div>
								<p className='text-sm text-gray-700'>
									Showing <span className='font-medium'>1</span> to{' '}
									<span className='font-medium'>9</span> of{' '}
									<span className='font-medium'>{currentPage + 1}</span> results
								</p>
							</div>
							<div>
								<nav
									className='relative z-0 inline-flex -space-x-px rounded-md shadow-sm'
									aria-label='Pagination'
								>
									<button
										className='relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-l-md hover:bg-gray-50'
										onClick={gotoPrevious}
									>
										<span className='sr-only'>Previous</span>
										<ChevronLeftIcon className='w-5 h-5' aria-hidden='true' />
									</button>
									{pages.map((pageIndex) => (
										<button
											aria-current='page'
											className='relative z-10 inline-flex items-center px-4 py-2 text-sm font-medium text-indigo-600 border border-indigo-500 bg-indigo-50'
											onClick={() => setCurrentPage(pageIndex)}
											key={pageIndex}
										>
											{pageIndex + 1}
										</button>
									))}

									<button
										className='relative inline-flex items-center px-2 py-2 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-r-md hover:bg-gray-50'
										onClick={gotoNext}
									>
										<span className='sr-only'>Next</span>
										<ChevronRightIcon className='w-5 h-5' aria-hidden='true' />
									</button>
								</nav>
							</div>
						</div>
					</div>
				</>
			)}
		</>
	);
};

export default Home;
