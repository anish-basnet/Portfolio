import mysql.connector

from portfolio import app
from flask import g, request

from portfolio.models import AdminAuthentication
from portfolio.schema import Auth_tables, schema_table

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


# Initialize and check the database
def schema_initialization():
    cursor = get_db().cursor()
    cursor.execute(f"SHOW TABLES LIKE '{Auth_tables[0]}'")
    result = cursor.fetchone()
    if not result:
        cursor.execute(schema_table)
    cursor


initialize = False


def initialize():
    global initialize
    print("entered")
    if not initialize:
        schema_initialization()
        initialize = True


@app.before_request
def before_first_request():
    initialize()


@app.route('/registerAuth', methods=['POST'])
def register_auth():
    data = request.json
    admin = AdminAuthentication(conn=get_db())
    response = admin.add_user(email=data.get('username'), password=data.get('password'))
    return response
