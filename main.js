document.addEventListener("DOMContentLoaded", () => {
    const publishBtns = document.querySelectorAll(".add__btn");

    publishBtns.forEach((btn) => {
        btn.addEventListener("click", () => {
            document.querySelector('.main__screen').style.display = 'none'
            document.querySelector('.publish__screen').style.display = 'block'
            window.scrollTo({
                top: 0,
                left: 0,
                behavior: 'smooth'
            });
        })
    })

    document.querySelector(".submit__btn").addEventListener("click", (e) => {
        e.preventDefault();
        document.querySelector('.publish__screen').style.display = 'none'
        document.querySelector('.main__screen').style.display = 'block'
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })

    const btnUp = document.querySelector(".page-up__btn");
    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
            btnUp.style.display = "flex";
        } else {
            btnUp.style.display = "none";
        }
    })

    btnUp.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    })
})