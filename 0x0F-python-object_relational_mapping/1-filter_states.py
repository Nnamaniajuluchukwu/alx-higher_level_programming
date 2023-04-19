#!/usr/bin/python3
""" Import needed modules """
import sys
import MySQLdb as engine


def main(argv):
    """ Access database and print states with name starting
        with N.
    """
    db = engine.connect(host="localhost", port=3306, user=argv[1],
                        passwd=argv[2], db=argv[3])
    cur = db.cursor()
    cur.execute("SELECT * FROM states WHERE name LIKE BINARY 'N%' ORDER BY id")
    rows = cur.fetchall()
    for state in rows:
        print(state)
    cur.close()
    db.close()


if __name__ == "__main__":
    main(sys.argv)
