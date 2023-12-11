from flask import Flask, jsonify, request
from flask_cors import CORS, cross_origin
import os
import openai

app = Flask(__name__)
CORS(app)

@app.route("/")
def home():
    return "Working"

@app.route("/chat",methods=['POST'])
@cross_origin()
def chat():
    prompt = request.form.get("prompt")
    print(prompt)
    openai.api_key = os.getenv("OPENAI_API_KEY")
    model_engine = "text-davinci-003"
    max_tokens = 1024

    completion = openai.Completion.create(
        engine=model_engine,
        prompt=prompt,
        max_tokens=max_tokens,
        temperature=0.5,
        top_p=1,
        frequency_penalty=0,
        presence_penalty=0
    )
    
    print(completion.choices[0].text)

    return jsonify({'response': completion.choices[0].text})

if __name__ == "__main__":
    app.run(debug=True)
