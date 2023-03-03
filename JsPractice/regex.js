/*

Regular Expressions
A regular expression (also “regexp”, or just “reg”) consists of a pattern and optional flags.

There are two syntaxes that can be used to create a regular expression object.

The “long” syntax:

regexp = new RegExp("pattern", "flags");
And the “short” one, using slashes "/":

regexp = /pattern/; // no flags
regexp = /pattern/gmi; // with flags g,m and i (to be covered soon)

A regular expression consists of a pattern and optional flags: g, i, m, u, s, y.
Without flags and special symbols (that we’ll study later), the search by a regexp is the same as a substring search.

The method str.match(regexp) looks for matches: all of them if there’s g flag, otherwise, only the first one.

The method str.replace(regexp, replacement) replaces matches found using regexp with replacement: all of them if there’s g 
flag, otherwise only the first one.

The method regexp.test(str) returns true if there’s at least one match, otherwise, it returns false.

'.' operator means it can have any characters except \n


g-global search
i-case insensitive
m-multiline mode
s-allows . operator to match \n too
u-enables all unicode support
y-searching at exact positions at the end


There exist following character classes:

\d – digits.
\D – non-digits.
\s – space symbols, tabs, newlines.
\S – all but \s.
\w – Latin letters, digits, underscore '_'.
\W – all but \w.
. – any character if with the regexp 's' flag, otherwise any except a newline \n.

Summary
Flag u enables the support of Unicode in regular expressions.

That means two things:

Characters of 4 bytes are handled correctly: as a single character, not two 2-byte characters.
Unicode properties can be used in the search: \p{…}.

Anchors: string start ^ and end $
The caret ^ and dollar $ characters have special meaning in a regexp. They are called “anchors”.

The caret ^ matches at the beginning of the text, and the dollar $ – at the end.

Word boundary: \b
A word boundary \b is a test, just like ^ and $.

When the regexp engine (program module that implements searching for regexps) comes across \b, it checks that the position in the string is a word boundary.

There are three different positions that qualify as word boundaries:

At string start, if the first string character is a word character \w.
Between two characters in the string, where one is a word character \w and the other is not.
At string end, if the last string character is a word character \w.


To search for special characters [ \ ^ $ . | ? * + ( ) literally, we need to prepend them with a backslash \ (“escape them”).
We also need to escape / if we’re inside /.../ (but not inside new RegExp).
When passing a string to new RegExp, we need to double backslashes \\, cause string quotes consume one of them.

Sets and ranges [...]
Several characters or character classes inside square brackets […] mean to “search for any character among given”.

Sets
For instance, [eao] means any of the 3 characters: 'a', 'e', or 'o'.

That’s called a set. Sets can be used in a regexp along with regular characters:

// find [t or m], and then "op"
alert( "Mop top".match(/[tm]op/gi) ); // "Mop", "top"

Ranges
Square brackets may also contain character ranges.

For instance, [a-z] is a character in range from a to z, and [0-5] is a digit from 0 to 5.

In the example below we’re searching for "x" followed by two digits or letters from A to F:

alert( "Exception 0xAF".match(/x[0-9A-F][0-9A-F]/g) ); // xAF

Alphabetic (Alpha) – for letters,
Mark (M) – for accents,
Decimal_Number (Nd) – for digits,
Connector_Punctuation (Pc) – for the underscore '_' and similar characters,
Join_Control (Join_C) – two special codes 200c and 200d, used in ligatures, e.g. in Arabic.

The exact count: {5}
\d{5} denotes exactly 5 digits, the same as \d\d\d\d\d.

The range: {3,5}, match 3-5 times
To find numbers from 3 to 5 digits we can put the limits into curly braces: \d{3,5}

+
Means “one or more”, the same as {1,}.

For instance, \d+ looks for numbers:

let str = "+7(903)-123-45-67";

alert( str.match(/\d+/g) ); // 7,903,123,45,67
?
Means “zero or one”, the same as {0,1}. In other words, it makes the symbol optional.

For instance, the pattern ou?r looks for o followed by zero or one u, and then r.

So, colou?r finds both color and colour:

let str = "Should I write color or colour?";

alert( str.match(/colou?r/g) ); // color, colour
*
Means “zero or more”, the same as {0,}. That is, the character may repeat any times or be absent.

For example, \d0* looks for a digit followed by any number of zeroes (may be many or none):

alert( "100 10 1".match(/\d0/g) ); // 100, 10, 1
// Compare it with + (one or more):

// alert( "100 10 1".match(/\d0+/g) ); // 100, 10
// 1 not matched, as 0+ requires at least one zero


Capturing groups
A part of a pattern can be enclosed in parentheses (...). This is called a “capturing group”.

That has two effects:

It allows to get a part of the match as a separate item in the result array.
If we put a quantifier after the parentheses, it applies to the parentheses as a whole.

Named groups
Remembering groups by their numbers is hard. For simple patterns it’s doable, but for more complex ones counting parentheses is inconvenient. We have a much better option: give names to parentheses.

That’s done by putting ?<name> immediately after the opening paren.

For example, let’s look for a date in the format “year-month-day”:

Non-capturing groups with ?:
Sometimes we need parentheses to correctly apply a quantifier, but we don’t want their contents in results.

A group may be excluded by adding ?: in the beginning.

For instance, if we want to find (go)+, but don’t want the parentheses contents (go) as a separate array item, we can write: (?:go)+.

In the example below we only get the name John as a separate member of the match:

Alternation (OR) |
Alternation is the term in regular expression that is actually a simple “OR”.

In a regular expression it is denoted with a vertical line character |.

For instance, we need to find programming languages: HTML, PHP, Java or JavaScript.

The corresponding regexp: html|php|java(script)?.

A usage example:

let regexp = /html|php|css|java(script)?/gi;

let str = "First HTML appeared, then CSS, then JavaScript";

alert( str.match(regexp) ); // 'HTML', 'CSS', 'JavaScript'


Pattern	       type	            matches
X(?=Y)	Positive lookahead	X if followed by Y
X(?!Y)	Negative lookahead	X if not followed by Y
(?<=Y)X	Positive lookbehind	X if after Y
(?<!Y)X	Negative lookbehind	X if not after Y




*/


