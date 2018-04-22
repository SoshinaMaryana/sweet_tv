(function(){
	
	document.querySelector('[data-modal]')
	.addEventListener('click', function(e){
		e.preventDefault();
		var target = this.getAttribute('data-modal'),
			modal  = document.getElementById(target),
			modalContent = modal.firstElementChild;

		modal.classList.add('opened');
		
		modal.classList.add('fadeIn');
		setTimeout(function(){
			
			modalContent.classList.add('slideInDown');
		},500);
	})

	document.querySelector('.modal__btn--close').addEventListener('click', closeModal);
	function closeModal(){
		var modal  = document.querySelector('.modal.opened'),
			modalContent = modal.firstElementChild;	

		modalContent.classList.remove('slideInDown');
		modalContent.classList.add('slideOutUp');
		setTimeout(function(){
			modal.classList.remove('fadeIn');
			modal.classList.add('fadeOut');
		},500);
		setTimeout(function(){modal.classList.remove('fadeOut');
			modal.classList.remove('fadeOut');
			modalContent.classList.remove('slideOutUp');
			modal.classList.remove('opened');
		},1500)
	}
	
})();