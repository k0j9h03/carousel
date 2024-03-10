let photoLabel = 1;
const totalPhoto = 5;

document.querySelector('.carousel-remote').addEventListener('click', function(e){
    const target = e.target;
    const dataNumber = target.getAttribute('data-id');
    const caroSlide = document.querySelector('.carousel');


    for (let i=1; i<6; i++){
        if (dataNumber == i){
            document.querySelectorAll('.circle').forEach(function(a) {
                a.classList.remove('active');
                target.classList.add('active');
                caroSlide.style.transform = 'translateX(-' + (dataNumber-1) + '00vw)';
                photoLabel = i;
            });
        };
    };

});


document.querySelector('.prevnext').addEventListener('click', function(e) {
    const target2 = e.target;
    const leftClick2 = document.querySelector('.arrow-left');
    const rightClick2 = document.querySelector('.arrow-right');
    const caroSlide2 = document.querySelector('.carousel');

    if (target2 == rightClick2) {
        if (photoLabel < totalPhoto) { // 마지막 슬라이드를 넘어가지 않도록 합니다.
            caroSlide2.style.transform = 'translateX(-' + photoLabel + '00vw)';
            
            const circles = document.querySelectorAll('.circle');
            circles.forEach(function(element) {
                element.classList.remove('active');
            });
            circles[photoLabel].classList.add('active');
            
            photoLabel += 1; // photoLabel 값을 증가시킵니다.
        } else if (photoLabel == totalPhoto){
            caroSlide2.style.transform = 'translateX(-' + 0 + '00vw)';
            const circles = document.querySelectorAll('.circle');
            circles.forEach(function(element) {
                element.classList.remove('active');
            });
            circles[0].classList.add('active');

            photoLabel = 1;
        };
    };

    if (target2 == leftClick2) {
        if (photoLabel > 1) {
            photoLabel -= 1;  
            caroSlide2.style.transform = 'translateX(-' + (photoLabel - 1) + '00vw)';  
    
            const circles = document.querySelectorAll('.circle');
            circles.forEach(function(element) {
                element.classList.remove('active');
            });
            circles[photoLabel - 1].classList.add('active');
        } else if (photoLabel == 1){
            photoLabel = totalPhoto;
            caroSlide2.style.transform = 'translateX(-' + (totalPhoto - 1) + '00vw)';
            const circles = document.querySelectorAll('.circle');
            circles.forEach(function(element) {
                element.classList.remove('active');
            });
            circles[photoLabel-1].classList.add('active');

        };
    
    };

});

let 시작좌표 = 0;
let 누름 = false;


/** 터치이벤트 추가 */

document.querySelector('.mainimage1').addEventListener('mousedown', function (e) {
    시작좌표 = e.clientX;
    누름 = true;
    document.querySelector('.carousel').style.transition = '0s'
});

document.querySelector('.mainimage1').addEventListener('mouseup', function (e) {
    누름 = false;
    document.querySelector('.carousel').style.transition = '1s'
    if (e.clientX - 시작좌표 < -100){
        document.querySelector('.carousel').style.transform = 'translateX(-100vw)';
        const circles = document.querySelectorAll('.circle');
        circles.forEach(function(element) { 
            element.classList.remove('active');
        });
        circles[1].classList.add('active');
        photoLabel = photoLabel+1;
    } else {
        document.querySelector('.carousel').style.transform = 'translateX(0vw)';
    };
});

document.querySelector('.mainimage1').addEventListener('mousemove', function (e) {
    if (누름) {
        let 이동거리 = e.clientX - 시작좌표;
        document.querySelector('.carousel').style.transform = `translateX(${이동거리}px)`;
        if (이동거리 > 0){
            이동거리 = 0;
            document.querySelector('.carousel').style.transform = `translateX(${이동거리}px)`;
        };
    };
});



for (let i = 2; i <= 4; i++) {
    const imageClass = `.mainimage${i}`;

    document.querySelector(imageClass).addEventListener('mousedown', function(e) {
        시작좌표 = e.clientX;
        누름 = true;
        document.querySelector('.carousel').style.transition = '0s'
    });

    document.querySelector(imageClass).addEventListener('mouseup', function(e) {
        누름 = false;
        document.querySelector('.carousel').style.transition = '1s'
        if (e.clientX - 시작좌표 < -100) {
            document.querySelector('.carousel').style.transform = `translateX(-${i*100}vw)`;
            const circles = document.querySelectorAll('.circle');
            circles.forEach(element => element.classList.remove('active'));
            circles[i].classList.add('active');
            photoLabel = photoLabel + 1;
        } else if (e.clientX - 시작좌표 > 100) {
            document.querySelector('.carousel').style.transform = `translateX(-${(i-2)*100}vw)`;
            const circles = document.querySelectorAll('.circle');
            circles.forEach(element => element.classList.remove('active'));
            circles[i-2].classList.add('active');
            photoLabel = photoLabel - 1;
        } else {
            document.querySelector('.carousel').style.transform = `translateX(-${(i-1)*100}vw)`;
        };
    });

    document.querySelector(imageClass).addEventListener('mousemove', function(e) {
        if (누름) {
            let 이동거리 = e.clientX - 시작좌표;
            document.querySelector('.carousel').style.transform = `translateX(calc(-${(i-1)*100}vw + ${이동거리}px))`;
        };
    });
}


document.querySelector('.mainimage5').addEventListener('mousedown', function (e) {
    시작좌표 = e.clientX;
    누름 = true;
    document.querySelector('.carousel').style.transition = '0s'
});

document.querySelector('.mainimage5').addEventListener('mouseup', function (e) {
    누름 = false;
    document.querySelector('.carousel').style.transition = '1s'
    if (e.clientX - 시작좌표 > -100){
        document.querySelector('.carousel').style.transform = 'translateX(-300vw)';
        const circles = document.querySelectorAll('.circle');
        circles.forEach(function(element) { 
            element.classList.remove('active');
        });
        circles[3].classList.add('active');
        photoLabel = photoLabel-1;
    } else {
        document.querySelector('.carousel').style.transform = 'translateX(-400vw)';
    };
});

document.querySelector('.mainimage5').addEventListener('mousemove', function (e) {
    if (누름) {
        let 이동거리 = e.clientX - 시작좌표;
        document.querySelector('.carousel').style.transform = `translateX(calc(-400vw + ${이동거리}px))`;
        if (이동거리 < 0){
            이동거리 = 0;
            document.querySelector('.carousel').style.transform = `translateX(calc(-400vw + ${이동거리}px))`;
        };
        
    };
});

window.addEventListener('resize', function() {
    const caroSlide = document.querySelector('.carousel');
    caroSlide.style.transition = 'none'; // 즉각적인 반응을 위해 트랜지션을 비활성화
    caroSlide.style.transform = 'translateX(-' + (photoLabel-1) + '00vw)'; // 현재 photoLabel 값을 기반으로 위치 조정
    setTimeout(() => caroSlide.style.transition = '1s', 50); // 리사이즈 후 짧은 시간 뒤에 트랜지션을 다시 활성화
});


