#!/bin/bash 

md-to-pdf --stylesheet "style.css" --document-title="resume" ./tylerMaxwell.md
pandoc -f markdown -t html tylerMaxwell.md -o index.html --self-contained --css=style.css