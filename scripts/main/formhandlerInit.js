const FormHandler = require("./formhandler.js-1.1.2/dist/js/FormHandler.js");
require('./graph-modal/dist/graph-modal.min.js');
console.log(GraphModal)
import "./graph-modal/dist/graph-modal.css";

export const formhanlderInit = () => {
	if(document.querySelector('.formhandler') != null){
	const formhandler = new FormHandler({
			//form: {// точное указание селекторов формы
			// 	block: '.form-footer',
			// 	submit: '.form-footer__submit'
			// },
		fields: {
		// каждое поле этого объекта должно соответствовать аттрибуту "name" соответствующего поля формы form.formhandler
			name: {
				validation: 'isName',
				notice: {
					message: 'Заполните это поле',
		      		 appendTo: false,//свой контейнер для сообщения об ошибке поля
		      		 nextToField: 'before' //только если нужен свой контейнер для сообщения об ошибке поля
				}
			},
			email: {
				validation: 'isEmail',
				notice: {
					message: 'Нужен правильный емейл адрес',
		      		 appendTo: false,//свой контейнер для сообщения об ошибке поля
		      		 nextToField: 'before' //только если нужен свой контейнер для сообщения об ошибке поля
				}
			},
			 message: {
			 	validation: 'isNonEmpty',
			 	notice: {
					message: 'Это поле не должно быть пустым',
		      		 appendTo: false,//свой контейнер для сообщения об ошибке поля
		      		 nextToField: 'before' //только если нужен свой контейнер для сообщения об ошибке поля
				}
			 },
		},
		 sender: {
		    send: true
		  },
		  callbacks: {
		  	
		  	onSubmit(form, fields) {
		  		console.log('onSubmit', form, fields);
		  		new GraphModal().open('formsend');
		  	},
		  	onSend(result) {
		  		console.log('onsend', result);
		  	}
		  }
	});

}

}