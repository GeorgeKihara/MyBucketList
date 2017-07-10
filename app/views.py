from flask import render_template
from app import app
#from flask.ext.triangle import Triangle

app.route('/')
@app.route('/index.html')
def index():
	return render_template("index.html", title='index')

@app.route('/login.html', methods=['GET', 'POST'])
def login():
	return render_template("login.html", title="login")

@app.route('/register.html', methods=['GET', 'POST'])
def register():
	return render_template("register.html", title="register")

@app.route('/home.html', methods=['GET', 'POST'])
def home():
	return render_template("home.html", title="home")

@app.route('/about.html')
def about():
	return render_template("about.html", title="about")