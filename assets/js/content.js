import {
    iphone, phone_Samsung, phone_oppo, phone_vivo, phone_vsmart, phone_realme,
    tablet_Samsung, iPad, sacDienThoai, pinDuPhong, total_product
} from './data.js'

// console.log(Iphone[0].product_name);

//cộng tất cả các mảng sản phẩm lại với nhau
// var total_product = [...iphone, ...phone_Samsung, ...phone_oppo, ...phone_vivo, ...phone_vsmart, ...phone_realme,
// ...tablet_Samsung, ...iPad, ...sacDienThoai, ...pinDuPhong];
// console.log(total_product.length);

function insertProduct(id, arr) {
    for (let i = 0; i < arr.length; i++) {
        $(id).append(
            '<div class="col col-5">'
            + '<div class="product" id="' + arr[i].product_id + '">'
            + '<img src="' + arr[i].img + '" class="product-img mt-8" alt="">'
            + '<div class="product-info">'
            + '<h3 class="product-name mt-10">' + arr[i].product_name + '</h3>'
            + '<p class="product-price mt-10">' + arr[i].price + ' VND</p>'
            + '</div>'
            + '</div>'
            + '</div>'
        )

    }
}

// var hung = '';

// function ch(path) {
//     hung = path;
//     console.log("chuyen")
//     console.log(hung);
// }


var path_img_info = '';
var path_img_detail = '';

function handleSubmit(path) {
    const x = path;
    localStorage.setItem("PATH_IMG_INFO", x);
    console.log("luu local")

    return;
}

function saveLocal(x) {
    localStorage.setItem("ID_PRODUCT", x);
    return;
}

$(document).ready(function () {

    const mySlide = document.querySelectorAll('.slide');
    // console.log(mySlide)

    if (mySlide.length > 0) {
        var count = 1;

        $('#slides').hover(function () {
            // hiện thị nút next và prev khi hover lên slide
            document.getElementById('btn-nextSlide').style.display = "flex";
            if (count == 1)
                document.getElementById('btn-prevSlide').style.display = "none";
            else
                document.getElementById('btn-prevSlide').style.display = "flex";
        })

        $('#slides').mouseleave(function () {
            //ẩn nút next và prev khi k hover lên slide
            document.getElementById('btn-nextSlide').style.display = "none";
            document.getElementById('btn-prevSlide').style.display = "none";
        })


        let timer = setInterval(autoSlide, 5000);

        function autoSlide() {
            document.getElementById('radio' + count).checked = true;
            count++;
            if (count > mySlide.length) {
                count = 1;
            }
        }

        // function resetTimer() {
        //     clearInterval(timer);
        //     timer = setInterval(autoSlide, 5000);
        // }

        $('#btn-nextSlide').click(function () {
            clearInterval(timer);

            count++;
            if (count > mySlide.length) {
                count = 1;
                document.getElementById('btn-prevSlide').style.display = "none";
            }
            if (count != 1)
                document.getElementById('btn-prevSlide').style.display = "flex";

            document.getElementById('radio' + count).checked = true;

            timer = setInterval(autoSlide, 5000);
            // resetTimer()
        })

        $('#btn-prevSlide').click(function () {
            clearInterval(timer);
            count--;
            if (count < 1) {
                count = 1;
                return 0;
            }

            document.getElementById('radio' + count).checked = true;

            timer = setInterval(autoSlide, 5000);
            // resetTimer()
        })

        /*end slider*/
    }




    insertProduct('#phone-popular', iphone);
    insertProduct('#phone-popular', phone_Samsung);
    insertProduct('#phone-popular', phone_oppo);
    insertProduct('#phone-popular', phone_vivo);
    insertProduct('#phone-popular', phone_vsmart);
    insertProduct('#phone-popular', phone_realme);


    insertProduct('#tablet-popular', iPad);
    insertProduct('#tablet-popular', tablet_Samsung);
    insertProduct('#phone-accessories', sacDienThoai);
    insertProduct('#phone-accessories', pinDuPhong);

    //hover vào sản phẩm sau khi thêm sản phẩm
    $(document).on("mouseenter", ".product", function () {
        // $(this).css("z-index", "20");
        $(this).css("box-shadow", "0 0 8px rgba(240, 26, 72, 0.4), 0px 8px 8px rgba(240, 26, 72, 0.4)");
        $(this).css("border", "1px solid rgba(240, 26, 72, 0.1)");
        $(this).css("cursor", "pointer");
        $(this).click(function () {
            console.log("chi tiet sp");
            saveLocal($(this).attr('id'))
            window.location = '../product_detail.html';
        });
        // console.log("dang hover")
    }).on("mouseleave", ".product", function () {
        $(".product").css("box-shadow", "none");
        $(this).css("border", "none");

    });

    // $(".product").click(function () {
    //     console.log($(this).attr('id'));

        // let id_pro = $(this).attr('id');
        // // let path_img_info = '';
        // // let path_img_detail = '';

        // for (let i = 0; i < total_product.length; i++) {
        //     if (total_product[i].product_id === id_pro) {
        //         path_img_info = total_product[i].img_info;
        //         path_img_detail = total_product[i].img_detail;
        //         console.log("giong")
        //         console.log(path_img_info)


        //         handleSubmit(path_img_info);
        //     }
        // }

        // // window.open('../product_detail.html')
        // // $("#product-container-info").prepend('<img src="' + path_img_info + '" alt="" class="img-main">');

        // //load trang mới go back được

        // saveLocal($(this).attr('id'))
        // window.location = '../product_detail.html';


    // });


})

export { insertProduct };


