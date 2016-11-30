/*
Match	abcdefg	To be completed
Match	abcde	To be completed
Match	abc
*/

// Method 1
string.match(/.*/); // returns array [abcdefg, abcde, abc]

// Method 2
string.match(/\w+/); // returns array [abcdefg, abcde, abc]


/*
Match	abc123xyz	To be completed
Match	define "123"	To be completed
Match	var g = 123;
*/

string.match(/.*123.*/);


/*
Match	cat.	To be completed
Match	896.	To be completed
Match	?=+.	To be completed
Skip	abc1
*/

string.match(/.*\./);


/*
Match	can	To be completed
Match	man	To be completed
Match	fan	To be completed
Skip	dan	To be completed
Skip	ran	To be completed
Skip	pan
*/

string.match(/[cmf]an/);


/*
Match	hog	To be completed
Match	dog	To be completed
Skip	bog
*/

string.match(/[^b]og/);

/*
Match	Ana	To be completed
Match	Bob	To be completed
Match	Cpc	To be completed
Skip	aax	To be completed
Skip	bby	To be completed
Skip	ccz
*/

string.match(/[ABC].*/);


/*
Match	wazzzzup	To be completed
Match	wazzzup	To be completed
Skip	wazup
*/

string.match(/waz{2,4}up/);


/*

Match	aaaabcc	To be completed
Match	aabbbbc	To be completed
Match	aacc	To be completed
Skip	a
*/
string.match(/a*b*c*/);


/*
Match	Mission: successful	To be completed
Skip	Last Mission: unsuccessful	To be completed
Skip	Next Mission: successful upon capture of target
*/
string.match(/^Mission:\ssuccessful$/);


/*
Match	1.   abc	To be completed
Match	2.	abc	To be completed
Match	3.           abc	To be completed
Skip	4.abc
*/

string.match(/\sabc/);


/*
Task	Text	Capture Groups
Capture	file_record_transcript.pdf
Capture	file_07241999.pdf
Skip	testfile_fake.pdf.tmp
*/
string.match(/^(file_)\w+.pdf$/);


/*
Match	1 file found?	To be completed
Match	2 files found?	To be completed
Match	24 files found?	To be completed
Skip	No files found.
*/
string.match(/[0-9]{1,}\sfiles?\sfound\?/);
string.match(/\d+ files? found\?/);


/*
Capture	Jan 1987
Capture	May 1969
Capture	Aug 2011
*/
string.match((/\w+\s+(\d+)/));


/*

Capture	1280x720
Capture	1920x1600
Capture	1024x768
*/
string.match(/((\d+)x(\d+))/);


/*
Match	I love cats	To be completed
Match	I love dogs	To be completed
Skip	I love logs	To be completed
Skip	I love cogs
*/
string.match(/I love (cats|dogs)/);
