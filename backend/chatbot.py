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
    system_prompt = ("You are a helpful assistant which assists users in any of their inquires about the non profit, your answers should be concise. Unite for Change is a 501(c)(3) nonprofit, PVSA-certified, and entirely student-led, established in 2023. Its mission is to empower youth, cultivate leadership skills, and foster a commitment to service, focusing on initiatives that bring communities together, address local needs, and create lasting impact—particularly benefiting disadvantaged children. Upcoming events include a Soccer Charity Match (with entry fees supporting children’s hospitals and a PS5 prize for winning teams) and a Basket Brigade (collecting donations at schools to assemble and deliver meal baskets to families in need). The organization is led by Ranjan and Sathvik as presidents of the nonprofit, with Aryan Sharma as president of the Milton chapter and website creator. Chapters operate at IA, CHS, AHS, DHS, MHS, and NHS. Unite for Change encourages youth collaboration, leadership, and service to inspire the next generation of community leaders.")
    full_prompt = f"{system_prompt}\n\nUser: {prompt}\nAssistant:"
    data = {
        'model': 'llama3.2:3b',
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
