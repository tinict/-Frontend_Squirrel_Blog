const blog = () => {
    return `
        <div class="container__blog">
            <h1>Meetanshi Blog: Magento, Shopify, Ecommerce & Marketing</h1>

            <div class="container__blog--listing">
                <div class="blog__listing--img">
                    <img src="https://meetanshi.com/blog/wp-content/uploads/2023/10/Best-Shopify-QR-Code-Generator-Apps.png" alt="">
                </div>
                <div class="blog__listing--info">
                    <h2 class="blog__listing--title"><a href="/">Magento 2.4.7-beta1 Release Available! – Learn What’s New</a></h2>
                    <p>Magento 2.4.7 beta version is out now! 🚀 Adobe has released the beta 1 release to all the Adobe Commerce 
                        customers and partners prior to the general availability. The release includes 140+ security, compliance, 
                        performance, and high-priority quality fixes. Learn what’s new in the upcoming Magento 2.4.7 
                        (Adobe Commerce 2.4.7) version.</p>
                    <div class="blog-author">
                        <span class="blog-client">By Shivbhadrasinh Gohil I </span>
                        <span class="blog-calender">Jun 21, 2023</span>
                    </div>
                </div>
            </div>

            <ul class="container__blog--list">

            </ul>
        </div>
    `
}

const renderBlog = (data) => {
    return data.map(item => {
        return `
            <li class="container__blog--item">
                <div class="container__blog--item-img">
                    <a href="${item.link}">
                        <img src="${item.img}" alt="">
                    </a>
                </div>

                <div class="container__blog--item-info">
                    <h2 class="container__blog--item-title">
                        <a href="${item.link}">
                            ${item.title}
                        </a>
                    </h2>
                    
                    <div class="blog-author">
                        <span class="blog-client">${item.client} I </span>
                        <span class="blog-calender">${item.calender}</span>
                    </div>
                </div>
            </li>
        `
    }).join('')
}

export { blog, renderBlog }