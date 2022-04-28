    function myFunction()
         {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");

            if (dots.style.display === "none") 
            {
                dots.style.display = "inline";
                btnText.innerHTML = "View full Query";
                moreText.style.display = "none";
            } 
            else
            {
                dots.style.display = "none";
                btnText.innerHTML = "View less Query";
                moreText.style.display = "inline";
            }
        }
$(document).ready(function(){
	$('#MybtnModal').click(function(){
		$('#Mymodal').modal('show')
	});
});
