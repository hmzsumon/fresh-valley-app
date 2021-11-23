import React from 'react';
import { Link } from 'react-router-dom';

import NotificationDropdown from './NotificationDropdown.js';
import UserOptions from '../Header/UserOptions.js';

export default function Sidebar() {
	const [collapseShow, setCollapseShow] = React.useState('hidden');
	return (
		<>
			<nav className='md:bg-green-900 md:left-0 md:block md:fixed md:top-0 md:bottom-0 md:overflow-y-auto md:flex-row md:flex-nowrap md:overflow-hidden shadow-xl bg-white flex flex-wrap items-center justify-between relative md:w-64 z-10 py-4 px-6'>
				<div className='md:flex-col md:items-stretch md:min-h-full md:flex-nowrap px-0 flex flex-wrap items-center justify-between w-full mx-auto'>
					{/* Toggler */}
					<button
						className='cursor-pointer text-black opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
						type='button'
						onClick={() => setCollapseShow('bg-green-900 m-2 py-3 px-6')}
					>
						<svg
							xmlns='http://www.w3.org/2000/svg'
							className='h-6 w-6'
							fill='none'
							viewBox='0 0 24 24'
							stroke='currentColor'
						>
							<path
								strokeLinecap='round'
								strokeLinejoin='round'
								strokeWidth={2}
								d='M4 6h16M4 12h16M4 18h16'
							/>
						</svg>
					</button>
					{/* Brand */}
					<Link
						className='md:block text-left md:pb-2 text-gray-600  md:text-white mr-0 inline-block whitespace-nowrap text-lg uppercase font-bold p-4 px-0'
						to='/'
					>
						fresh valley
					</Link>
					{/* User */}
					<ul className='md:hidden items-center flex flex-wrap list-none'>
						<li className='inline-block relative'>
							<NotificationDropdown />
						</li>
						<li className='inline-block relative'>
							<UserOptions />
						</li>
					</ul>
					{/* Collapse */}
					<div
						className={
							'md:flex md:flex-col md:items-stretch md:opacity-100 md:relative md:mt-4 md:shadow-none shadow absolute top-0 left-0 right-0 z-40 overflow-y-auto overflow-x-hidden h-auto items-center flex-1 rounded ' +
							collapseShow
						}
					>
						{/* Collapse header */}
						<div className='md:min-w-full md:hidden block pb-4 mb-4 border-b border-solid border-blueGray-200'>
							<div className='flex flex-wrap'>
								<div className='w-6/12'>
									<Link
										className='md:block text-left md:pb-2 text-white mr-0 inline-block whitespace-nowrap text-sm uppercase font-bold p-4 px-0'
										to='/'
									>
										fresh valley
									</Link>
								</div>
								<div className='w-6/12 flex justify-end'>
									<button
										type='button'
										className='cursor-pointer text-red-500 opacity-50 md:hidden px-3 py-1 text-xl leading-none bg-transparent rounded border border-solid border-transparent'
										onClick={() => setCollapseShow('hidden')}
									>
										<svg
											xmlns='http://www.w3.org/2000/svg'
											className='h-6 w-6'
											fill='none'
											viewBox='0 0 24 24'
											stroke='currentColor'
										>
											<path
												strokeLinecap='round'
												strokeLinejoin='round'
												strokeWidth={2}
												d='M6 18L18 6M6 6l12 12'
											/>
										</svg>
									</button>
								</div>
							</div>
						</div>

						{/* Navigation */}
						<ul className='md:flex-col md:min-w-full flex flex-col list-none'>
							<li className='items-center'>
								<Link
									className={`flex items-center ${
										window.location.pathname === '/admin/products'
											? 'text-pink-500 hover:text-pink-600'
											: 'text-white'
									}  text-xs uppercase py-3 font-bold block`}
									to='/admin/products'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5 opacity-75 mr-2 text-sm'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
									</svg>
									Manage Products
								</Link>
							</li>

							<li className='items-center ml-2'>
								<Link
									className={`flex items-center ${
										window.location.pathname === '/admin/product'
											? 'text-pink-500 hover:text-pink-600'
											: 'text-white'
									} text-xs uppercase py-3 font-bold block`}
									to='/admin/product'
								>
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
									Add Product
								</Link>
							</li>
							<li className='items-center ml-2'>
								<Link
									className={`flex items-center ${
										window.location.pathname === '/admin/update'
											? 'text-pink-500 hover:text-pink-600'
											: 'text-white'
									} text-xs uppercase py-3 font-bold block`}
									to='/admin/update'
								>
									<svg
										xmlns='http://www.w3.org/2000/svg'
										className='h-5 w-5 text-blueGray-400 mr-2 text-sm'
										viewBox='0 0 20 20'
										fill='currentColor'
									>
										<path d='M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z' />
									</svg>
									Edit Product
								</Link>
							</li>
						</ul>
						{/* Divider */}
						{/* <hr className='my-4 md:min-w-full' /> */}
						{/* Heading */}
					</div>
				</div>
			</nav>
		</>
	);
}
