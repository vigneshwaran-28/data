/*

normal:
when html is parsed and script encounters then html is paused and script is fetched and it is executed 
and then only html will start to continue

<script src=""></script>

html----script----execute script----then continues html


async:
when html is parsed and script encounters then html is parallely fetches the data from the network and 
script is fetched ,html paused and script is executed and then only html will start to continue

<script async src=""></script>

html----from network script fetched,html-parallel execution----stop html---run script----continue html


defer:
when html is parsed and script encounters then html is parallely fetches the data from the network and 
html gets completely executed and then only it comes to script part.

<script defer src=""></script>

html----from network script fetched,html-parallel execution----html finishes----script started 


*/