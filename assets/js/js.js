let variableChoice = document.querySelector('.choice');
let variableEntry = document.querySelector('.entryField');
let variableResult = document.querySelector('.result');
let variableReceivingValue = document.querySelector('.receivingValue');

document.querySelector('.choice7').onclick = choiceIsMade7;
document.querySelector('.choiceName').onclick = choiceIsMadeName;
document.querySelector('.choiceArray').onclick = choiceIsMadeArray;
document.querySelector('.showResult').onclick = showYourResult;
document.querySelector('.repeat').onclick = showChoice;
document.querySelector('.stopAll').onclick = hideEnd;
document.querySelector('.choiceBacket').onclick = resultChoiceBacket;

function choiceIsMade7() {
	showEntryField();
	variableReceivingValue.classList.add('yourChoice7');
}

function choiceIsMadeName() {
	showEntryField();
	variableReceivingValue.classList.add('yourChoiceName');
}

function choiceIsMadeArray() {
	showEntryField();
	variableReceivingValue.classList.add('yourChoiceArray');
	alert('Вводите числа через пробел');
}

function showChoice() {
	variableChoice.classList.remove('notShow');
  variableResult.classList.add('notShow');
  if(variableReceivingValue.classList.contains('yourChoice7')) {
  	variableReceivingValue.classList.remove('yourChoice7');
  }
  else if(variableReceivingValue.classList.contains('yourChoiceName')) {
  	variableReceivingValue.classList.remove('yourChoiceName');
  }
  else if(variableReceivingValue.classList.contains('yourChoiceArray')) {
  	variableReceivingValue.classList.remove('yourChoiceArray');
  }
  if(document.getElementById('finalText').classList.contains('ChoiceBacket')) {
  	document.getElementById('finalText').classList.remove('ChoiceBacket');
  }
  document.getElementById('valueProcess').value = '';
  document.getElementById('finalText').textContent = '';
}

function showEntryField() {
  variableChoice.classList.add('notShow');
  variableEntry.classList.remove('notShow');
}

function showYourResult() {
	variableEntry.classList.add('notShow');
	variableResult.classList.remove('notShow');
	switch(checkResult(variableReceivingValue)) {
		case 1:
		resultChoice7(document.getElementById('valueProcess').value);
		break;
		case 2:
		resultChoiceName(document.getElementById('valueProcess').value);
		break;
		case 3:
		resultChoiceArray(document.getElementById('valueProcess').value);
		break;
		default:
		showChoice();
		break;
	}
}

function hideEnd() {
	variableResult.classList.add('notShow');
}

function resultChoice7(checkValue) {
	if(Number(checkValue)) {
		let a = parseInt(checkValue, 10);
		if (a > 7) {
		document.getElementById('finalText').textContent = 'Привет!';
		}
	}
}

function resultChoiceName(checkValue) {
	if(checkValue == 'Вячеслав' || checkValue == 'вячеслав') {
		document.getElementById('finalText').textContent = 'Привет, Вячеслав';
		}
	else {
		document.getElementById('finalText').textContent = 'Нет такого имени';
	}
}

function resultChoiceArray(checkValue) {
	let arr = checkValue.split(' ');
	let finalString = "";
	for (let i = 0; i < arr.length; i++) {
		if (Number(arr[i]) % 3 == 0) {
			finalString += arr[i] + " ";
		}
	}
	finalString = finalString.slice(0, -1);
	document.getElementById('finalText').textContent = finalString;
}

function resultChoiceBacket() {
	variableChoice.classList.add('notShow');
	variableResult.classList.remove('notShow');
	document.getElementById('finalText').textContent = '[((())()(())]] - скобочная последовательность не является правильной. Стоит либо удалить первую слева полукруглую скобку либо добавить к ней закрывающую, так же стоит либо удалить последнюю правую квадратную скобку либо к ней добавить открывающую.'
	document.getElementById('finalText').classList.add('ChoiceBacket');
}

function checkResult(check) {
	if(check.classList.contains('yourChoice7')) {
		return 1;
	}
	else if(check.classList.contains('yourChoiceName')){
		return 2;
	}
	else if(check.classList.contains('yourChoiceArray')) {
		return 3;
	}
	else return 0;
}
