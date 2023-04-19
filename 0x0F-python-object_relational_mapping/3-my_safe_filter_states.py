#!/usr/bin/python3
""" Import needed modules """
import sys
import re
import MySQLdb as engine


def main(argv):
    """ Access database and print states with name starting
        with N.
    """
    db = engine.connect(host="localhost", port=3306, user=argv[1],
                        passwd=argv[2], db=argv[3])
    cur = db.cursor()
    user = re.match('[A-Za-z0-9]+', argv[4])
    cur.execute("SELECT * FROM states WHERE name = BINARY '{}' ORDER BY id"
                .format(user.group(0)))
    rows = cur.fetchall()
    for state in rows:
        print(state)
    cur.close()
    db.close()


if __name__ == "__main__":
    main(sys.argv)
