export function catchError(error) {
	switch (error) {
		case 400:
			alert(new Error('Убедитесь что вы указали правильные данные!'))

		case 401:
			throw new Error(
				'Вход не удался, данные неправильны, или срок годности токена исчерпан!'
			)

		case 403:
			throw new Error(
				'Запрос был корректным, но сервер отказывает в выполнении из-за отсутствия необходимых прав доступа.'
			)

		case 404:
			throw new Error('Сервер не может найти запрашиваемый ресурс.')

		default:
			throw new Error('Что-то пошло не так :(')
	}
}
