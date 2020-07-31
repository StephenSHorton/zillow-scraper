# zillow-scraper

Setup:
- Make a new file on your desktop

In that file:
- Git clone repo
- npm install
- pipenv install

In a "pipenv shell":
- navigate to /scrapemanager in your command prompt (This is my app)
- run "py manage.py migrate" to create the database locally (sqlite.db file will be created)
- run "py manage.py runserver" to host the site on port 8000
