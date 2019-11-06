#!/bin/bash

yarn build

file=docs/.vuepress/public/examples/index.html
output=`cat $file | sed -e "s!<head>!!" | sed -e "s!</head>!!"`
mkdir docs/examples

echo "---
sidebar: false
search: false
editLink: false
---

$output" > docs/examples/README.md

rm $file

yarn docs:build
