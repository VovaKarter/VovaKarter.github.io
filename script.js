const time = 4000000; //ms
const step = 1;

function outNum(num, elem) {
	let l = document.querySelector('#' + elem);
	n = 0;
	let t = Math.round(time/(num/step));
	let inerval = setInterval(() => {
		n = n + step;
		if (n == num) {
			clearInterval(inerval);
		}
		l.innerHTML = n;
	},
		t);
}

outNum(1000, 'out-1');