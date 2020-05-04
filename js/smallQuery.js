function jQuery (selector, context = document){
	this.elements = Array.from(context.querySelectorAll(selector));
	return this
}



jQuery.prototype.each = function (fn){
	this.elements.forEach((element, index) => fn.call(element, element, index));
	return this;
}

//устанавливает обработчик по клику мышкой
jQuery.prototype.click = function(fn){
	this.each(element => element.addEventListener('click', fn))
	return this
}

//скрывает элемент
jQuery.prototype.hide = function(){
	this.each(element => element.style.display = 'none')
  return this;
}

//показывает элемент
jQuery.prototype.show = function(){
	this.each(element => element.style.display = '')
  return this;
}

// удаляет элемент
jQuery.prototype.remove = function(){
	this.each(element => element.remove())
  return this;
}

//добавляет класс
jQuery.prototype.class = function(name){
	this.each(element => element.className = name)
  return this;
}

// возвращает первый элемент
jQuery.prototype.first = function(){
	return this.elements[0];
}

// Возвращаем или изменяем HTML контент
jQuery.prototype.html = function(content='') {
  if (content == '') {
    this.each(element => content += element.innerHTML)
    return content
  } else {
    this.each(element => element.innerHTML = content)
    return this;
  }
}

// Возвращаем или изменяем текстовое содержимое
jQuery.prototype.text = function(content='') {
  if (content == '') {
    this.each(element => content += '\n'+element.innerText)
    return content
  } else {
    this.each(element => element.innerText = content)
    return this;
  }
}
