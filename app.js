const omikuji = function() {
    let randNum = Math.floor(Math.random()*4);
    switch (randNum){
        case 0:
            document.getElementById('todayDraw').innerHTML = '今日は・・・大吉！';
        case 1:
            document.getElementById('todayDraw').innerHTML = '今日は・・・吉！';
        case 2:
            document.getElementById('todayDraw').innerHTML = '今日は小吉';
        case 3:
            document.getElementById('todayDraw').innerHTML = '今日は凶・・';
    }
}

omiButton = document.getElementById('omibutton');

omiButton.onclick = omikuji;