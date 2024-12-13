document.addEventListener('DOMContentLoaded', () => {
    // スクロールアニメーションの処理
    const animateOnScroll = () => {
        // 1. スクロールでアニメーションさせたい要素（.fade-in クラスのついた要素）を取得
        const elements = document.querySelectorAll('.fade-in');
        
        elements.forEach(element => {
            const elementPosition = element.getBoundingClientRect().top;
            const screenPosition = window.innerHeight / 1.3; // スクロールアニメーションを開始する位置（画面の1/3あたり）

            // 2. 画面に要素が入ってきたら visible クラスを追加
            if (elementPosition < screenPosition) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible'); // 画面から外れたら visible クラスを削除
            }
        });

        // 3. スクロールしたときに動画にホバー効果を追加
        const videoContent = document.querySelectorAll('.video-content iframe');
        videoContent.forEach(iframe => {
            iframe.addEventListener('mouseenter', () => {
                iframe.style.transform = 'scale(1.05)';
                iframe.style.transition = 'transform 0.3s ease';
            });

            iframe.addEventListener('mouseleave', () => {
                iframe.style.transform = 'scale(1)';
            });
        });
    };

    // ページ読み込み時にスクロールアニメーションの初回チェック
    animateOnScroll();

    // スクロールイベントを監視
    window.addEventListener('scroll', animateOnScroll);

    // アハウの画像を動かす（右から左に出てくる）
    window.addEventListener('scroll', function() {
        const image = document.querySelector('.episode-image img');  // アハウの画像
        const rect = image.getBoundingClientRect();
        const windowHeight = window.innerHeight;

        // 画像が画面に入ったときに動かす
        if (rect.top < windowHeight && rect.bottom >= 0) {
            image.style.transition = 'transform 1s ease-out';
            image.style.transform = 'translateX(0)';  // 元の位置に戻す
        } else {
            image.style.transform = 'translateX(100%)';  // 画面外から右側に移動
        }
    });

    // 吹き出しの表示/非表示を制御する関数
    function toggleSpeechBubble() {
        const bubble = document.querySelector('.speech-bubble');
        const bubbleText = bubble.querySelector('p');
        bubble.classList.toggle('visible');
        
        if (bubble.classList.contains('visible')) {
            bubbleText.innerHTML = `キィニチの仕事について、アハウはしょっちゅう口出しするが、心の中では<br>「偉大なる聖龍クフル・アハウが、こんなちっぽけなことを気にしてどうすんだ？」と思っているようだ。<br>しかしそうでもしないと、「あのしぶどいやつがくたばる日」なんて<br>いつまで経っても訪れる気がしない。`;
        }
    }

    // ページ読み込み時に吹き出しを表示
    document.addEventListener('DOMContentLoaded', function() {
        const bubble = document.querySelector('.speech-bubble');
        bubble.style.transition = 'opacity 1s ease-in-out';
        setTimeout(function() {
            bubble.classList.add('visible');
        }, 500); // 少し遅れて吹き出しが表示される
    });
});