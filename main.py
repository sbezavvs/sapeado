import json, sqlalchemy
from flask import Flask, render_template, request, Response
from werkzeug.exceptions import abort
from init_db import open_connection

app = Flask(__name__)

db = open_connection()

# Metodos

def get_phone(phone):

	full_phone = '57' + str(phone)
	
	# Preparing a statement before hand can help protect against injections.
	stmt = sqlalchemy.text("SELECT * FROM fb_co_2021 WHERE phone=phonenumber")

	# Calling the db to search for phone number
	with db.connect() as conn:

		ans = conn.execute("SELECT * FROM fb_co_2021 WHERE phone="+full_phone).fetchone()

		print(ans)

		if ans == None:
			return 'Not Found'
		else:
			return 'Leak Found'

# Rutas

@app.route('/')
def index():
	return render_template('index.html')

@app.route('/info')
def info():
	return render_template('info.html')

@app.route('/phone/<int:phone_number>', methods=['GET'])
def phone(phone_number):
	if len(str(phone_number)) != 10:
		abort(400)
	else:
		reg = get_phone(phone_number)
		return Response(reg, status=200, mimetype='application/text')

# Main

if __name__ == "__main__":
	app.run(host='0.0.0.0', debug=True)