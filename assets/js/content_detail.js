import { total_product } from './data.js'

window.addEventListener("load", () => {
    const id_product = localStorage.getItem('ID_PRODUCT');
    // console.log(id_product);

    for (let i = 0; i < total_product.length; i++) {
        if (total_product[i].product_id === id_product) {

            $("#product-container-info").prepend('<img src="' + total_product[i].img_info + '" alt="" class="img-main">');
            $(".product-detail-img").prepend('<img src="' + total_product[i].img_detail + '" alt="">');
            $(".product-info").prepend(
                '<h3 class="product-name txt-24">' + total_product[i].product_name + '</h3>'
                + '<p class="product-price mt-10 txt-24">' + total_product[i].price + ' VND</p>'
            );

            $(".product-parameter-table").append(
                '<tr>'
                + '<td>Màn hình:</td>'
                + '<td>'+total_product[i].screen_size+'</td>'
                + '</tr>'
                + '<tr>'
                + '<td>Hệ điều hành:</td>'
                + '<td>'+total_product[i].OS+'</td>'
                + '</tr>'
                + '<tr>'
                + '<td>Camera sau:</td>'
                + '<td>'+total_product[i].camera_after+'</td>'
                + '</tr>'
                + '<tr>'
                + '<td>Camera trước:</td>'
                + '<td>'+total_product[i].camera_before+'</td>'
                + '</tr>'
                + '<tr>'
                + '<td>Chip:</td>'
                + '<td>'+total_product[i].chip+'</td>'
                + '</tr>'
                + '<tr>'
                + '<td>RAM:</td>'
                + '<td>'+total_product[i].RAM+'</td>'
                + '</tr>'
                + '<tr>'
                + '<td>Bộ nhớ trong:</td>'
                + '<td>'+total_product[i].ROM+'</td>'
                + '</tr>'
                + '<tr>'
                + '<td>Sim:</td>'
                + '<td>'+total_product[i].sim+'</td>'
                + '</tr>'
                + '<tr>'
                + '<td>Pin:</td>'
                + '<td>'+total_product[i].battery+'</td>'
                + '</tr>'
            );

            break;
        }
    }
})

