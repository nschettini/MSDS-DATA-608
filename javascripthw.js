<!DOCTYPE html>
<html>
<head><title>DATA 608-HW5:JavaScript</title></head>

<p id='string'></p>
<p id='table'></p>

<!-- Create a function to reverse any word that you type in. -->
<script type="text/javascript">

function reversestring(input) {

    var str_as_array = input.split('');
    var rev_array = str_as_array.reverse();
    var rev_str = rev_array.join('');
    return rev_str;
}
</script>

<!-- Create a function that takes an input number, and prints a table
with the first 20 multiples of the number, in order 5x4 -->
<script type="text/javascript">
function multiple_table(input) {
	var tbl = '<table>'; 
	var mult = 1;
	for (var rw = 1; rw < 6; rw++) {
		tbl = tbl + '<tr>' 
		for (var col = 1; col < 5; col++) {
			var cellval = input * mult 
			tbl = tbl + '<td>' + cellval + '</td>' 
			mult++; 
		}
		tbl = tbl + '</tr>' 
	}
	tbl = tbl + '</table>' 
	return tbl
}
var my_number = prompt('Input a num');
var my_table = 'Your table:\n' + multiple_table(my_number);
document.getElementById('table').innerHTML = my_table;
</script>
</html>
