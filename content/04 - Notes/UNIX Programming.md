# UNIX Programming
---

## Test Review
Participation quiz on friday for exam prep

Process / Signal / Thread
Perl (similar to shell) / Python
- basics: var / expr / cond / loop/ def fun / class, struct / array, list, tuple, dictionary, ...
- file processing (read write to file); (no plot in python np etc)
- Perl - string manipulation (similar to shell) - regex

## Overview
### History
UNIX started in the late 1960s by Ken Thompson
a research group at UC Berkeley created a BSD version of it, among others
the GNU project was launched in 1983 to be a free software system
### Characteristics
completely free and open source
very popular and has withstood the test of time, as such has many applications built for it
less resource intensive and makes up the backbone of the internet
Linux is the kernel used by the GNU OS
### Features
the kernel allows various programs and devices to interact with each other easily
linux supports multiple users at once by design with multitasking
the filesystem is exhaustive and consistent
various shells are available such as the Bourne shell, the Korn shell, and the Bourne-again shell

## Shells and Processes
**Shells** are the interface between the os and the user. Common ones include bash (bourne again shell), dash (debian almquist shell), tcsh (tc shell), and zsh (z shell)

A **program** is an executable file stored in memory under some directory. A **process** is an executing instance of a program, and every process will have a unique process ID

For each program, there exists standard input, standard output, and standard error. Standard input and standard output default to the keyboard and screen

The three primary functions for process control are **fork**, **exec**, and **waitpid**
- `fork()` creates a copy (child) of the current process (parent)
	- To the parent process it returns the PID of the child, to the child it returns 0
- `exec()` and it's variants are used to execute certain commands
- `waitpid()` is used to wait until a certain process terminates

A process may have multiple **threads** (set of instructions executing at one time) in order to be more efficient by taking advantage of many CPUs parallelism abilities. Each thread will have a thread ID which are local to a process

Each process will also contain a clock time, user CPU time, and system CPU time

In addition to process and thread IDs, users of the system have a unique user ID and can have multiple group IDs


## Filesystem
everything stems from `/` (the root directory)

`mv` moves files and directories
`cp` copies files and directories
#### Standard Folders
`/bin` files to run the system when in single user or recovery mode
`/boot` files needed to boot the system
`/dev` files representing peripheral devices (`udev` is related)
`/etc` configuration files
`/etc/opt` configuration files for add-on software
`/etc/X11` machine local configuration files for the X window system
`/home` user home directories (`/users` in macOS)
`/lib` shared libraries
`/lib/modules` loadable kernel modules
`/mnt` mount point for other filesystems
`/opt` add-on software
`/proc` kernel and process information
`/run` runtime data
`/sbin` essential system binaries
`/sys` device pseudofilesystem
`/tmp` temporary files
`/usr` subdirectories for system information
`/usr/bin` most user commands
`/usr/games` games
`/usr/include` header files for c programs
`/usr/lib` libraries
`/usr/local` local hierarchy
`/usr/sbin` system administration binaries
`/usr/share` architecture independent data
`/usr/share/doc` documentation
`/usr/share/info` GNU info primary directory
`/usr/share/man` online manuals
`/usr/src` source code
`/var` variable data
`/var/log` log files
`/var/spool` spooled application data


access control lists

links (hard and symbolic)


## The Shell
the PATH stores a list of directories the shell will look through when finding a program to run
the . directory is always added
when you call a file with `./filename`, the shell won't look through the PATH first

each individual program is in charge of making sure that it deals with bad arguments, the shell won't care


`/dev/null` is a datasink which you can redirect to in order to output nothing

`&&` and `||` will test the exit status of the first command, if it succeeded it will execute the next in the case of the and, and if it failed it will execute the next in the case of the or (similar to short circuiting in c++)

`|` lets you pipe the output of one command into the input of another command

adding `&` to the end of a command will make it run in the background
`fg` and `bg` will send programs to the foreground and background
`jobs` lists the jobs currently running

`kill` will kill a background job (either by passing in the PID number or %job number)

`?` is an ambiguous character that can match any single character, `*` is similar but can match any number of characters including none
`[]` lets you do regex searches

### Common Commands
`echo $0` lists the name of the current shell
`ctrl+z` suspends the current program
`ctrl+w ctrl+u ctrl+x` deletes words and lines of the input
`su`  or `sudo` run as superuser
`man` or `info` displays the manual
`ctrl+alt+num` switches to other virtual consoles (up to 63)
`passwd` change password
`ls` lists files (-l for permissions)
`cat` displays contents of a file, or concatenate multiple files together
`rm` deletes a file
`less` display a file in chunks
`hostname` displays the hostname
`cp` copy a file
`mv` moves or renames a file
`grep` search for a string
`head` display beginning of a file
`tail` displays ending of a file
`sort` display files in order
`uniq` removes duplicate lines from a file
`diff` compares two files
`file` identify contents of a file
`echo` prints text
`date` shows date
`script` records a shell session
`which` and `whereis` locates a utility
`locate` searches for a file
`w`, `who`, and `finger` lists users on the system
`write` writes to other users
`chmod` changes access permissions
#### Compression
`bzip2` compresses a file (into .bz2)
`bzcat` is the equivalent of `cat` for compressed files
`bunzip2` decompresses a file

`gzip` compresses a file (into .gz)
`zcat` is the equivalent of `cat` for compressed files
`gunzip` decompresses a file

`zip` creates a zip archive (into .zip)
`unzip` decompresses a zip archive

`tar` packs and unpacks archives
	`tar -cvf *.tar file1 file2` create a tar archive
	`tar -xvf *.tar` unpacks a tar archive (`-z` and `-j` call `bunzip` and `gunzip` first)







---
### Makefile
A makefile is a document that specifies how to compile a project, regardless of the language

```makefile
.PHONY all say_hello generate clean

say_hello:
	@echo "hello world"

generate:
	@echo "creating empty text files..."
	touch file-{1..10}.txt

clean:
	@echo "cleaning up..."
	rm *.txt
```

## Editors
### Vim
[Vim](/notes/vim)
### Emacs
## Shells

```bash
#!/bin/bash
declare -a array=("one" "two" "three")
arraylength=$(#array[@])
for (( i=0, i<${arraylength}, i++ ))
do
	echo $i
done

Hello () {
	echo "Hello World $1 $2"
	return 1
}

Hello CS 3377
ret=$?
echo "return value is $ret"
```

