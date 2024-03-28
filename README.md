# Welcome to Filter Table.

This is a small package which allows filtering of tables in browsers.

Include in your html

    <script  src="https://cdn.jsdelivr.net/gh/DelsauxHenry/filterTable@v1.0.0/tableFilter.min.js"></script>

[View demo](https://m63vpf.csb.app/) or [view sandbox example](https://codesandbox.io/p/sandbox/table-filter-demo-m63vpf?layout=%257B%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522rootPanelGroup%2522%253A%257B%2522direction%2522%253A%2522horizontal%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522id%2522%253A%2522ROOT_LAYOUT%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522UNKNOWN%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522club5uzc300063j6idgd347rz%2522%252C%2522sizes%2522%253A%255B100%252C0%255D%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522EDITOR%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522EDITOR%2522%252C%2522id%2522%253A%2522club5uzc200023j6i3jwr1y4j%2522%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522direction%2522%253A%2522horizontal%2522%252C%2522id%2522%253A%2522SHELLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522SHELLS%2522%252C%2522id%2522%253A%2522club5uzc200033j6igofihp3m%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%257D%252C%257B%2522type%2522%253A%2522PANEL_GROUP%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522direction%2522%253A%2522vertical%2522%252C%2522id%2522%253A%2522DEVTOOLS%2522%252C%2522panels%2522%253A%255B%257B%2522type%2522%253A%2522PANEL%2522%252C%2522contentType%2522%253A%2522DEVTOOLS%2522%252C%2522id%2522%253A%2522club5uzc200053j6itcrl0elz%2522%257D%255D%252C%2522sizes%2522%253A%255B100%255D%257D%255D%252C%2522sizes%2522%253A%255B50%252C50%255D%257D%252C%2522tabbedPanels%2522%253A%257B%2522club5uzc200023j6i3jwr1y4j%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522club5uzc200013j6id016fbm3%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522FILE%2522%252C%2522filepath%2522%253A%2522%252Findex.html%2522%257D%255D%252C%2522id%2522%253A%2522club5uzc200023j6i3jwr1y4j%2522%252C%2522activeTabId%2522%253A%2522club5uzc200013j6id016fbm3%2522%257D%252C%2522club5uzc200053j6itcrl0elz%2522%253A%257B%2522tabs%2522%253A%255B%257B%2522id%2522%253A%2522club5uzc200043j6ivwnom3eg%2522%252C%2522mode%2522%253A%2522permanent%2522%252C%2522type%2522%253A%2522UNASSIGNED_PORT%2522%252C%2522port%2522%253A0%252C%2522path%2522%253A%2522%252F%2522%257D%255D%252C%2522id%2522%253A%2522club5uzc200053j6itcrl0elz%2522%252C%2522activeTabId%2522%253A%2522club5uzc200043j6ivwnom3eg%2522%257D%252C%2522club5uzc200033j6igofihp3m%2522%253A%257B%2522tabs%2522%253A%255B%255D%252C%2522id%2522%253A%2522club5uzc200033j6igofihp3m%2522%257D%257D%252C%2522showDevtools%2522%253Atrue%252C%2522showShells%2522%253Afalse%252C%2522showSidebar%2522%253Atrue%252C%2522sidebarPanelSize%2522%253A15%257D)

## Requirements
This package utilises Jquery for DOM manipulation and Bootstrap icons for identifying filter direction.

Include all:
```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.10.3/font/bootstrap-icons.css"/>
<script  src="https://cdn.jsdelivr.net/npm/jquery@3.6.1/dist/jquery.min.js"></script>
<script  src="https://cdn.jsdelivr.net/gh/DelsauxHenry/filterTable@v1.0.0/tableFilter.min.js"></script>
```

## Usage
Simply add the class `.tableFilter` to any `<table>` element and the `.fiterable` class to each of the headers which should be filtered.

Note: to allow for multiple tables on each page - every filterable table must have an ID.
```html 
<table class="table tableFilter" id="CityTable">
	<thead>
		<th class="filterable">Name</th>
		<th class="filterable">County</th>
		<th class="filterable">Population</th>
		<th class="filterable">Year of City Status</th>
	</thead>
	<tbody>...</tbody>
</table>
```

## Future Developments
- Remove dependance on Jquery/icons to make package pure Js
