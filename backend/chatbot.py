from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
import os
import logging
import traceback

app = Flask(__name__)

# Enable CORS for all routes (adjust origins in production)
CORS(app, resources={r"/*": {"origins": "*"}})

# Configure logging
logging.basicConfig(level=logging.INFO)

# Configuration
OLLAMA_URL = 'http://localhost:11434'  # Updated if necessary


@app.route('/chat', methods=['POST'])
def chat():
    try:
        data = request.json
        prompt = data.get('prompt', '')

        if not prompt:
            return jsonify({'message': 'Prompt is required'}), 400

        # Get response from the LLM
        llm_response = get_llm_response(prompt)

        return jsonify({'response': llm_response}), 200
    except Exception as e:
        app.logger.error(f"Error in /chat endpoint: {e}")
        traceback.print_exc()
        return jsonify({'message': 'Internal server error'}), 500

def get_llm_response(prompt):
    url = f"{OLLAMA_URL}/api/generate"
    headers = {'Content-Type': 'application/json'}
    system_prompt = ("sss")
    full_prompt = f"{system_prompt}\n\nUser: {prompt}\nAssistant:"
    data = {
        'model': 'llama3.1',
        'prompt': full_prompt,
        'stream': False  # Disable streaming
    }

    response = requests.post(url, json=data, headers=headers)
    response.raise_for_status()
    result = response.json()
    print(f"Ollama response: {result}")  # Debugging line
    return result.get('response', '')  # Adjust key based on Ollama's response format


if __name__ == '__main__':
    HOST = '0.0.0.0'
    PORT = 5001
    app.run(host=HOST, port=PORT)
