
	$.ajax({
		url : "home.html",
		dataType : "html",
		success : function(data) {
			$("#content").html(data);
		}
	});
	
	$('a').on('click', function(e) {
//		$.ajax({
//			url : $(this).attr('href'),
//			dataType : "html",
//			success : function(data) {
//				$("#content").html(data);
//			}
//		});
//		e.preventDefault();
        if($(this).hasClass('external')){
            return true;
        }
		$(this).parent().parent().children().removeClass('active');
		$(this).parent().addClass('active')
		return false;
    });
