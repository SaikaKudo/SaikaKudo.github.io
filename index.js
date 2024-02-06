$(function(){
    var $btn = $('.category-btn [data-filter]'),
    $list = $('.category-list [data-category]');
    
    $btn.on('click', function(e) {
      e.preventDefault();
     
      var $btnCat = $(this).attr('data-filter');
      $list.removeClass('is-animate');
       
      if ($btnCat == 'all'){
         
        $list.fadeOut().promise().done(function() {
          $list.addClass('is-animate').fadeIn();
        });
       
      } else {
        $list.fadeOut().promise().done(function() {
          $list.filter('[data-category = "' + $btnCat + '"]').addClass('is-animate').fadeIn();
          
        });
      }
    });
});

$(".openbtn").click(function () {
  $(this).toggleClass('active');
});

// ページが読み込まれたら実行されるコード
document.addEventListener("DOMContentLoaded", function () {
  // 画像要素を取得
  const image = document.getElementById("mainImg");

  // 画像が非表示に設定されていることを確認
  image.style.opacity = "0";
  image.style.transform = "translateY(20px)";

  // ページが読み込まれたら0.5秒後にアニメーションを開始
  setTimeout(function () {
      image.style.transition = "opacity 0.5s ease-in-out, transform 0.5s ease-in-out";
      image.style.opacity = "1";
      image.style.transform = "translateY(0)";
  }, 500); // ミリ秒単位で待機する時間を設定
});


//ハンバーガーメニューのスクリプト
function toggleNav() {
  var body = document.body;
  var hamburger = document.getElementById("js-hamburger");
  var blackBg = document.getElementById("js-black-bg");

  hamburger.addEventListener('click', function() {
    body.classList.toggle('nav-open');
  });

  console.log("good");

  blackBg.addEventListener('click', function() {
    body.classList.remove('nav-open');
  });


}
toggleNav();