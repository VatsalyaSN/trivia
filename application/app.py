from flask import Flask, request,g, redirect, url_for, abort,render_template,jsonify,session

from index import app, db
from flask_login import LoginManager,current_user,AnonymousUserMixin,login_required,logout_user
import httplib2




app.config.update(dict(
	PREFERRED_URL_SCHEME = 'https'
	))


login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'



class Anonymous(AnonymousUserMixin):
	def __init__(self):
		self.username = 'Guest'

@app.route('/', methods=['GET'])
def index():
	print("hello worlllllllddddd")
	return render_template('index.html')

@app.route('/<path:path>', methods=['GET'])
def any_path(path):
	print("ANYPATH SECTIOn")
	return render_template('index.html')

