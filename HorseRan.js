let input = document.querySelector('.stavka'),
balance = document.querySelector('.balance'),
button = document.querySelectorAll('.but'),
horses = document.querySelectorAll('.horseImg'),
popup = document.querySelector('.popup'),
del = document.querySelector('.del'),
alert = document.querySelector('.alert'),
start = document.querySelector('.start'),
errorHorse = document.querySelector('.errorHorse'),
cont = document.querySelector('.cont'),
bal = 500
stavk = parseInt(input.value)
start.style.visibility = 'hidden'
balance.innerText = `Ваш баланс: ${bal}$`
input.addEventListener('input', () => {
	if (Number(input.value) > bal) {
		alert.innerText = 'Cтавка не должна превышать баланс!'
		input.style.borderColor = 'red'
		start.style.visibility = 'hidden'
	}else if (isNaN(input.value)){
		alert.innerText = 'Вы ввели не число, либо пустоту!'
		input.style.borderColor = 'red'
		start.style.visibility = 'hidden'
	}else if (Number(input.value) <= 0) {
		input.style.borderColor = 'red'
		start.style.visibility = 'hidden'
	    alert.innerText = 'Число должно быть больше нуля!'
	}else if (Number(input.value) <= bal) {
		input.style.borderColor = 'black'
	    start.style.visibility = 'visible'
	    alert.innerText = ''
	}
	stavk = parseInt(input.value)
})
button.forEach(le => {
	le.addEventListener('click', () => {
		let butId = event.target.id
		input.value = 0
		input.value = Number(input.value) + Number(butId)
		if (parseInt(input.value) > bal) {
			alert.innerText = 'Cтавка не должна превышать баланс!'
			input.style.borderColor = 'red'
			start.style.visibility = 'hidden'
		}else if (parseInt(input.value) <= bal) {
			input.style.borderColor = 'black'
	    	start.style.visibility = 'visible'
	    	alert.innerText = ''
		}
		stavk = parseInt(input.value)
	})
})
del.addEventListener('click', () => {
	cont.style.visibility = "visible"
	popup.style.visibility = "hidden"
	start.style.visibility = 'visible'
	del.style.visibility = 'hidden'
})
horses.forEach(le => {
	le.addEventListener('click', () => {
		let horseId = event.target.id;
		horses.forEach(le => {
			le.style.borderColor = 'black' 
		})
		le.style.borderColor = 'gold'

		start.addEventListener('click', () => {
			let win = Math.floor(Math.random() * 2)
			// 0 - white
			// 1 - black
			if(bal <= 0){
				popup.innerHTML = `Вы проиграли, у вас не осталось денег, обновите страницу чтоб начать снова`
		   		cont.style.visibility = "hidden"
		   		popup.style.visibility = "visible"
		   		start.style.visibility = 'hidden'
			}else if (bal > 0 && horseId == "white" || "black") {
		   		if (horseId == "white" && win == 0) {
		   			popup.innerHTML = `Победа! </br> Ваш приз: +${input.value}$`
		   			cont.style.visibility = "hidden"
		   			popup.style.visibility = "visible"
		   			start.style.visibility = 'hidden'
		   			del.style.visibility = 'visible'
		   			bal += stavk
		   			balance.innerText = `Ваш баланс: ${bal}$`
		   		}else if (horseId == "white" && win == 1) {
		   			popup.innerHTML = `Вы проиграли </br> Ваш приз: -${input.value}$`
		   			cont.style.visibility = "hidden"
		   			popup.style.visibility = "visible"
		   			start.style.visibility = 'hidden'
		   			del.style.visibility = 'visible'
		   			bal -= stavk
		   			balance.innerText = `Ваш баланс: ${bal}$`

		   		}else if (horseId == "black" && win == 1) {
		   			popup.innerHTML = `Победа! </br> Ваш приз: +${input.value}$`
		   			cont.style.visibility = "hidden"
		   			popup.style.visibility = "visible"
		   			start.style.visibility = 'hidden'
		   			del.style.visibility = 'visible'
		   			bal += stavk
		   			balance.innerText = `Ваш баланс: ${bal}$`
		   		}else if (horseId == "black" && win == 0) {
		   			popup.innerHTML = `Вы проиграли </br> Ваш приз: -${input.value}$`
		   			cont.style.visibility = "hidden"
		   			popup.style.visibility = "visible"
		   			start.style.visibility = 'hidden'
		   			del.style.visibility = 'visible'
		   			bal -= stavk
		   			balance.innerText = `Ваш баланс: ${bal}$`
		   		}
				horses.forEach(le => {
					le.style.borderColor = 'black' 
				})
				horseId = ''
			}
		})
	})
})