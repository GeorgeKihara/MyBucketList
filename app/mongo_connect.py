from flask import Flask, render_template, url_for, request, session, redirect
from flask.ext.pymongo import PyMongo
import bcrypt

app = Flask(__name__)

app.config['MONGO_DBNAME'] = 'tasks'
app.config['MONGO_URI'] = 'mongodb://george:george@ds151752.mlab.com:51752/bktlist'

mongo = PyMongo(app)

app.route('/')
@app.route('/index.html', methods=['GET', 'POST'])
def index():
	return render_template("index.html", title='index')

@app.route('/login.html', methods=['GET', 'POST'])
def login():
    users = mongo.db.users
    login_user = users.find_one({'name': request.form['username']})

    if login_user:
        if bcrypt.hashpw(request.form['pass'].encode('utf-8'), login_user['password'].encode('utf-8')) == login_user['password'].encode('utf-8'):
            session['username'] = request.form['username']
            return redirect(url_for('index'))

        return 'Invalid username'
	#return render_template("login.html", title="login")

@app.route('/register.html', methods=['GET', 'POST'])
def register():
    if request.method == 'POST':
        users = mongo.db.users
        existing_user = users.find.one({'name': request.form['username']})

        if existing_user is None:
            hashpass = bcrypt.hashpw(request.form['pass'].encode('utf-8'), bcrypt.genSalt())
            users.insert({'name' : request.form['username'], 'password' : hashpass})
            session['username'] = request.form['username']
            return redirect(url_for('index.html'))

        return 'That username already exists'
	#return render_template("register.html", title="register")

if __name__ == '__main__':
    app.secret_key = 'mysecret'
    app.run(debug=True)