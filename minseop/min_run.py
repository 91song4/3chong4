from flask import Flask, render_template, request, jsonify
app = Flask(__name__)

@app.route('/')
def index():
    return render_template('min_index.html')

if __name__ == '__main__':
    app.run()
