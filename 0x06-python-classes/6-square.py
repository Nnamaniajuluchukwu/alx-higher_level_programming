#!/usr/bin/python3
"""
    Class Square that defines a square by
    Private instance attribute: size
    Private instance attirubute: position
    Getter and Setters
    Instantiation with optional size
    size must be an integer
    Public instance method: def area(self)
    Public instance method: def my_print(self)
"""


class Square:
    """Class constructor"""
    def __init__(self, size=0, position=(0, 0)):
        '''Initialization'''
        self.size = size
        self.position = position

    @property
    def size(self):
        '''size getter'''
        return self.__size

    @size.setter
    def size(self, value):
        '''size setter'''
        if type(value) != int:
            raise TypeError('size must be an integer')
        if value < 0:
            raise ValueError('size must be >= 0')
        self.__size = value

    @property
    def position(self):
        '''position getter'''
        return self.__position

    @position.setter
    def position(self, value):
        '''position setter'''
        if type(value) != tuple or len(value) != 2:
            raise TypeError('position must be a tuple of 2 positive integers')
        if type(value[0]) != int or type(value[1]) != int:
            raise TypeError('position must be a tuple of 2 positive integers')
        if value[0] < 0 or value[1] < 0:
            raise ValueError('position must be a tuple of 2 positive integers')
        self.__position = value

    def area(self):
        '''calculate and return the area'''
        return self.__size ** 2

    def my_print(self):
        '''print the paraeters'''
        if self.size != 0:
            if self.position[1] is not 0:
                print('\n' * self.position[1], end='')
            for ch in range(self.size):
                print(' ' * self.position[0], end='')
                print('#' * self.size)
        else:
            print()
