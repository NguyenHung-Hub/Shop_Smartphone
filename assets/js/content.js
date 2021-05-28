import {Iphone, phone_Samsung, tablet_Samsung, iPad, sacDienThoai, pinDuPhong} from './data.js'

// console.log(Iphone[0].product_name);

$(document).ready(function () {

    const mySlide = document.querySelectorAll('.slide');
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

    // let Iphone = [
    //     {
    //         product_name: 'Iphone 12 Pro Max 128GB',
    //         price: '30.990.000',
    //         img: './assets/img/product/phone/iphone/iphone-12-pro-max-xanh-duong.jpg'
    //     },
    //     {
    //         product_name: 'Iphone 12 64GB',
    //         price: '20.390.000',
    //         img: './assets/img/product/phone/iphone/iphone-12-violet.jpg'
    //     },
    //     {
    //         product_name: 'Iphone 12 Pro Max 512GB',
    //         price: '41.490.000',
    //         img: './assets/img/product/phone/iphone/iphone-12-pro-max-vang.jpg'
    //     },
    //     {
    //         product_name: 'Iphone 12 Pro Max 256GB',
    //         price: '34.990.000',
    //         img: './assets/img/product/phone/iphone/iphone-12-pro-max-vang.jpg'
    //     },
    //     {
    //         product_name: 'Iphone 12 Mini 256GB',
    //         price: '21.490.000',
    //         img: './assets/img/product/phone/iphone/iphone-23-mini-xanh-la-new-600x600-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Iphone 12 Pro 256GB',
    //         price: '25.690.000',
    //         img: './assets/img/product/phone/iphone/iphone-12-do-new-600x600-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Iphone 12 Mini 64GB',
    //         price: '17.390.000',
    //         img: './assets/img/product/phone/iphone/iphone-12-violet.jpg'
    //     },
    //     {
    //         product_name: 'Iphone 12 Mini 64GB',
    //         price: '18.190.000',
    //         img: './assets/img/product/phone/iphone/iphone-12-pro-max-xanh-duong.jpg'
    //     },
    //     {
    //         product_name: 'Iphone 12 Pro Max 256GB',
    //         price: '34.990.000',
    //         img: './assets/img/product/phone/iphone/iphone-12-do-new-600x600-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Iphone XR 128GB',
    //         price: '15.590.000',
    //         img: './assets/img/product/phone/iphone/iphone-xr-128gb-600x600.jpg'
    //     },

    // ];





    //chèn điện thoại 
    // for (let i = 0; i < Iphone.length; i++) {
    //     $("#phone-popular").append(
    //         '<div class="col col-5">'
    //             + '<div class="product">'
    //                 + '<img src="' + Iphone[i].img + '" class="product-img mt-8" alt="">'
    //                 + '<div class="product-info">'
    //                     + '<h3 class="product-name mt-10">' + Iphone[i].product_name + '</h3>'
    //                     + '<p class="product-price mt-10">' + Iphone[i].price + ' VND</p>'
    //                 + '</div>'
    //             + '</div>'
    //         + '</div>'
    //     )

    // }

    // let phone_Samsung = [
    //     {
    //         product_name: 'Samsung Galaxy S21 5G',
    //         price: '14.990.000',
    //         img: './assets/img/product/phone/samsung/samsung-galaxy-s21-violet.jpg'
    //     },
    //     {
    //         product_name: 'Samsung Galaxy Note20 Ultral 5G',
    //         price: '32.990.000',
    //         img: './assets/img/product/phone/samsung/sam-sung-note-20-ultra-vang-dong-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Samsung Galaxy Note20 Ultral',
    //         price: '29.990.000',
    //         img: './assets/img/product/phone/samsung/samsung-galaxy-note-20-ultra-den-600x600-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Samsung Galaxy S21 Ultral 5G 256GB',
    //         price: '25.990.000',
    //         img: './assets/img/product/phone/samsung/samsung-galaxy-s21-ultra-256gb-den-600x600-1-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Samsung Galaxy S21 Ultral 5G 128GB',
    //         price: '22.590.000',
    //         img: './assets/img/product/phone/samsung/samsung-galaxy-s21-ultra-bac-600x600-1-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Samsung Galaxy Z Fold2 5G',
    //         price: '50.000.000',
    //         img: './assets/img/product/phone/samsung/samsung-galaxy-z-fold-2-vang-dong-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Samsung Galaxy Note 20 5G',
    //         price: '32.990.000',
    //         img: './assets/img/product/phone/samsung/samsunggalaxynote20ultratrangnew-600x600-600x600.jpg'
    //     },
    // ];

    // for (let i = 0; i < phone_Samsung.length; i++) {
    //     $("#phone-popular").append(
    //         '<div class="col col-5">'
    //             + '<div class="product">'
    //                 + '<img src="' + phone_Samsung[i].img + '" class="product-img mt-8" alt="">'
    //                 + '<div class="product-info">'
    //                     + '<h3 class="product-name mt-10">' + phone_Samsung[i].product_name + '</h3>'
    //                     + '<p class="product-price mt-10">' + phone_Samsung[i].price + ' VND</p>'
    //                 + '</div>'
    //             + '</div>'
    //         + '</div>'
    //     )

    // }

    // let tablet_Samsung = [
    //     {
    //         product_name: 'Samsung Galaxy Tab S7',
    //         price: '18.590.000',
    //         img: './assets/img/product/tablet/samsung/samsung-galaxy-tab-s7-gold-new-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Samsung Galaxy Tab A7',
    //         price: '7.990.000',
    //         img: './assets/img/product/tablet/samsung/samsung-galaxy-tab-a7-2020-vangdong-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Samsung Galaxy Tab A8',
    //         price: '3.690.000',
    //         img: './assets/img/product/tablet/samsung/samsung-galaxy-tab-a8-t295-2019-silver-1-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Samsung Galaxy Tab S6 Lite',
    //         price: '9.990.000',
    //         img: './assets/img/product/tablet/samsung/samsung-galaxy-tab-s6-lite-600x600-2-600x600.jpg'
    //     },
    // ];

    //chèn tablet
    // for (let i = 0; i < tablet_Samsung.length; i++) {
    //     $("#tablet").append(
    //         '<div class="col col-5">'
    //         + '<div class="product">'
    //         + '<img src="' + tablet_Samsung[i].img + '" class="product-img mt-8" alt="">'
    //         + '<div class="product-info">'
    //         + '<h3 class="product-name mt-10">' + tablet_Samsung[i].product_name + '</h3>'
    //         + '<p class="product-price mt-10">' + tablet_Samsung[i].price + ' VND</p>'
    //         + '</div>'
    //         + '</div>'
    //         + '</div>'
    //     )

    // }


    // let iPad = [
    //     {
    //         product_name: 'iPad Ari 4 Wifi Cellular 256GB (2020)',
    //         price: '24.190.000',
    //         img: './assets/img/product/tablet/iPad/ipad-4-cellular-xanh-new-600x600-600x600.jpg'
    //     },
    //     {
    //         product_name: 'iPad Ari 4 Wifi 64GB (2020)',
    //         price: '16.190.000',
    //         img: './assets/img/product/tablet/iPad/ipad-air-4-wifi-64gb-2020-xanhla-600x600-600x600.jpg'
    //     },
    //     {
    //         product_name: 'iPad Pro 12.9inch Wifi Cellular 128GB (2020)',
    //         price: '31.190.000',
    //         img: './assets/img/product/tablet/iPad/ipad-pro-12-9-inch-wifi-128gb-2020-bac-600x600-1-600x600.jpg'
    //     },
    //     {
    //         product_name: 'iPad Pro 12.9inch Wifi Cellular 128GB (2020)',
    //         price: '27.590.000',
    //         img: './assets/img/product/tablet/iPad/ipad-pro-12-9-inch-wifi-cellular-128gb-2020-bac-600x600-1-600x600.jpg'
    //     },
    //     {
    //         product_name: 'iPad Pro M1 Wifi Cellular 256GB (2021)',
    //         price: '37.990.000',
    //         img: './assets/img/product/tablet/iPad/ipad-pro-2021-129-inch-silver-600x600.jpg'
    //     },
    //     {
    //         product_name: 'iPad Pro M1 Wifi Cellular 128GB (2021)',
    //         price: '29.590.000',
    //         img: './assets/img/product/tablet/iPad/ipad-pro-2021-129-inch-gray-600x600.jpg'
    //     },

    // ];


    //chèn tablet
    // for (let i = 0; i < iPad.length; i++) {
    //     $("#tablet").append(
    //         '<div class="col col-5">'
    //         + '<div class="product">'
    //         + '<img src="' + iPad[i].img + '" class="product-img mt-8" alt="">'
    //         + '<div class="product-info">'
    //         + '<h3 class="product-name mt-10">' + iPad[i].product_name + '</h3>'
    //         + '<p class="product-price mt-10">' + iPad[i].price + ' VND</p>'
    //         + '</div>'
    //         + '</div>'
    //         + '</div>'
    //     )

    // }


    // let sacDienThoai = [
    //     {
    //         product_name: 'Sạc Super VOOC 30W OPPO',
    //         price: '740.000',
    //         img: './assets/img/product/accessories/sacDienThoai/vooc-30w-oppo-vc56jauh-new-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Sạc nhanh Samsung 25W ',
    //         price: '490.000',
    //         img: './assets/img/product/accessories/sacDienThoai/type-c-pd-25w-samsung-ep-ta800nw-trang-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Sạc Super VOOC 65W OPPO',
    //         price: '990.000',
    //         img: './assets/img/product/accessories/sacDienThoai/supervooc-65w-oppo-vca7jauh-new-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Cáp Type C Hydrus',
    //         price: '54.000',
    //         img: './assets/img/product/accessories/sacDienThoai/cap-type-c-1m-hydrus-dr-t01-ava-1-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Cáp Lightning Hydrus',
    //         price: '54.000',
    //         img: './assets/img/product/accessories/sacDienThoai/cap-lightning-1m-hydrus-dr-l03-ava-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Cáp chuyển đổi Type C - 3.5mm',
    //         price: '180.000',
    //         img: './assets/img/product/accessories/sacDienThoai/cap-chuyen-doi-type-c-sang-35mm-samsung-ee-uc10juw-600x600.jpg'
    //     },
    // ];

    // for (let i = 0; i < sacDienThoai.length; i++) {
    //     $("#phone-accessories").append(
    //         '<div class="col col-5">'
    //         + '<div class="product">'
    //         + '<img src="' + sacDienThoai[i].img + '" class="product-img mt-8" alt="">'
    //         + '<div class="product-info">'
    //         + '<h3 class="product-name mt-10">' + sacDienThoai[i].product_name + '</h3>'
    //         + '<p class="product-price mt-10">' + sacDienThoai[i].price + ' VND</p>'
    //         + '</div>'
    //         + '</div>'
    //         + '</div>'
    //     )

    // }

    // let pinDuPhong = [
    //     {
    //         product_name: 'Pin sạc dự phòng Hydrus 10.000mAh',
    //         price: '343.000',
    //         img: './assets/img/product/accessories/pinDuPhong/hydrus-pj-jp196-ava-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Pin sạc dự phòng Oppo VOOC 10.000mAh',
    //         price: '1.800.000',
    //         img: './assets/img/product/accessories/pinDuPhong/oppo-vooc-30w-pbv02-1-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Pin sạc dự phòng Samsung 10.000mAh',
    //         price: '990.000',
    //         img: './assets/img/product/accessories/pinDuPhong/polymer-10000mah-type-c-25w-samsung-eb-p3300-600x600.jpg'
    //     },
    //     {
    //         product_name: 'Pin sạc dự phòng Xiaomi 10.000mAh',
    //         price: '690.000',
    //         img: './assets/img/product/accessories/pinDuPhong/polymer-10000mah-xiaomi-ultra-compact-avt-1-600x600.jpg'
    //     },
        
    // ];

    // for (let i = 0; i < pinDuPhong.length; i++) {
    //     $("#phone-accessories").append(
    //         '<div class="col col-5">'
    //         + '<div class="product">'
    //         + '<img src="' + pinDuPhong[i].img + '" class="product-img mt-8" alt="">'
    //         + '<div class="product-info">'
    //         + '<h3 class="product-name mt-10">' + pinDuPhong[i].product_name + '</h3>'
    //         + '<p class="product-price mt-10">' + pinDuPhong[i].price + ' VND</p>'
    //         + '</div>'
    //         + '</div>'
    //         + '</div>'
    //     )

    // }

    // for (let i = 0; i < Iphone.length; i++) {
    //     $("#phone-popular").append(
    //         '<div class="col col-5">'
    //         + '<div class="product">'
    //         + '<img src="' + Iphone[i].img + '" class="product-img mt-8" alt="">'
    //         + '<div class="product-info">'
    //         + '<h3 class="product-name mt-10">' + Iphone[i].product_name + '</h3>'
    //         + '<p class="product-price mt-10">' + Iphone[i].price + ' VND</p>'
    //         + '</div>'
    //         + '</div>'
    //         + '</div>'
    //     )

    // }

    // for (let i = 0; i < Iphone.length; i++) {
    //     $("#phone-popular").append(
    //         '<div class="col col-5">'
    //         + '<div class="product">'
    //         + '<img src="' + Iphone[i].img + '" class="product-img mt-8" alt="">'
    //         + '<div class="product-info">'
    //         + '<h3 class="product-name mt-10">' + Iphone[i].product_name + '</h3>'
    //         + '<p class="product-price mt-10">' + Iphone[i].price + ' VND</p>'
    //         + '</div>'
    //         + '</div>'
    //         + '</div>'
    //     )

    // }

    function insertProduct(id, arr) {
        for (let i = 0; i < arr.length; i++) {
            $(id).append(
                '<div class="col col-5">'
                + '<div class="product">'
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

    insertProduct('#phone-popular', Iphone);
    insertProduct('#phone-popular', phone_Samsung);
    insertProduct('#tablet', iPad);
    insertProduct('#tablet', tablet_Samsung);
    insertProduct('#phone-accessories', sacDienThoai);
    insertProduct('#phone-accessories', pinDuPhong);

    //hover vào sản phẩm sau khi thêm sản phẩm
    $('.product').on("mouseenter", function () {
        // $(this).css("z-index", "20");
        $(this).css("box-shadow", "0 0 8px rgba(0, 0, 0, 0.2), 0px 8px 8px rgba(0, 0, 0, 0.2)");
        $(this).css("border", "1px solid rgba(0, 0, 0, 0.1)");
        $(this).css("cursor", "pointer");
        $(this).click(function () {
            console.log("chi tiet sp");
        });
    }).on("mouseleave", function () {
        $(".product").css("box-shadow", "none");
        $(this).css("border", "none");

    });



})   


