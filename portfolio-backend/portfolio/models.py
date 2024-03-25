import bcrypt, secrets
from flask import make_response


class AdminAuthentication:
    def __init__(self, conn):
        self.conn = conn
        if not conn:
            self.conn = None

    def add_user(self, email, password):
        if not self.is_user_exist(email):
            cur = self.conn.cursor()
            hashed_password = bcrypt.hashpw(password.encode(), bcrypt.gensalt())
            session = secrets.token_hex(50)
            try:
                cur.execute(
                    f"INSERT INTO Admin (email, phash, session) VALUES ('{email}', '{hashed_password.decode()}', '{session}')")
                self.conn.commit()
                cur.close()
                return make_response({'message': 'User added successfully'}, 201)
            except:
                return make_response({'error': 'Insertion error'}, 204)
        else:
            return make_response({'message': 'User already exist'}, 200)
    def is_user_exist(self, email):
        if self.conn:
            cur = self.conn.cursor()
            try:
                cur.execute(f"SELECT * from Admin where email='{email}'")
                if cur.fetchone():
                    return True
                else:
                    return False
            except ConnectionError | Exception:
                return True

