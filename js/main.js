
// レスポンシブ対応
const mm = gsap.matchMedia();
// 端末の横幅が1025以上の時（PC)
mm.add("(min-width: 1025px)", () => {
    gsap.fromTo(
        ".concept-first .column-left",
        1,
        {
            x: -100,
            y: 100,
            opacity: 0
        },
        {
            x: 0,
            y: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".concept-first .column-left",
                start: "top center",
                markers: true
            }
        }
    
    )
    // CONCEPTの右側
    gsap.fromTo(
        ".concept-first .column-right",
        3,
        {
            x: 100,
            y: 100,
            opacity: 0
        },
        {
            x: 0,
            y: 0,
            opacity: 1,
            // 遅延の設定
            delay: 1,
            scrollTrigger:{
                trigger: ".concept-first .column-right",
                start: "top center",
                markers: true
            }
        }
    
    )

})
// 端末の横幅が599以下の時（スマホ）
mm.add("(max-width: 599px)", () => {
    gsap.fromTo(
        ".concept-first .column-left",
        1,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".concept-first .column-left",
                start: "top center",
            }
        }
    
    )
    // CONCEPTの右側
    gsap.fromTo(
        ".concept-first .column-right",
        1,
        {
            y: 100,
            opacity: 0
        },
        {
            y: 0,
            opacity: 1,
            scrollTrigger:{
                trigger: ".concept-first .column-right",
                start: "top center",
            }
        }
    
    )

})