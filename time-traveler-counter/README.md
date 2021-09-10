# Time traveler year counter

_Inspired by classic 80s movies_

The main purpose was to practice OOP principles of multiple instances.

- There are two active counters, but there can be added thousands more and all of them will be independent from each other;
- To achieve that and to avoid adding new functionality for each new counter, I use one class 'Counter'. This class sets functionality for all counters;
- You can increase or decrease the year value, as well as reset the counter to zero.
  The value cannot be decreased to negative;
- To select elements from DOM a helper function getElement is used;
- As a bonus, I added a separate block that shows current year, updating it dynamically, eliminating the need to change it manually. Such functionality can be useful for website footers with copyright info.
