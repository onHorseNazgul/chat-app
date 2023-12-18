import {
	autorizationContent,
	autorizationForm,
	autorizeUser,
	emailInput,
	sendCodeBtn,
} from './src/modules/autorization.js'
import { confirmContent } from './src/modules/confirm.js'

import { openSection } from './src/modules/pop-up.js'

autorizationForm.addEventListener('submit', e => {
	e.preventDefault()

	autorizeUser()
	emailInput.value = ''
})

window.addEventListener('load', () => {
	autorizationContent.style.display = 'none'
	confirmContent.style.display = 'none'

	openSection(confirmContent, autorizationContent)
})

sendCodeBtn.addEventListener('click', e => {
	e.preventDefault()
	openSection(confirmContent, autorizationContent)
})
