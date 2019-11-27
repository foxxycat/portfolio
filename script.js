$('.mapNav a').on('click', function(){
			var ch = $('.mapNav td').children();
			var id = $(this).attr('class');
			var regions = $('svg').children();
			var region = document.getElementById(id);
			for (var i = ch.length - 1; i >= 0; i--) {
				if (ch[i].classList.contains('active')) {
					ch[i].classList.remove('active');
				}
			}
			for (var i = regions.length - 1; i >= 0; i--) {
				if (regions[i].classList.contains('active')) {
					regions[i].classList.remove('active');
				}
			}

			this.classList.add('active');
			region.classList.add('active');
		});