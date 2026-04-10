from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler
import time
import msvcrt
import makesite


if __name__ == "__main__":

    while True:
        print("udpate")
        makesite.main()
        time.sleep(3)      


  
