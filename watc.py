import os
import subprocess
import sys
from watchdog.observers import Observer
from watchdog.events import FileSystemEventHandler

class RestartOnChangeHandler(FileSystemEventHandler):
    def __init__(self, run_command):
        super().__init__()
        self.run_command = run_command
        self.process = None
        self.start_process()

    def start_process(self):
        if self.process:
            self.process.terminate()
            self.process.wait()
        self.process = subprocess.Popen(self.run_command, shell=True)

    def on_any_event(self, event):
        # Trigger the restart on any file change
        print(f"File {event.src_path} changed, restarting process...")
        self.start_process()

    def stop_process(self):
        if self.process:
            self.process.terminate()
            self.process.wait()

if __name__ == "__main__":
    # On pourrait améliorer facilement ce script en ayant mon_module comme input de ce script
    command = "python -m mon_module"
    watch_directory = "."

    # Set up the event handler and observer
    event_handler = RestartOnChangeHandler(command)
    observer = Observer()
    observer.schedule(event_handler, watch_directory, recursive=True)

    try:
        print(f"Watching for changes in '{watch_directory}'...")
        observer.start()
        while True:
            pass  # Keep the script running
    except KeyboardInterrupt:
        print("\nStopping...")
        event_handler.stop_process()
        observer.stop()
    observer.join()