from flask import Flask, g
from mysql.connector import MySQLConnection

app = Flask(__name__)
app.config['AWS_MYSQL_HOST'] = 'portfolio-db.crm8ceq62s1d.ap-southeast-2.rds.amazonaws.com'
app.config['AWS_MYSQL_USER'] = ''
app.config['AWS_MYSQL_PASSWORD'] = ''
app.config['MYSQL_DB'] = 'portfolio-db'
app.config['AWS_PORT'] = 3306


from portfolio.routes import *