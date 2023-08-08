'use client';
import {CustomButtonProps} from '@/types';

import React from 'react';

const CustomButton =
	({
		title,
		containerStyles,
		handleClick,
	}: CustomButtonProps) => {
		return (
			<div>
				<button
					disabled={
						false
					}
					type={
						'button'
					}
					className={`custom-btn ${containerStyles}`}
					onClick={
						handleClick
					}>
					{
						title
					}
				</button>
			</div>
		);
	};

export default CustomButton;
