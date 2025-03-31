from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def index(): # Change the function name to index to match the html file.
    return render_template('index.html') # Change home.html to index.html

@app.route('/about')
def about():
    return render_template('about.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']
        return f"Thank you, {name}! We received your message."
    else:
        return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)