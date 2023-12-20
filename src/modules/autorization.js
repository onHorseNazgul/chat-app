import { catchError } from './custom-error.js'

export const autorizationContent = document.querySelector(
	'.autorization-content'
)
export const autorizationForm = document.querySelector('#autorization-form')
export const emailInput = document.querySelector('#autorization-input')
export const sendCodeBtn = document.querySelector('#send-code')

export const apiUrl = 'https://edu.strada.one/api/user'
const headers = {
	'Content-Type': 'application/json;charset=utf-8',
}

async function fetchRequest(url, method, headers, body = null) {
	try {
		const request = await fetch(url, {
			method: method,
			headers: headers,
			body: body,
		})
		if (!request.ok) {
			catchError(request.status)
		}
		return request.json()
	} catch (error) {
		throw new Error(error)
	}
}

export async function autorizeUser() {
	try {
		const emailStorage = {
			email: emailInput.value,
		}
		const response = await fetchRequest(
			apiUrl,
			'POST',
			headers,
			JSON.stringify(emailStorage)
		)

		if (response) {
			console.log(
				'Запрос прошел успешно, проверяйте свой email:',
				response.email
			)
		}
	} catch (error) {
		console.error(error.message)
	}
}
