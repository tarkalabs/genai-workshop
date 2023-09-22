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

---

## Part 3 : Create the frontend and connect it with backend

### Build the interface

Given that this is a LLM workshop, Let us not waste time in building the chat window interface. Feel free to use the html and js files in this repo. Don't lose lots of time tweaking and customizing them 😉

1. Copy the `chat.html` file inside templates folder (this is where flask will look for html files)
2. Copy the `chat.css` file inside static folder
3. Copy also the `chat.js` file which has helper methods to send and render received messages
4. Update `app.py` route to return the html template for root path `/`
5. Reload the browser window to see the page rendered with a chat window
6. This code calls the API endpoint `/chat` when "Send" button is clicked. Try sending a message and watch the server logs!
