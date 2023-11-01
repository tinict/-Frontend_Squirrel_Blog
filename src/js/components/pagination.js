const pagination = () => {
    return `
        <div class="container__pagination" >
            <span class="page-numbers page-current">1</span>
            <a class="page-numbers" href="">2</a>
            <a class="page-numbers" href="">3</a>
            <span class="page-dots">...</span>
            <a class="page-numbers" href="">100</a>
            <a class="page-next" href="">
                <i class="fa fa-angle-right"></i>
            </a>
        </div>
    `
}

export { pagination }