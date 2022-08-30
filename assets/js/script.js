$(".filter .item").click(function() {
    $(this).addClass("active").siblings().removeClass("active")

    let value = $(this).attr("data-filter")

    setTimeout(function() {
        if (value == "all") {
            $(".itens .modal").show(500)
            return
        }
        $(".itens .modal").not("." + value).hide(500)
        $(".itens .modal").filter("." + value).show(500)
    }, 100);
})

const discordContact = document.querySelector(".discord")

discordContact.addEventListener("click", function () {
  const discordUser = "Gabrideiros#1348"
  const body = document.querySelector('body')
  const textArea = document.createElement('textarea')

  body.appendChild(textArea)
  textArea.value = discordUser

  textArea.select()
  textArea.setSelectionRange(0, 99999)

  document.execCommand("copy")
  body.removeChild(textArea)
});

const modals = document.querySelectorAll(".itens .effects");
const modal = document.querySelector(".preview-box");
const original = document.querySelector(".preview-box .preview-video");


for (let index = 0; index < modals.length; index++) {

    let newIndex = index;

    let clickedImgIndex;

    const open = modals[index].querySelector("i");

    open.onclick = () => {

        clickedImgIndex = index;

        function view() {
            const value = modals[newIndex].querySelector("video").src;
            original.src = value;
        }

        view();

        const prevButton = document.querySelector(".preview-box .prev i");
        const nextButton = document.querySelector(".preview-box .next i");

        if(newIndex == 0){
            prevButton.style.display = "none"; 
        }

        if(newIndex >= modals.length - 1) {
            nextButton.style.display = "none"; 
        }

        prevButton.onclick = ()=> { 
            newIndex--;
            if (newIndex == 0) {
                view();
                prevButton.style.display = "none";
            } else {
                nextButton.style.display = "block";
                view();
            }
        }

        nextButton.onclick = ()=> { 
            newIndex++;
            if (newIndex >= modals.length -1) {
                view();
                nextButton.style.display = "none";
            } else {
                prevButton.style.display = "block";
                view();
            }
        }

        document.querySelector("body").style.overflow = "hidden";
        modal.classList.add("open");

        const closeButton = document.querySelector(".preview-box .close i");


        function close() {
            newIndex = clickedImgIndex;
            prevButton.style.display = "block"; 
            nextButton.style.display = "block";
            document.querySelector("body").style.overflow = "scroll";
            modal.classList.remove("open");
        }

        modal.onclick = (e)=> { 
            if (e.target.classList.contains("preview-box") || value.contains("preview-box close i")) {
                close();
            }
        }

        closeButton.onclick = ()=> { 
            close();
        }
    }
}