from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import smtplib
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import os

app = Flask(__name__)

CORS(app)

# Email configuration
EMAIL_ADDRESS = os.environ.get("EMAIL")
EMAIL_PASSWORD = os.environ.get("APPPASS")

@app.route('/contact', methods=['POST'])
@cross_origin(supports_credentials=True, )
def contact():
    # Get data from the POST request
    data = request.json
    full_name = data['fullName']
    email = data['email']
    contact_number = data['contactNumber']
    message = data['message']

    # Print the form data to the console
    print("New Contact Form Submission:")
    print(f"Name: {full_name}")
    print(f"Email: {email}")
    print(f"Contact Number: {contact_number}")
    print(f"Message: {message}")

    # Create the email content
    email_message = MIMEMultipart()
    email_message['From'] = EMAIL_ADDRESS
    email_message['To'] = EMAIL_ADDRESS  # Sending to myself
    email_message['Subject'] = f"New Contact Form Submission from {full_name}"

    # Email body
    body = f"""
    You have received a new contact form submission:

    Name: {full_name}
    Email: {email}
    Contact Number: {contact_number}
    Message:
    {message}
    """

    email_message.attach(MIMEText(body, 'plain'))

    try:
        # Set up the SMTP server
        with smtplib.SMTP_SSL('smtp.gmail.com', 465) as server:
            server.login(EMAIL_ADDRESS, EMAIL_PASSWORD)
            server.send_message(email_message)

        print("Email sent successfully.")
        # Respond to the frontend
        return jsonify({'message': 'Form submission received and email sent!'}), 200

    except Exception as e:
        print(f"Failed to send email: {e}")
        return jsonify({'message': 'Form submission received but failed to send email.'}), 500

if __name__ == '__main__':
    app.run(debug=True, host='0.0.0.0', port=5002)
