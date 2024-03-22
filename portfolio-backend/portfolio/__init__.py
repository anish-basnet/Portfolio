from flask import Flask, g
from mysql.connector import MySQLConnection

app = Flask(__name__)

from config import *

from portfolio.routes import *

