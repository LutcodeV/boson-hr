// MASK
const inputsTypeTel = document.querySelectorAll('input[type="tel"]')
if(inputsTypeTel.length > 0) {
	inputsTypeTel.forEach((input) => {
		new Inputmask({
			mask: '+7 999 999 99 99',
			placeholder: '+7 XXX XXX XX XX',
		}).mask(input);
	})
}

// VACANCIES FILTER
const vacanciesFilter = document.querySelectorAll('[data-vacancy-filter]');
if(vacanciesFilter.length > 0) {
	vacanciesFilter.forEach((button) => {
		const filter = button.getAttribute('data-vacancy-filter');
		const vacancies = document.querySelectorAll('[data-vacancy-type]');
		button.addEventListener('click', () => {
			vacanciesFilter.forEach((button) => {
				button.classList.remove('vacancies-filter--active');
			})
			button.classList.add('vacancies-filter--active');
			if(filter === 'all') {
				vacancies.forEach((vacancy) => {
					vacancy.style.display = 'flex';
				})
			} else {
				vacancies.forEach((vacancy) => {
					if(vacancy.getAttribute('data-vacancy-type') !== filter) {
						vacancy.style.display = 'none';
					} else {
						vacancy.style.display = 'flex';
					}
				})
			}
		})
	})
}
