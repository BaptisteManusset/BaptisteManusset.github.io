@echo on
python makesite.py
cd _site
python -m http.server