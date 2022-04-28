function myFunction()
         {
            var dots = document.getElementById("dots");
            var moreText = document.getElementById("more");
            var btnText = document.getElementById("myBtn");

            if (dots.style.display === "none") 
            {
                dots.style.display = "inline";
                btnText.innerHTML = "View MorAnswers";
                moreText.style.display = "none";
            } 
            else
            {
                dots.style.display = "none";
                btnText.innerHTML = "View less Answers";
                moreText.style.display = "inline";
            }
        }


        var coll = document.getElementsByClassName("collapsible");
        var i;
        
        for (i = 0; i < coll.length; i++) {
          coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            var content = this.nextElementSibling;
            if (content.style.display === "block") {
              content.style.display = "none";
            } else {
              content.style.display = "block";
            }
          });
        }

        $("#button-code").click(function() {
            $("pre code").text($("textarea").val());
        }).next().click(function () {
            $("textarea").val($("pre code").text());
        });