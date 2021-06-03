import {
    iphone, phone_Samsung, phone_oppo, phone_vivo, phone_vsmart, phone_realme,
    tablet_Samsung, iPad, sacDienThoai, pinDuPhong
} from './data.js'

import { insertProduct } from './content.js'

function insertProductType(idParent, arr, nameType, idChild) {

    // xoá id đã có
    var idRemove = idParent + " > " + "#" + idChild;
    $(idRemove).remove();

    $(idParent).prepend(
        '<div class="row product-type w-77p mt-20 bs-02" id="' + idChild + '">'
        + '<label for="" class="label-type">' + nameType + '</label> <br>'
        + '</div>'
    );

    // $(idParent).append(
    //     '<div class="row product-type w-77p mt-20 bs-02" id="' + idChild + '">'
    //     + '<label for="" class="label-type">' + type + '</label> <br>'
    //     + '</div>'
    // );



    for (let i = 0; i < arr.length; i++) {
        $("#" + idChild).append(
            // '<div class="col col-5">'
            // + '<div class="product">'
            // + '<img src="' + arr[i].img + '" class="product-img mt-8" alt="">'
            // + '<div class="product-info">'
            // + '<h3 class="product-name mt-10">' + arr[i].product_name + '</h3>'
            // + '<p class="product-price mt-10">' + arr[i].price + ' VND</p>'
            // + '</div>'
            // + '</div>'
            // + '</div>'

            '<div class="col col-5">'
            + '<div class="product"id="' + arr[i].product_id + '">'
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

$(document).ready(function () {

    // $("#phone").click(function () {

    // })
    $("#iphone").click(function () {
        // $("#phone-popular").hide();
        // $("#tablet-popular").hide();
        // $("#phone-accessories").hide();
        // $("#content").show();

        $("#product-container").hide();

        // console.log($("#product-container").length)

        // if ($("#product-container").length) {
        //     insertProductType2('#content', iphone, 'Iphone (Apple)', 'type-iphone');

        // } else {
        insertProductType('#content', iphone, 'Iphone (Apple)', 'type-iphone');

    })

    $("#samsung").click(function () {
        $("#phone-popular").hide();
        $("#tablet-popular").hide();
        $("#phone-accessories").hide();
        $("#content").show();
        insertProductType('#content', phone_Samsung, 'Samsung', 'type-samsung');


    })
    $("#oppo").click(function () {
        $("#phone-popular").hide();
        $("#tablet-popular").hide();
        $("#phone-accessories").hide();
        $("#content").show();
        insertProductType('#content', phone_oppo, 'Oppo', 'type-oppo');


    })
    $("#vivo").click(function () {
        $("#phone-popular").hide();
        $("#tablet-popular").hide();
        $("#phone-accessories").hide();
        $("#content").show();
        insertProductType('#content', phone_vivo, 'Vivo', 'type-vivo');


    })
    $("#vsmart").click(function () {
        $("#phone-popular").hide();
        $("#tablet-popular").hide();
        $("#phone-accessories").hide();
        $("#content").show();
        insertProductType('#content', phone_vsmart, 'Vsmart', 'type-smart');


    })
    $("#realme").click(function () {
        $("#phone-popular").hide();
        $("#tablet-popular").hide();
        $("#phone-accessories").hide();
        $("#content").show();
        insertProductType('#content', phone_realme, 'Realme', 'type-realme');


    })


    $("#ipad").click(function () {
        $("#phone-popular").hide();
        $("#tablet-popular").hide();
        $("#phone-accessories").hide();
        $("#content").show();
        insertProductType('#content', iPad, 'iPad (Apple)', 'type-ipad');


    })
    $("#tablet-samsung").click(function () {
        $("#phone-popular").hide();
        $("#tablet-popular").hide();
        $("#phone-accessories").hide();
        $("#content").show();
        insertProductType('#content', tablet_Samsung, 'Máy tính bảng Samsung', 'type-tablet-samsung');


    })





    $(window).resize(function () {

        var width = $(window).width();
        // console.log(width);
        if (width <= 576) {
            $('.icon-down').removeClass('ti-angle-down');
        }
        else {
            $('.icon-down').addClass('ti-angle-down');
        }
    });    

})
