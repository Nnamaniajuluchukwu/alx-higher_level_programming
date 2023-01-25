#!/usr/bin/python3
""" Class Square: This class uses a private
    attributes called size and calculates the
    area of the square.
"""


class Square:
    """Class constructor"""
    def __init__(self, size=0):
        self.__size = size

    @property
    def size(self): return self.__size

    @size.setter
    def size(self, size):
        if type(size) != int:
            raise TypeError('size must be an integer')
        if size < 0:
            raise ValueError('size must be >= 0')
        self.__size = size

    def area(self):
        return self.size ** 2
