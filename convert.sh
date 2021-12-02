#!/bin/bash 

md-to-pdf --stylesheet "style.css" ./tylerMaxwell.md
pandoc -f markdown -t html README.md -o index.html --self-contained --css=style.css