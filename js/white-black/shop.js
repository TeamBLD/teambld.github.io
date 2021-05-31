const SWITCH = document.querySelector(".switchdaynight");
const BODY = document.querySelector("body");
const TOPMENU = document.querySelector(".top-menu");
const PARTNER = document.querySelector(".home-partners");
const WARPCLIP = document.querySelector(".wrap .wrap-clip");
const H01 = document.querySelector("h1.merch-1");
const H02 = document.querySelector("h1.merch-2");
const H03 = document.querySelector("h1.merch-3");
const H04 = document.querySelector("h1.merch-4");
const H05 = document.querySelector("h1.merch-5");
const H06 = document.querySelector("h1.merch-6");
const H07 = document.querySelector("h1.merch-7");
const H21 = document.querySelector("h2.merch-1");
const H22 = document.querySelector("h2.merch-2");
const H23 = document.querySelector("h2.merch-3");
const H24 = document.querySelector("h2.merch-4");
const H25 = document.querySelector("h2.merch-5");
const H26 = document.querySelector("h2.merch-6");
const H27 = document.querySelector("h2.merch-7");
const H31 = document.querySelector("h3.merch-1");
const H32 = document.querySelector("h3.merch-2");
const H33 = document.querySelector("h3.merch-3");
const H34 = document.querySelector("h3.merch-4");
const H35 = document.querySelector("h3.merch-5");
const H36 = document.querySelector("h3.merch-6");
const H37 = document.querySelector("h3.merch-7");
const P01 = document.querySelector("p.merch-1");
const P02 = document.querySelector("p.merch-2");
const P03 = document.querySelector("p.merch-3");
const P04 = document.querySelector("p.merch-4");
const P05 = document.querySelector("p.merch-5");
const P06 = document.querySelector("p.merch-6");
const P07 = document.querySelector("p.merch-7");
const B01 = document.querySelector("b.shop-1");

SWITCH.addEventListener( "click", function() {

  if ( this.classList.contains("on") ){
    this.classList.remove("on");
    BODY.classList.remove("on");
    TOPMENU.classList.remove("on");
    PARTNER.classList.remove("on");
    WARPCLIP.classList.remove("on");
    H01.classList.remove("on");
    H02.classList.remove("on");
    H03.classList.remove("on");
    H04.classList.remove("on");
    H05.classList.remove("on");
    H06.classList.remove("on");
    H07.classList.remove("on");
    H21.classList.remove("on");
    H22.classList.remove("on");
    H23.classList.remove("on");
    H24.classList.remove("on");
    H25.classList.remove("on");
    H26.classList.remove("on");
    H27.classList.remove("on");
    H31.classList.remove("on");
    H32.classList.remove("on");
    H33.classList.remove("on");
    H34.classList.remove("on");
    H35.classList.remove("on");
    H36.classList.remove("on");
    H37.classList.remove("on");
    P01.classList.remove("on");
    P02.classList.remove("on");
    P03.classList.remove("on");
    P04.classList.remove("on");
    P05.classList.remove("on");
    P06.classList.remove("on");
    P07.classList.remove("on");
    B01.classList.remove("on");
  } else {
    this.classList.add("on");
    BODY.classList.add("on");
    TOPMENU.classList.add("on");
    PARTNER.classList.add("on");
    WARPCLIP.classList.add("on");
    H01.classList.add("on");
    H02.classList.add("on");
    H03.classList.add("on");
    H04.classList.add("on");
    H05.classList.add("on");
    H06.classList.add("on");
    H07.classList.add("on");
    H21.classList.add("on");
    H22.classList.add("on");
    H23.classList.add("on");
    H24.classList.add("on");
    H25.classList.add("on");
    H26.classList.add("on");
    H27.classList.add("on");
    H31.classList.add("on");
    H32.classList.add("on");
    H33.classList.add("on");
    H34.classList.add("on");
    H35.classList.add("on");
    H36.classList.add("on");
    H37.classList.add("on");
    P01.classList.add("on");
    P02.classList.add("on");
    P03.classList.add("on");
    P04.classList.add("on");
    P05.classList.add("on");
    P06.classList.add("on");
    P07.classList.add("on");
    B01.classList.add("on");
  }
});