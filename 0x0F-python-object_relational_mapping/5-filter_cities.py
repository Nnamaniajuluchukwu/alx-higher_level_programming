#!/usr/bin/python3
""" Import needed modules """
import sys
import re
import MySQLdb as engine


def main(argv):
    """
        Access database and print cities with state name given
        by user.
    """
    db = engine.connect(host="localhost", port=3306, user=argv[1],
                        passwd=argv[2], db=argv[3])
    cur = db.cursor()
    user = re.match('[A-Za-z0-9]+', argv[4]).group(0)
    cur.execute(f"""SELECT cities.name FROM cities
                LEFT JOIN states ON states.id = cities.state_id
                WHERE states.name = BINARY '{user}' ORDER BY cities.id""")
    rows = cur.fetchall()
    print(", ".join([row[0] for row in rows]))
    cur.close()
    db.close()


if __name__ == "__main__":
    main(sys.argv)
