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

// PARALLAX
if(document.querySelector('.parallax')) {
	window.addEventListener('scroll', () => {
		const parallax = document.querySelector('.parallax');
		const offset = window.pageYOffset; // Получаем текущую прокрутку
		parallax.style.backgroundPositionY = `${offset * 0.5}px`; // Регулируйте множитель для интенсивности эффекта
	});
}

// CHOICE-BLOCK
if (document.querySelector('.choice-block') && document.querySelector('.choice-block__background')) {
	const choiceBlocks = document.querySelectorAll('.choice-block');
	const choiceBackground = document.querySelector('.choice-block__background');
	let currentBlock = choiceBlocks[0]; // Храним текущий выбранный блок

	const updateBackgroundPosition = (block) => {
			choiceBackground.style.height = `${block.offsetHeight}px`;
			choiceBackground.style.width = `${block.offsetWidth}px`;
			choiceBackground.style.top = `${block.offsetTop}px`;
			choiceBackground.style.left = `${block.offsetLeft}px`;
	};

	const isInCenter = (element) => {
			const rect = element.getBoundingClientRect();
			const screenCenter = window.innerHeight / 2;
			const elementCenter = rect.top + rect.height / 2;

			return Math.abs(screenCenter - elementCenter) < rect.height / 2;
	};

	const handleScroll = () => {
			let newCurrentBlock = null;

			choiceBlocks.forEach((block) => {
					if (isInCenter(block)) {
							newCurrentBlock = block;
					}
					block.classList.remove('choice-block--current');
			});

			if (newCurrentBlock) {
					newCurrentBlock.classList.add('choice-block--current');
					newCurrentBlock.classList.add('choice-block--visited');
					updateBackgroundPosition(newCurrentBlock);
					currentBlock = newCurrentBlock; // Обновляем текущий блок
			} else if (currentBlock) {
					// Если никакой новый блок не в центре, оставляем текущий
					currentBlock.classList.add('choice-block--current');
					updateBackgroundPosition(currentBlock);
			}
	};

	window.addEventListener('scroll', handleScroll);

	// Инициализация стилей при загрузке
	updateBackgroundPosition(currentBlock);
	// currentBlock.classList.add('choice-block--current');
	// currentBlock.classList.add('choice-block--visited');
}

// WHO-ITEM
if(document.querySelector('.who-item')) {
	const whoItems = document.querySelectorAll('.who-item');
	const who = document.querySelector('.who');
	whoItems.forEach((item, index) => {
		item.addEventListener('click', () => {
			whoItems.forEach((item) => {
				item.classList.remove('who-item--active');
				who.classList.remove('who--1');
				who.classList.remove('who--2');
				who.classList.remove('who--3');
			})
			who.classList.add(`who--${index + 1}`);
			item.classList.add('who-item--active');
		})
	})
}
