new Vue({
	el: "#app",
	data: {
		title: "Noushedul Islam",
		isBol: true,
		myarr: ['hello','hi','freddy'],
		myarr2: [10,20,30],
		myarr3: ['southern','cse',true,10,44],
		obj: {
			name: "akib",
			age: 24
		},
		obj2: {
			country: "Bangladesh",
			game: ['cricket','football'],
			player: {
				name: 'sakib'
			}
		}
	// 	greeting: ()=>{
	// 		return "hello southern University CSE student";
	// 	},
	// 	adition: ($a,$b)=>{     //we always use function in the method,
								//but some time ue can write here also
	// 		return $a+$b;
	// 	}
	},
	methods: {
		greeting: function(){
			return 'hello bangladesh'; //ES5 
		},
		greeting2(){
			return "hello world";  //ES6
		},
		greeting3(){
			return this.title;     //ES6
		},
		greeting4(){
			return this.myarr[0];
		}
	}
});