# database schema

Auth_tables = ['Admin']

schema_table = f"""
CREATE TABLE {Auth_tables[0]} (
    id INT PRIMARY KEY AUTO_INCREMENT,
    email VARCHAR(50) NOT NULL, 
    phash VARCHAR(120) NOT NULL,
    session VARCHAR(120) NOT NULL
);
"""
