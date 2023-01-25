#!/usr/bin/python3
""" Class Square: This class uses a private
    attributes called size and calculates the
    area of the square.
"""


class Square:
    """Class constructor"""
    def __init__(self, size=0):
        if type(size) != int:
            raise TypeError('size must be an integer')
        if size < 0:
            raise ValueError('size must be >= 0')
        self.__size = size

    def area(self):
        return self.__size ** 2
