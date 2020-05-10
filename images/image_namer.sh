for file in $(ls)
do
	echo "'<div class=\"carousel-item\"><img src=\"images/$file\" class=\"d-block w-100\" alt=\"image\"></div>',"
done

