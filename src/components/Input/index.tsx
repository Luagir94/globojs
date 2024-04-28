import React, { ComponentPropsWithoutRef, forwardRef } from 'react'

// Definimos una interfaz que extiende las propiedades del elemento <Input> de HTML
type InputProps = ComponentPropsWithoutRef<'input'>

const Input = forwardRef<HTMLInputElement, InputProps>(
	({ className = '', ...otherProps }, ref: React.Ref<HTMLInputElement>) => {
		return (
			<input
				ref={ref}
				{...otherProps}
				className={
					' text-red-600 border-red-600 border-2 border-solid rounded p-2 h-10 ' +
					(className ? ` ${className}` : ' w-32')
				}
			/>
		)
	},
)

export default Input
