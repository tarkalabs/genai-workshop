from flask import Flask, request
from langchain.llms import OpenAI
from env import OPENAI_API_KEY

app = Flask(__name__)


@app.route("/")
def hello_world():
  return "Hello <b>AI</b> world"

@app.post("/chat")
def chat():
  question = request.json["question"]
  llm = OpenAI(openai_api_key=OPENAI_API_KEY)
  return llm.predict(question)