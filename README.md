# Duplicate Finder CLI

**Duplicate Finder** is a command-line tool that helps you find duplicate files in a directory by comparing their file hashes. This utility can assist you in identifying redundant files, freeing up disk space in an efficient manner.

## Features

- Recursively scan directories to detect duplicate files.
- Compare files using file hashes for accuracy.
- Display the list of duplicates to help with file management.
- Lightweight, fast, and easy to use.

## Installation

### Using npm

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/duplicate-finder.git
    ```

2. Navigate to the project directory:
    ```bash
    cd duplicate-finder
    ```

3. Install the required dependencies:
    ```bash
    npm install
    ```

4. (Optional) Link the CLI globally to use it anywhere:
    ```bash
    npm link
    ```

## Usage

Once installed, you can run the `duplicate-finder` CLI to scan any directory for duplicate files.

### Basic Command

```bash
duplicate-finder /path/to/directory
```