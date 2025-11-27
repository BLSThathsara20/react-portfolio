#!/bin/bash
echo "Starting file collection..."

# Move to the script's directory
cd "$(dirname "$0")"

# Create the 'all files' directory if it doesn't exist
mkdir -p "all files"
echo "Created 'all files' directory"

# Define file extensions to ignore (add more if needed)
IGNORE_EXTENSIONS="\.png$|\.jpg$|\.jpeg$|\.gif$|\.bmp$|\.ico$|\.svg$|\.mp4$|\.avi$|\.mov$|\.wmv$|\.flv$|\.mkv$|\.webm$|\.mp3$|\.wav$|\.ogg$|\.m4a$|\.webp$|\.db$"

# First count total files for progress calculation
total_files=$(find . -type f -not -path "*/node_modules/*" -not -empty -not -path "./all files/*" | grep -iE -v "$IGNORE_EXTENSIONS" | wc -l)
echo "Found $total_files files to process (excluding media files)"

# Generate the file structure first
echo "Generating file paths list..."
find . -type f -not -path "*/node_modules/*" -not -empty -not -path "./all files/*" | \
    grep -iE -v "$IGNORE_EXTENSIONS" | \
    sed 's|^\./||' | \
    sort > "all files/file_paths.txt"

# Counter for progress
current=0

# Find and copy files with progress
find . -type f -not -path "*/node_modules/*" -not -empty -not -path "./all files/*" | grep -iE -v "$IGNORE_EXTENSIONS" | while read -r file; do
    # Update and show progress
    ((current++))
    percentage=$((current * 100 / total_files))
    echo -ne "Progress: $percentage% ($current/$total_files) - Current file: $file\r"
    
    # Get the parent directory name
    parent_dir=$(basename "$(dirname "$file")")
    
    # Get the filename
    filename=$(basename "$file")
    
    # Create new filename with parent directory prefix
    new_name="${filename}"
    
    # Copy the file to 'all files' directory
    cp "$file" "all files/$new_name" 2>/dev/null
done

echo -e "\n\nIgnored file types:"
echo "- Images: .png, .jpg, .jpeg, .gif, .bmp, .ico, .svg, .webp"
echo "- Videos: .mp4, .avi, .mov, .wmv, .flv, .mkv, .webm"
echo "- Audio: .mp3, .wav, .ogg, .m4a"
echo "- Also ignored: node_modules folders and empty files"
echo -e "\nCompleted! Files have been copied to 'all files' directory"
echo "File paths have been saved to 'file_paths.txt'"
echo "Press Enter to exit..."
read