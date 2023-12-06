
//меню//

document.querySelector('.menu_btn').addEventListener('click', menu);

function menu() {
    document.querySelector('.menu').classList.toggle('menu_active');
    document.querySelector('.content').classList.toggle('content_active');
}

//kiss-members//

function function_Paul_Stanley() {
    document.querySelector('.Paul_Stanley_member').classList.add('Paul_Stanley_member_active');
    document.querySelector('.Paul_Stanley_name').classList.add('Paul_Stanley_name_active');
}

function function_Paul_Stanley_out() {
    document.querySelector('.Paul_Stanley_member').classList.remove('Paul_Stanley_member_active');
    document.querySelector('.Paul_Stanley_name').classList.remove('Paul_Stanley_name_active');
}

function function_Gine_Simmons() {
    document.querySelector('.Gine_Simmons_member').classList.add('Gine_Simmons_member_active');
    document.querySelector('.Gine_Simmons_name').classList.add('Gine_Simmons_name_active');
}

function function_Gine_Simmons_out() {
    document.querySelector('.Gine_Simmons_member').classList.remove('Gine_Simmons_member_active');
    document.querySelector('.Gine_Simmons_name').classList.remove('Gine_Simmons_name_active');
}

function function_Ace_Freley() {
    document.querySelector('.Ace_Freley_member').classList.add('Ace_Freley_member_active');
    document.querySelector('.Ace_Freley_name').classList.add('Ace_Freley_name_active');
}
function function_Ace_Freley_out() {
    document.querySelector('.Ace_Freley_member').classList.remove('Ace_Freley_member_active');
    document.querySelector('.Ace_Freley_name').classList.remove('Ace_Freley_name_active');
}

function function_Peter_Criss() {
    document.querySelector('.Peter_Criss_member').classList.add('Peter_Criss_member_active');
    document.querySelector('.Peter_Criss_name').classList.add('Peter_Criss_name_active');
}

function function_Peter_Criss_out() {
    document.querySelector('.Peter_Criss_member').classList.remove('Peter_Criss_member_active');
    document.querySelector('.Peter_Criss_name').classList.remove('Peter_Criss_name_active');
}


// музыка//


const dynasty = new Audio('./audio/IWMFLY.mp3');
dynasty.volume = 0.5;

function play_dynasty() {
    document.querySelector('.dynasty_cover').classList.add('dynasty_cover_active');
    dynasty.play();
}

function play_dynasty_out() {
    document.querySelector('.dynasty_cover').classList.remove('dynasty_cover_active');
    dynasty.pause();

}

const creatures = new Audio('./audio/ILIL.mp3');
creatures.volume =0.3;

function play_creatures() {
    document.querySelector('.creatures_cover').classList.add('creatures_cover_active');
    creatures.play();
}

function play_creatures_out() {
    document.querySelector('.creatures_cover').classList.remove('creatures_cover_active');
    creatures.pause();
}

const elder = new Audio('./audio/UTR.mp3');
elder.volume = 0.8;

function play_elder() {
    document.querySelector('.elder_cover').classList.add('elder_cover_active');
    elder.play();
}

function play_elder_out() {
    document.querySelector('.elder_cover').classList.remove('elder_cover_active');
    elder.pause();
}

const hotter = new Audio('./audio/P.mp3')
hotter.volume =0.5;

function play_hotter() {
    document.querySelector('.hotter_cover').classList.add('hotter_cover_active');
    hotter.play();
}

function play_hotter_out() {
    document.querySelector('.hotter_cover').classList.remove('hotter_cover_active');
    hotter.pause();
}

const kiss = new Audio('./audio/1Y.mp3');
kiss.volume =0.5;


function play_kiss() {
    document.querySelector('.kiss_cover').classList.add('kiss_cover_active');
    kiss.play();
}

function play_kiss_out() {
    document.querySelector('.kiss_cover').classList.remove('kiss_cover_active');
    kiss.pause();
}

const unm = new Audio('./audio/ITU.mp3');
unm.volume =0.5;

