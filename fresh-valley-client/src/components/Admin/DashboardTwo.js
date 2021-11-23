import React from 'react';

import Sidebar from './Sidebar.js';
import LineChart from './LineChart.js';
import BarChart from './BarChart.js';
import NavbarAdmin from './NavbarAdmin.js';

export default function Dashboard() {
	return (
		<>
			<Sidebar />
			<div className='relative md:ml-64 bg-blueGray-100'>
				<NavbarAdmin />
				{/* Header */}
				<div className='relative bg-pink-600 md:pt-32 pb-32 pt-12'>
					<div className='px-4 md:px-10 mx-auto w-full'>
						<div>
							{/* Card stats */}
							<div className='flex flex-wrap'>
								<div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
									<div className='relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg'>
										<div className='flex-auto p-4'>
											<div className='flex flex-wrap'>
												<div className='relative w-full pr-4 max-w-full flex-grow flex-1'>
													<h5 className='text-blueGray-400 uppercase font-bold text-xs'>
														Traffic
													</h5>
													<span className='font-semibold text-xl text-blueGray-700'>
														350,897
													</span>
												</div>
												<div className='relative w-auto pl-4 flex-initial'>
													<div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-red-500'>
														<i className='far fa-chart-bar'></i>
													</div>
												</div>
											</div>
											<p className='text-sm text-blueGray-400 mt-4'>
												<span className='text-emerald-500 mr-2'>
													<i className='fas fa-arrow-up'></i> 3.48%
												</span>
												<span className='whitespace-nowrap'>
													Since last month
												</span>
											</p>
										</div>
									</div>
								</div>
								<div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
									<div className='relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg'>
										<div className='flex-auto p-4'>
											<div className='flex flex-wrap'>
												<div className='relative w-full pr-4 max-w-full flex-grow flex-1'>
													<h5 className='text-blueGray-400 uppercase font-bold text-xs'>
														New users
													</h5>
													<span className='font-semibold text-xl text-blueGray-700'>
														2,356
													</span>
												</div>
												<div className='relative w-auto pl-4 flex-initial'>
													<div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-orange-500'>
														<i className='fas fa-chart-pie'></i>
													</div>
												</div>
											</div>
											<p className='text-sm text-blueGray-400 mt-4'>
												<span className='text-red-500 mr-2'>
													<i className='fas fa-arrow-down'></i> 3.48%
												</span>
												<span className='whitespace-nowrap'>
													Since last week
												</span>
											</p>
										</div>
									</div>
								</div>
								<div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
									<div className='relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg'>
										<div className='flex-auto p-4'>
											<div className='flex flex-wrap'>
												<div className='relative w-full pr-4 max-w-full flex-grow flex-1'>
													<h5 className='text-blueGray-400 uppercase font-bold text-xs'>
														Sales
													</h5>
													<span className='font-semibold text-xl text-blueGray-700'>
														924
													</span>
												</div>
												<div className='relative w-auto pl-4 flex-initial'>
													<div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500'>
														<i className='fas fa-users'></i>
													</div>
												</div>
											</div>
											<p className='text-sm text-blueGray-400 mt-4'>
												<span className='text-orange-500 mr-2'>
													<i className='fas fa-arrow-down'></i> 1.10%
												</span>
												<span className='whitespace-nowrap'>
													Since yesterday
												</span>
											</p>
										</div>
									</div>
								</div>
								<div className='w-full lg:w-6/12 xl:w-3/12 px-4'>
									<div className='relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg'>
										<div className='flex-auto p-4'>
											<div className='flex flex-wrap'>
												<div className='relative w-full pr-4 max-w-full flex-grow flex-1'>
													<h5 className='text-blueGray-400 uppercase font-bold text-xs'>
														Performance
													</h5>
													<span className='font-semibold text-xl text-blueGray-700'>
														49,65%
													</span>
												</div>
												<div className='relative w-auto pl-4 flex-initial'>
													<div className='text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-lightBlue-500'>
														<i className='fas fa-percent'></i>
													</div>
												</div>
											</div>
											<p className='text-sm text-blueGray-400 mt-4'>
												<span className='text-emerald-500 mr-2'>
													<i className='fas fa-arrow-up'></i> 12%
												</span>
												<span className='whitespace-nowrap'>
													Since last month
												</span>
											</p>
										</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='px-4 md:px-10 mx-auto w-full -m-24'>
					<div className='flex flex-wrap'>
						<LineChart />
						<BarChart />
					</div>
					<div className='flex flex-wrap mt-4'>
						<div className='w-full xl:w-8/12 mb-12 xl:mb-0 px-4'></div>
						<div className='w-full xl:w-4/12 px-4'></div>
					</div>
					<footer className='block py-4'>
						<div className='container mx-auto px-4'>
							<hr className='mb-4 border-b-1 border-blueGray-200' />
							<div className='flex flex-wrap items-center md:justify-between justify-center'>
								<div className='w-full md:w-4/12 px-4'>
									<div className='text-sm text-blueGray-500 font-semibold py-1'>
										Copyright © {new Date().getFullYear()}{' '}
										<a
											href='https://www.creative-tim.com'
											className='text-blueGray-500 hover:text-blueGray-700 text-sm font-semibold py-1'
										>
											Creative Tim
										</a>
									</div>
								</div>
								<div className='w-full md:w-8/12 px-4'>
									<ul className='flex flex-wrap list-none md:justify-end  justify-center'>
										<li>
											<a
												href='https://www.creative-tim.com'
												className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'
											>
												Creative Tim
											</a>
										</li>
										<li>
											<a
												href='https://www.creative-tim.com/presentation'
												className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'
											>
												About Us
											</a>
										</li>
										<li>
											<a
												href='http://blog.creative-tim.com'
												className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'
											>
												Blog
											</a>
										</li>
										<li>
											<a
												href='https://github.com/creativetimofficial/tailwind-starter-kit/blob/main/LICENSE.md'
												className='text-blueGray-600 hover:text-blueGray-800 text-sm font-semibold block py-1 px-3'
											>
												MIT License
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</footer>
				</div>
			</div>
		</>
	);
}
