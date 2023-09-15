//
//いいねようのjs
//
$(function(){
    //いいねがクリックされた時
    $('.js-like').click(function (){
        const this_obj = $(this);
        const like_id = $(this).data('like-id');
        const like_count_obj = $(this).parent().find('.js-like-count');
        let like_count = Number(like_count_obj.html());
        //alert(like_count);
        if (like_id) {
            //いいね取り消し
            //いいねカウントを減らす
            like_count--;
            like_count_obj.html(like_count);
            this_obj.data('like-id', null);

            //いいねぼたんの色をグレーに変更
            $(this).find('img').attr('src', '../Views/img/icon-heart.svg');
        } else {
            //いいね付
            //いいねカウントを増やす
            like_count++;
            like_count_obj.html(like_count);
            this_obj.data('like-id', true);

            //いいねぼたんの色を青に変更
            $(this).find('img').attr('src', '../Views/img/icon-heart-twitterblue.svg');
        }
    });
})