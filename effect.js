$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
	// Credits: fade in after 1s, stay for 6s, then vanish
	setTimeout(function(){
		$('#credits').fadeIn(1200, function(){
			setTimeout(function(){ $('#credits').fadeOut(1500); }, 6000);
		});
	}, 1000);
});
$('document').ready(function(){
		var vw;
		var nameShown = false; // track if name balloons have been revealed
		var resizeTimer;
		$(window).resize(function(){
			// Debounce: wait 150ms after resize stops before repositioning
			clearTimeout(resizeTimer);
			resizeTimer = setTimeout(function() {
				 vw = $(window).width();
				 // Only reposition if name balloons are already visible
				 if (nameShown) {
					// Stop any flying animations first, then reposition
					$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12').stop(true);
					positionNameBalloons(vw);
				 }
			}, 150);
		});

	$('#turn_on').click(function(){
		$('#bulb_yellow').addClass('bulb-glow-yellow');
		$('#bulb_red').addClass('bulb-glow-red');
		$('#bulb_blue').addClass('bulb-glow-blue');
		$('#bulb_green').addClass('bulb-glow-green');
		$('#bulb_pink').addClass('bulb-glow-pink');
		$('#bulb_orange').addClass('bulb-glow-orange');
		$('body').addClass('peach');
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#play').fadeIn('slow');
		});
	});
	$('#play').click(function(){
		var audio = $('.song')[0];
        audio.play();
        $('#bulb_yellow').addClass('bulb-glow-yellow-after');
		$('#bulb_red').addClass('bulb-glow-red-after');
		$('#bulb_blue').addClass('bulb-glow-blue-after');
		$('#bulb_green').addClass('bulb-glow-green-after');
		$('#bulb_pink').addClass('bulb-glow-pink-after');
		$('#bulb_orange').addClass('bulb-glow-orange-after');
		$('body').css('backgroud-color','#FFF');
		$('body').addClass('peach-after');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#bannar_coming').fadeIn('slow');
		});
	});

	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(6000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});

	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		$('#b8,#b10,#b12').addClass('balloons-rotate-behaviour-one');
		$('#b9,#b11').addClass('balloons-rotate-behaviour-two');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		loopEight();
		loopNine();
		loopTen();
		loopEleven();
		loopTwelve();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#cake_fadein').fadeIn('slow');
		});
	});

	function loopEight() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b8').animate({left:randleft,bottom:randtop},10000,function(){
			loopEight();
		});
	}
	function loopNine() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b9').animate({left:randleft,bottom:randtop},10000,function(){
			loopNine();
		});
	}
	function loopTen() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b10').animate({left:randleft,bottom:randtop},10000,function(){
			loopTen();
		});
	}
	function loopEleven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b11').animate({left:randleft,bottom:randtop},10000,function(){
			loopEleven();
		});
	}
	function loopTwelve() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b12').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwelve();
		});
	}

	// Helper: position all 12 name balloons responsively
	function positionNameBalloons(vw) {
		var vh = $(window).height();

		if (vw <= 600) {
			// Dynamically compute balloon width so 7 balloons (PRAVEEN) always fit
			var spacing = Math.floor((vw - 10) / 7); // divide viewport by widest row
			var bw = Math.min(45, spacing - 4);       // cap at 45px max
			var bh = Math.round(bw * 1.83);           // preserve balloon aspect ratio
			spacing = bw + 4;

			// Apply size to all balloons dynamically
			$('.balloons').css({
				'width': bw + 'px',
				'height': bh + 'px',
				'background-size': bw + 'px ' + bh + 'px'
			});
			$('.balloons h2').css('font-size', Math.round(bw * 0.48) + 'px');

			// Row 1: MANOJ — place at ~40% down the viewport, below banner
			var row1Top = Math.round(vh * 0.30);
			var row1Ids = ['#b1','#b2','#b3','#b4','#b5'];
			var row1Width = row1Ids.length * spacing;
			var row1Start = (vw - row1Width) / 2;
			for (var i = 0; i < row1Ids.length; i++) {
				$(row1Ids[i]).animate({top: row1Top, left: row1Start + i * spacing}, 500);
			}

			// Row 2: PRAVEEN — just below row 1
			var row2Top = row1Top + bh + 15;
			var row2Ids = ['#b6','#b7','#b8','#b9','#b10','#b11','#b12'];
			var row2Width = row2Ids.length * spacing;
			var row2Start = (vw - row2Width) / 2;
			for (var j = 0; j < row2Ids.length; j++) {
				$(row2Ids[j]).animate({top: row2Top, left: row2Start + j * spacing}, 500);
			}

			// ── Push cake below balloons dynamically ───────────────────────────
			var heightAboveCake = 0;
			$('.cake-cover').prevAll('.row').each(function() {
				heightAboveCake += $(this).outerHeight(true);
			});
			var balloonsEnd = row2Top + bh; // bottom of last balloon row (viewport px)
			var neededMargin = Math.max(30, balloonsEnd + 50 - heightAboveCake);
			$('.cake-cover').css('margin-top', neededMargin + 'px');

		} else {
			// DESKTOP: single row, well below the banner
			var bw = 100;
			var bh = 183;
			var spacing = bw + 4;
			var totalSlots = 13;
			var totalWidth = totalSlots * spacing;
			var startLeft = (vw - totalWidth) / 2;
			var slots = [0,1,2,3,4, 6,7,8,9,10,11,12];
			var ids = ['#b1','#b2','#b3','#b4','#b5','#b6','#b7','#b8','#b9','#b10','#b11','#b12'];

			// Row top = 30% of viewport height, well below banner
			var rowTop = Math.round(vh * 0.30);
			for (var i = 0; i < ids.length; i++) {
				var leftPos = startLeft + slots[i] * spacing;
				$(ids[i]).animate({top: rowTop, left: leftPos}, 500);
			}

			// ── Push cake below balloons dynamically ───────────────────────────
			var heightAboveCake = 0;
			$('.cake-cover').prevAll('.row').each(function() {
				heightAboveCake += $(this).outerHeight(true);
			});
			var balloonsEnd = rowTop + bh;
			var neededMargin = Math.max(50, balloonsEnd + 50 - heightAboveCake);
			$('.cake-cover').css('margin-top', neededMargin + 'px');
		}
	}

	// Pre-calculate the cake position so it appears in the right place immediately
	function calculateCakeMargin(vw) {
		var vh = $(window).height();
		var bh, balloonsEnd;
		if (vw <= 600) {
			var spacing = Math.floor((vw - 10) / 7);
			var bw = Math.min(45, spacing - 4);
			bh = Math.round(bw * 1.83);
			var row1Top = Math.round(vh * 0.30);
			var row2Top = row1Top + bh + 15;
			balloonsEnd = row2Top + bh;
		} else {
			bh = 183;
			var rowTop = Math.round(vh * 0.30);
			balloonsEnd = rowTop + bh;
		}
		var heightAboveCake = 0;
		$('.cake-cover').prevAll('.row').each(function() {
			heightAboveCake += $(this).outerHeight(true);
		});
		return Math.max(50, balloonsEnd + 50 - heightAboveCake);
	}

	$('#cake_fadein').click(function(){
		// Set the FINAL cake position BEFORE fading in — prevents jump later
		var margin = calculateCakeMargin($(window).width());
		$('.cake-cover').css('margin-top', margin + 'px');
		$('.cake').fadeIn('slow');
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#light_candle').fadeIn('slow');
		});
	});


	$('#light_candle').click(function(){
		$('.fuego').fadeIn('slow');
		$(this).fadeOut('slow').promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});

	$('#wish_message').click(function(){
		 vw = $(window).width();
		nameShown = true;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7,#b8,#b9,#b10,#b11,#b12').stop();
		positionNameBalloons(vw);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		// Start disco colors 3s after letters appear (after fade-in completes)
		setTimeout(startDiscoColors, 3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});

	// ── Disco color changer for name balloon letters ──────────────────────────
	function startDiscoColors() {
		var discoColors = [
			'#FF3B30', '#FF9500', '#FFD60A', '#34C759', '#00C7BE',
			'#007AFF', '#5856D6', '#AF52DE', '#FF2D55', '#FF6B35',
			'#32ADE6', '#64D2FF', '#FF375F', '#30D158', '#BF5AF2',
			'#FF9F0A', '#0A84FF', '#FF6961', '#77DD77', '#FF69B4'
		];
		var letters = [
			'#b1 h2','#b2 h2','#b3 h2','#b4 h2','#b5 h2',
			'#b6 h2','#b7 h2','#b8 h2','#b9 h2','#b10 h2','#b11 h2','#b12 h2'
		];

		function changeOne() {
			// Pick a random balloon letter and a random vibrant color
			var target = letters[Math.floor(Math.random() * letters.length)];
			var color  = discoColors[Math.floor(Math.random() * discoColors.length)];

			// Smooth glow color transition
			$(target).css({
				'color'      : color,
				'transition' : 'color 0.6s ease, text-shadow 0.6s ease',
				'text-shadow': '3px 3px 8px rgba(255,255,255,0.9), 0 0 20px ' + color + ', 0 0 40px ' + color
			});

			// Wait a random delay (300–1200 ms) then change another random letter
			setTimeout(changeOne, Math.floor(Math.random() * 900) + 300);
		}

		changeOne(); // kick it off immediately
	}


	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			// Use display:flex (not block) so flexbox centering works
			$('.message').css({'display': 'flex', 'opacity': 0}).animate({'opacity': 1}, 800);
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});
});




//alert('hello');