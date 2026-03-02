# Vim
---
An improved version of the vi editor

General Keybinds
- prefix a number to do that command multiple times
- Undo: **u**
- Redo: **ctrl + r**

Last Line Mode
- Quit without saving: **:q!**

Visual Mode
- Enter visual mode: **v**
- Enter block-visual mode: **ctrl + v**
- Enter linewise-visual mode: **V** 

Normal Mode
- Movement: **h, j, k, l**
- Top or bottom of document: **gg, G**
- Beginning or end of line: **0, $**
- Beginning, previous beginning, or end of word: **w, b, e** (W, B, E for whitespace)

Insert Mode
- Insert where you are or at beginning of line: **i, I**
- Append where you are or at end of line: **a, A**
- Insert on a line above or below: **O, o**

Command Mode
- Enter command mode: **:**
- Find text: **:/text**
- Go to the next or previous occurrence: **n, N**
- Find and replace text: **:s/text/replace/\<options\>**
	- g replaces all occurrences on a single line
	- i makes it case insensitive
	- c checks for confirmation y-yes n-no a-all occurrences q-quit l-this line
	
	- % in :%s will check every line in the file
	- :n, m s/... will replace only within the lines (0 is first line, m is exclusive)
	- :s/.../.../\<options\> n will apply to this and n-1 lines after
- See [[Regex]] for more

ex. :%s/search/replace/gi

Replace Mode
- Enter replace mode: **R**
