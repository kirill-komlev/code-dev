import { createPortal } from 'react-dom'

export default function Modal({ children, open, className }) {
	return createPortal(
		<dialog
			className={className}
			open={open}
		>
			{children}
		</dialog>,
		document.getElementById('modal')
	)
}
