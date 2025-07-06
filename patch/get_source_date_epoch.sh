#!/usr/bin/env bash
export LANG=C
export LC_ALL=C
[ -n "$TOPDIR" ] && cd $TOPDIR


try_date_now(){
        SOURCE_DATE_EPOCH="$(date +%s)"
}
...

try_date_now ||try_version || try_git || try_hg || try_mtime || SOURCE_DATE_EPOCH=""
echo "$SOURCE_DATE_EPOCH"
