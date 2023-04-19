#!/usr/bin/python3
"""Import modules"""

from model_state import Base, State
from sqlalchemy.orm import sessionmaker
import sys
from sqlalchemy import create_engine


def main(argv):
    """ create the table in the database and print
        the first instance.
    """
    URL = f"""mysql+mysqldb://{argv[1]}:{argv[2]}
            @localhost/{argv[3]}"""
    engine = create_engine(URL, pool_pre_ping=True)

    Base.metadata.create_all(engine)

    Session = sessionmaker(bind=engine)
    session = Session()

    for row in session.query(State).filter(State.name.like("%a%")):
        session.delete(row)
    session.commit()
    session.close()


if __name__ == "__main__":
    main(sys.argv)
