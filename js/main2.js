$(function () {

	var $btnAdd = $("#btnAdd");
	var $list =$("#list"); // об`єкт <ul>. 


	var addTask =0;

/*функція кнопи taskAdd*/
	var onAdd = function(){
		var $inpAdd = $("#inpAdd").val(); // текст input.

		var valueInp=$.trim($("#inpAdd").val());

		if (valueInp.length>0){
			$list.append("<li>"+$inpAdd+
				"<button class='delete'>&#10008</button>"+
				"<button class='lineText-btn'>&#10004</button></li>");
			
			$("#inpAdd").val("");
		}
		else{
			alert("Напешіть завдання!!!" + $("#inpAdd").val());
		}
	}

	$btnAdd.on("click",function (){
		onAdd();
		delTask();
		lineText();
		hover();
	});

	// функція видалення елементу li
	function delTask(){
		$('.delete').click(function(){
			
			 $(this).parents("li").remove();
		})
	}

	// функція закреслений текст в li
	function lineText(){
		$('.lineText-btn').click(function(){
			
			 $(this).parent().addClass('line-through');
			 
		});
	}
	function hover(){
		// setTimeout(function(){
		$('li').hover(function(){
			
  	 			 $(this).children('button').css('display', 'block');
  	 			// $(this).children('button').animate({display:block},2000);

			
		},function(){
			// $(this).children('button').animate({display:none},2000);
			
				$(this).children('button').css('display', 'none');
			
			});
	// },1000);
		// return false; 
	}
	// setTimeout(hover(),2000);


})