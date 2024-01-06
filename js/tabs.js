document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.catalog__btn-item').forEach(function (btnStep) {
        btnStep.addEventListener('click', function (event) {
            const path = event.currentTarget.dataset.path
            console.log(path)

            document.querySelectorAll('.catalog__btn-item').forEach(function (tabContent) {
                tabContent.classList.remove('catalog__btn-active')
            })
            this.classList.add('catalog__btn-active')

            document.querySelectorAll('.catalog__btn-item').forEach(function (tabContent) {
                tabContent.classList.remove('catalog__btn-active')
            })
            this.classList.add('catalog__btn-active')

            document.querySelectorAll('.catalog__list ').forEach(function (tabContent) {
                tabContent.classList.remove('catalog__list-active')
            })

            document.querySelector(`[data-target="${path}"]`).classList.add('catalog__list-active')
        })
    });
})