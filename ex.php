$json = file_get_contents("credentials.json");

var_dump(json_decode($json));
$obj = json_decode($json,true);


$title_one = $obj['login'];


echo $title_one;
