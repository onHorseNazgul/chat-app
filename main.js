import {
	apiUrl,
	autorizationContent,
	autorizationForm,
	autorizeUser,
	emailInput,
	sendCodeBtn,
} from './src/modules/autorization.js'
import {
	confirmContent,
	confirmForm,
	tokenInput,
} from './src/modules/confirm.js'
import { catchError } from './src/modules/custom-error.js'
import { openSection } from './src/modules/pop-up.js'

autorizationForm.addEventListener('submit', e => {
	e.preventDefault()

	autorizeUser()
	emailInput.value = ''
})

sendCodeBtn.addEventListener('click', e => {
	openSection(confirmContent, autorizationContent)
	e.preventDefault()
})

const pageHeaders = {
	'Content-Type': 'application/json;charset=utf-8',
	'Authorization': `Bearer ${getCookie('token')}`,
}

function setCookie(token) {
	const date = new Date()
	const expires = date.setDate(date.getHours() + 1)
	const cookie =
		(document.cookie = `token=${token}; expires=${date.toUTCString()}`)
}

function getCookie(cname) {
	let name = cname + '='
	let decodedCookie = decodeURIComponent(document.cookie)
	let ca = decodedCookie.split(';')
	for (let i = 0; i < ca.length; i++) {
		let c = ca[i]
		while (c.charAt(0) == ' ') {
			c = c.substring(1)
		}
		if (c.indexOf(name) == 0) {
			return c.substring(name.length, c.length)
		}
	}
	return ''
}

confirmForm.addEventListener('submit', async e => {
	e.preventDefault()

	setCookie(tokenInput.value)

	try {
		const request = await fetch(apiUrl, {
			method: 'POST',
			headers: pageHeaders,
		})

		if (request.ok) {
			const response = await request.json()
			console.log('Sucess', response)
		} else {
			catchError(request.status)
		}
	} catch (error) {
		console.error(error)
	}
})
