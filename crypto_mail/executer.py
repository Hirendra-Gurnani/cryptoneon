import time
from api import *
from crypto import *

while True:
    print("fetcher executed")
    update()
    print("fetcher done")
    time.sleep(10)
    print("mailer executed")
    mailer()
    print("mailer done")
    time.sleep(10)
