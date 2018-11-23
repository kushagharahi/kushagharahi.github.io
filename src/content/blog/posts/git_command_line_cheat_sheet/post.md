![Git](~posts/git_command_line_cheat_sheet/git.png)

This is a list I keep of imporant Git commands that I try to keep updated:

* Switch branches:
    * `git checkout branch <branch_name>`
    
* Get latest
    * `git pull`

* Revert a file to specific commit
    * `git checkout <COMMITNUMBER> <PATH_TO_FILE>`

* Commit your files
    * `git commit`
        * `-m` <msg> to add a message
        * `-a` to stage all files

* Move head around 
    * `git checkout <sha1>`

* Bring head back to date
    * `git checkout <branch>`

* Set up kdiff3 as mergetool & difftool
    * `git config --global --add merge.tool kdiff3`
    * `git config --global --add mergetool.kdiff3.path "$path/to/kdiff"`
    * `git config --global --add mergetool.kdiff3.trustExitCode false`
    * `git config --global --add diff.guitool kdiff3`
    * `git config --global --add difftool.kdiff3.path "$path/to/kdiff"`
    * `git config --global --add difftool.kdiff3.trustExitCode false`

* Merge Conflict
    * `git mergetool`

* Add files
    * `git add`

* Start git repo
    * `git init`

* See existing commits
    * `git log`

* Look in git blobs
    * `git cat-file <sha1>`
        * `-p` for pretty print

* Check git working area
    * `git status`

* Check # of objects in git
    * `git count-objects`

* Tag a commit
    * `git tag -a <tag name> -m <tag desc>`

* Get branches in project
    * `git branch`

* Merge in a branch
    * `git merge <branch>`

* Rebase branch
    * `git rebase <branch>`
        * takes lastest shared commit between branches as base
        * detaches all commits on working branch after that commit and moves it on top of branch you are rebasing onto

* Stash merge state
    * `git stash merge --no-commit <branch>`   

* Stop tracking a file
    * `git rm --cached <file>`

* To remove all cached files
    * `git rm --cached -r .`
    * Make sure to git add . to readd everything

* Get a fresh copy of the branch
    * `git reset --hard origin/<branch>`

* Checkout remote branch
    * `git fetch`
    * `git checkout <branch>`

* Add new remote 
    * `git remote add origin <url>`

* Change remote url
    * `git remote set-url origin <url>`