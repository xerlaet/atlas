# Perl
---
```perl
#!/usr/bin/perl

# Comment
print 'Hello World!';

my $num = 9; # the my is just a good programming practice to declare scope
my $str = "A";
my $str2 = "B";

$a = 1 + 2;
$c = $str . $str2

if ($str eq "A") {
	print "The string is A";
} elsif (length($str) == 1) {
	print "The string is length 1"
} else {
	print "The string is not A";
}

my $i = 5;
while ($i < 15) {
	print "$i";
	$i++;
}

my @food = ("apples", "bananas", "cherries");
print $food[1];


```

