
$(document).ready(function(){
	


	$('.nav').removeClass('hide');
		$('.nav').addClass('show animate__animated animate__backInRight');

	$('.intro').removeClass('hide');
	$('.intro').addClass('show animate__animated animate__backInUp');

	$('.images').removeClass('hide');
	$('.images').addClass('show');

	$('#body').removeClass('no-scroll');
	$('#body').addClass('scroll');

	$('.searchBox').waypoint(function(){
		$('.searchBox').removeClass('hide');
		$('.searchBox').addClass('show animate__animated animate__backInUp');
	},
	{
		offset:'70%'
	});

	$('#c1').waypoint(function(direction){
		$('#c1').removeClass('hide');
		$('#c1').addClass('show animate__animated animate__fadeInRight');
	},
	{
		offset:'60%'
	});
	$('#c2').waypoint(function(direction){
		$('#c2').removeClass('hide');
		$('#c2').addClass('show animate__animated animate__fadeInLeft');
	},
	{
		offset:'60%'
	});


	$('.icon-lay').waypoint(function(direction){
		$('.icon-lay').removeClass('hide');
		$('.icon-lay').addClass('show animate__animated animate__fadeInUp');
	},
	{
		offset:'60%'
	});


	$('#n1').waypoint(function(direction){
		$('#n1').removeClass('hide');
		$('#n1').addClass('show animate__animated animate__fadeInUp');
	},
	{
		offset:'60%'
	});

	$('#n2').waypoint(function(direction){
		$('#n2').removeClass('hide');
		$('#n2').addClass('show animate__animated animate__fadeInUp');
	},
	{
		offset:'60%'
	});

	$('#n3').waypoint(function(direction){
		$('#n3').removeClass('hide');
		$('#n3').addClass('show animate__animated animate__fadeInUp');
	},
	{
		offset:'70%'
	});





	$('.foot').waypoint(function(direction){
		$('.foot').removeClass('hide');
		$('.foot').addClass('show animate__animated animate__fadeInUp');
	},
	{
		offset:'80%'
	});


	$('#contact-scroll').waypoint(function(direction){
		$('#contact-scroll').removeClass('hide');
		$('#contact-scroll').addClass('show animate__animated animate__fadeInRight');
	},
	{
		offset:'70%'
	});
	$('.about').waypoint(function(direction){
		$('.about').removeClass('hide');
		$('.about').addClass('show animate__animated animate__fadeInLeft');
	},
	{
		offset:'77%'
	});





});
