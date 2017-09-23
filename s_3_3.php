<?php
	if ($_GET["id"] == '1') echo "Содержимое 1<br>Маша ела кашу.";
	elseif ($_POST["id"] == '2') echo "Содержимое 2<br>Мама ела Машу.";
	else return false;
?>