function play_unm() {
    document.querySelector('.unm_cover').classList.add('unm_cover_active');
    unm.play();
}

function play_unm_out() {
    document.querySelector('.unm_cover').classList.remove('unm_cover_active');
    unm.pause();
}

const anim = new Audio('./audio/HOF.mp3');
kiss.volume =0.5;

function play_anim() {
    document.querySelector('.anim_cover').classList.add('anim_cover_active');
    anim.play();
}

function play_anim_out() {
    document.querySelector('.anim_cover').classList.remove('anim_cover_active');
    anim.pause();
}


const dres = new Audio ('./audio/dres.mp3');
dres.volume =0.5;

function play_dres() {
    dres.play();
}
function play_dres_out() {
    dres.pause();
}

const des = new Audio ('./audio/des.mp3');
des.volume =0.5;

function play_des() {
    des.play();
}
function play_des_out() {
    des.pause();
}


const sh= new Audio ('./audio/sh.mp3');
sh.volume =0.5;

function play_sh() {
    sh.play();
}
function play_sh_out() {
    sh.pause();
}
// меню альбомов

function alb_menu() {
    document.querySelector('.album_menu').classList.add('album_menu_active');
    document.querySelector('.list').classList.add('list_active');
}

function alb_menu_out() {
    document.querySelector('.album_menu').classList.remove('album_menu_active');
    document.querySelector('.list').classList.remove('list_active');
}

// анимация в форме
 function name_animation () {
    
 }

//vocal paul stanley 

const p1 = new Audio('./audio/P1.mp3')
p1.volume =0.5;

const p2 = new Audio('./audio/P2.mp3')
p2.volume =0.3;

const p3 = new Audio('./audio/P3.mp3')
p3.volume =0.5;


function p_voc1() {
    document.querySelector('.play').classList.add('play_active');
    document.querySelector('.stop').classList.add('stop_active');
    p1.play();
}

function p_voc_out1() {
    document.querySelector('.play').classList.remove('play_active');
    document.querySelector('.stop').classList.remove('stop_active');
    p1.pause();
}

function p_voc2() {
    document.querySelector('.play_2').classList.add('play_active_2');
    document.querySelector('.stop_2').classList.add('stop_active_2');
    p2.play();
}

function p_voc_out2() {
    document.querySelector('.play_2').classList.remove('play_active_2');
    document.querySelector('.stop_2').classList.remove('stop_active_2');
    p2.pause();
}


function p_voc3() {
    document.querySelector('.play_3').classList.add('play_active_3');
    document.querySelector('.stop_3').classList.add('stop_active_3');
    p3.play();
}

function p_voc_out3() {
    document.querySelector('.play_3').classList.remove('play_active_3');
    document.querySelector('.stop_3').classList.remove('stop_active_3');
    p3.pause();
}

function  p_smoke() {
    document.querySelector('.smoke_img').classList.add('smoke_img_active');
}

// footer

function footer() {
    document.querySelector('.second_image').classList.add('second_image_active');
    document.querySelector('.first_image').classList.add('first_image_active');
}


function footer_out() {
    document.querySelector('.second_image').classList.remove('second_image_active');
    document.querySelector('.first_image').classList.remove('first_image_active');
}











// document.getElementById('Paul_Stanley_member').addEventListener('mouseup', function_Paul_Stanley)

// function function_Paul_Stanley() {
//     document.querySelector('.Paul_Stanley_member').classList.toggle('Paul_Stanley_member_active');

// }









//движение картинок часть 1//

// const scrollItems = document.querySelectorAll('.left_animation');

// const scrollAnimation = () => {
//     let windowCenter = (window.innerHeight / 2) + window.scrollY;
//     console.log(windowCenter)
//     scrollItems.forEach(el => {
//         let scrollOffset = el.offsetTop + (el.offsetTop / 2);
//         if (windowCenter >= (scrollOffset/4)) {
//             el.classList.add ('left_animation_active');
//         } else {
//             el.classList.remove ('left_animation_active');
//         }

//     })
// }

// window.addEventListener('scroll', () => {
//     scrollAnimation();
//     });