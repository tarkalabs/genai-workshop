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

---

## Part 2 : Install LangChain and create chat endpoint

### Install LangChain

LangChain is a framework for developing applications powered by language models. It creates useful abstractions over LLMs to assemble complex applications as chains

`pipenv install langchain`

### Install OpenAI module

Integrating to OpenAI's API is provided as a module that will work with LangChain. Install it

`pipenv install openai`

### Configure OpenAI Key

OpenAI APIs expect a key to authenticate (and charge) for its ChatGPT model. Configure it

1. Create a file called env.py (python-dotenv is the right way). But, workshop 🤷
2. Add a new key OPENAI_API_KEY into it with a valid key from your account page in openai.com

### Build the chat endpoint

Let us create a simple hello world chat endpoint to wire things together

1. Create a new POST endpoint in app.py that instantiates `OpenAI` object with the key defined above (OPEN_API_KEY)
2. Make a POST call with a question and see its response

   `curl --location --request POST 'localhost:5002/chat' --header 'Content-Type: application/json' --data-raw '{"question" : "Hello. How are you?"}'`

3. Congratulations, You have an API powered by LLM at your service now! 😊
