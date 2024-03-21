import mysql.connector

from portfolio import app
from flask import g
def get_db():
    if 'db' not in g:
        g.db = mysql.connector.connect(
            host=app.config['AWS_MYSQL_HOST'],
            port=app.config['AWS_PORT'],
            user=app.config['AWS_MYSQL_USER'],
            password=app.config['AWS_MYSQL_PASSWORD'],
            database=app.config['MYSQL_DB'],
        )
    return g.db

@app.teardown_appcontext
def teardown_db(exception):
    db = g.pop('db', None)
    if db is not None:
        db.close()

@app.route('/')
def index():
    cursor = get_db().cursor()
    if g.db.is_connected():
        print("Database is connected")
    else:
        print("Database is not connected")
    return "hello"