<?php 
////
//サインアウトコントローラー
///

//設定を読み込み
include_once '../config.php';
//便利な関数を読み込む
include_once '../util.php';

//ユーザー情報セッション削除
deleteUserSession();

//ログイン画面に遷移
header('Location: ' .HOME_URL . 'Controllers/sign-in.php');
exit;