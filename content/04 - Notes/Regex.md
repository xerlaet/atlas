# Regex
---

. any character
[] character class ex. \[a-zA-Z], \[aeiou], \[0-9], \[A-F0-9], \[ !?]
- ^ will negate things ex. \[^0-9] for anything besides 0-9
- Special characters that VIM uses
	- /\\d for digits
	- /\\D for non digits
	- /\\l for lowercase letters and /\\ for non lowercase
	- /\\u for uppercase and /\\U for non uppercase
	- /\\x for hex and /\\X for non hex
	- /\\s for whitespace and /\\S for non whitespace
	- /\\w for word (lowercase, uppercase, numbers, and underscore) and /\\W for non words
- Quantifiers
	- [ ]\\{n} will repeat the pattern n times
	- {n,m} for min max, {n,} for min max inf, {,m} for 0 min m max, {} or {,} for zero or more
	- Shortcuts
		- {} or {,} is the same as *
		- {1,} is the same as \\+
		- {,1} is the same as \\?
	- Greedy vs Lazy (and possessive)
	- by default they are greedy and will match the largest value, adding a - will make them lazy ex. {-} will match 0 or more, but the shortest match
- Anchors
	- ^ will match the start of the line ex. \^donut
	- $ will match the end of the line ex. donut$
	- <> are word boundaries ex. \\<do\\> will match "do" not "donut" (you don't need to use both you can use just one)
	- \\| is or ex. pancakes\\|waffles
- Groups
	- ( ) can make a word or expression into a "atom" to work with quantifiers
		- ex. \\(donut\\)\\+ for one or more donuts
	- %( ) will make the group not able to be captured (can't be backreferenced)
		- technically improves performance but that's about it
- Backreferences
	- Anytime you make a group ( ) you can then reference it later on with a \\n
	- ex. \\(foo\\)\\(bar\\) \\1\\2 is the same as foobar foobar
	- \\0 or & will match the entire regex match (only really useful using substitute in [Vim](/notes/vim))
- Look ahead and look behind
	- \\ze looks ahead ex. foo\\zebar will match foobar, but select foo
		- Same thing as before you can also ex. \\(foo\\)\\@<=bar
		- You can also use \\@= ex. foo\\(bar\\)\\@=
	- \\zs looks behind ex. foo\\zsbar will match foobar, but selects bar
	- if you add ! to the end of \\@= or \\@<= it will be the negation of it
- Vim magic
	- if you want to not have to escape special characters, add \\v to the start
	- ex. \\v(foo)+ now searches for "foo" 1 or more times, not "(foo)+" 
:%s/"\(trigger\|replacement\|options\|priority\)"/\1/
