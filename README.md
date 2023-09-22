# GEN AI Workshop

## Part 1 : Bootstrap flask project

### Install pipenv

Pipenv is a dependency manager for python projects. It is similar to npm (node) or bundler (Ruby).

`pip install --user pipenv`

### Install flask

Flask is a simple web application framework to easily build webapps. This is based on WSGI toolkit and jinja2 template engine.

`pipenv install flask`

### Create app.py file

app.py is the entry point file which defines all the routes for the web application

### Run the application

Run the following command to start the demo hello world app in port 5002 in debug mode

`flask --app app.py run --debug -p 5002`

### Add .gitignore and commit

Update .gitignore file with `__pycache__` so that all the cache files are not stored in git
