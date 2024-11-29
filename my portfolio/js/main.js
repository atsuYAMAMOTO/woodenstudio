// GSAPのScrollTriggerプラグインを有効化
gsap.registerPlugin(ScrollTrigger);

// キャッチコピー
gsap.fromTo(
    ".catchcopy",
    { x: -200, opacity: 0 }, // 初期値
    {
        x: 0,
        opacity: 1,
        duration: 2, // アニメーション時間
        scrollTrigger: {
            trigger: ".catchcopy",
            start: "top center",
        }
    }
);

gsap.to('.hero__img',{
    y:200,
    duration:3,
    scale:1.8,
    repeat:0,
    ease: "bounce.out"

})


// aboutの左側
gsap.fromTo(
    ".about .column-left",
    { y: -100, opacity: 0 }, // 初期値
    {
        y: 0,
        opacity: 1,
        duration: 2, // アニメーション時間
        scrollTrigger: {
            trigger: ".about .column-left",
            start: "top center",
        }
    }
);

// aboutの右側
gsap.fromTo(
    ".about .column-right",
    { y: 100, opacity: 0 }, // 初期値
    {
        y: 0,
        opacity: 1,
        duration: 1, // アニメーション時間
        scrollTrigger: {
            trigger: ".about .column-right",
            start: "top center",
        }
    }
);


// works
gsap.fromTo(
    ".works-items",
    1,
    {
        y: 50,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".works-items",
            start: "top center",
        }
    }
)

// PROFILEのテキスト
gsap.fromTo(
    ".profile-text",
    1,
    {
        y: 50,
        opacity: 0
    },
    {
        y: 0,
        opacity: 1,
        scrollTrigger: {
            trigger: ".profile-text",
            start: "top center",
        }
    }
)

// PROFILEの写真
gsap.fromTo(
    ".profile-frame",
    { y: 100, opacity: 0 }, // 初期値
    {
        y: 0,
        opacity: 1,
        duration: 1, // アニメーション時間
        delay: 1, // 遅延
        scrollTrigger: {
            trigger: ".profile-frame",
            start: "top center",
        }
    }
);

// FORM
gsap.fromTo(
    ".form li",
    { y: 100, opacity: 0 }, // 初期値
    {
        y: 0,
        opacity: 1,
        duration: 1, // アニメーション時間
        scrollTrigger: {
            trigger: ".form li",
            start: "top center",
        }
    }
);

