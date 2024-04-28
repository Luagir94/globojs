import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

type ButtonProps = ComponentPropsWithoutRef<'button'>

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
	(
		{ children, className = '', ...otherProps },
		ref: React.Ref<HTMLButtonElement>,
	) => {
		return (
			<button
				ref={ref}
				{...otherProps}
				className={
					' text-red-600 border-red-600 border-2 border-solid rounded p-2 h-10 ' +
					(className ? ` ${className}` : ' w-32')
				}
			>
				{children}
			</button>
		)
	},
)

export default Button
