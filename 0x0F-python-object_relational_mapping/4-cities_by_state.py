#!/usr/bin/python3
""" Import needed modules """
import sys
import MySQLdb as engine


def main(argv):
    """
        Access database and print cities wit states with name starting.
    """
    db = engine.connect(host="localhost", port=3306, user=argv[1],
                        passwd=argv[2], db=argv[3])
    cur = db.cursor()
    cur.execute("""SELECT cities.id, cities.name, states.name FROM cities
                LEFT JOIN states ON states.id = cities.state_id""")
    rows = cur.fetchall()
    for state in rows:
        print(state)
    cur.close()
    db.close()


if __name__ == "__main__":
    main(sys.argv)
