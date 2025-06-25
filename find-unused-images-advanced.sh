#!/bin/bash

# Advanced script to find unused images in VuePress documentation
# This version includes more sophisticated pattern matching and verbose output
# Usage: ./find-unused-images-advanced.sh

set -e

IMAGES_DIR="docs/.vuepress/public/images"
DOCS_DIR="docs"
OUTPUT_FILE="unused-images-detailed.txt"
VERBOSE=false

# Parse command line arguments
while [[ $# -gt 0 ]]; do
    case $1 in
        -v|--verbose)
            VERBOSE=true
            shift
            ;;
        -h|--help)
            echo "Usage: $0 [-v|--verbose] [-h|--help]"
            echo "  -v, --verbose    Show detailed output"
            echo "  -h, --help       Show this help message"
            exit 0
            ;;
        *)
            echo "Unknown option: $1"
            exit 1
            ;;
    esac
done

echo "🔍 Advanced VuePress Image Usage Analysis"
echo "=========================================="
echo "Images directory: $IMAGES_DIR"
echo "Documentation directory: $DOCS_DIR"
echo ""

# Check if directories exist
if [ ! -d "$IMAGES_DIR" ]; then
    echo "❌ Error: Images directory '$IMAGES_DIR' not found!"
    exit 1
fi

if [ ! -d "$DOCS_DIR" ]; then
    echo "❌ Error: Documentation directory '$DOCS_DIR' not found!"
    exit 1
fi

# Initialize counters
total_images=0
unused_images=0
used_images=0
declare -a unused_list=()
declare -a used_list=()

# Create temporary file for results
temp_file=$(mktemp)

echo "📊 Detailed Analysis Results:" > "$temp_file"
echo "=============================" >> "$temp_file"
echo "" >> "$temp_file"

# Function to check if an image is referenced
check_image_usage() {
    local image_path="$1"
    local rel_path="${image_path#*public/}"
    local filename=$(basename "$image_path")
    local dir_and_file="${rel_path#images/}"

    # Multiple search patterns for VuePress
    local patterns=(
        "/$rel_path"           # /images/path/to/image.png
        "\./$rel_path"         # ./images/path/to/image.png
        "$rel_path"            # images/path/to/image.png
        "$filename"            # image.png
        "/$dir_and_file"       # /path/to/image.png (without images/)
        "$dir_and_file"        # path/to/image.png (without images/)
    )

    local found_in_files=()

    # Search for each pattern
    for pattern in "${patterns[@]}"; do
        while IFS= read -r -d '' file; do
            if grep -q "$pattern" "$file" 2>/dev/null; then
                found_in_files+=("$file:$pattern")
            fi
        done < <(find "$DOCS_DIR" -name "*.md" -print0)
    done

    # Remove duplicates
    local unique_files=($(printf '%s\n' "${found_in_files[@]}" | cut -d: -f1 | sort -u))

    if [ ${#unique_files[@]} -gt 0 ]; then
        if [ "$VERBOSE" = true ]; then
            echo "✅ USED: $rel_path" >> "$temp_file"
            for file in "${unique_files[@]}"; do
                echo "    → Referenced in: ${file#$DOCS_DIR/}" >> "$temp_file"
            done
        else
            echo "✅ USED: $rel_path" >> "$temp_file"
        fi
        return 0
    else
        echo "❌ UNUSED: $rel_path" >> "$temp_file"
        return 1
    fi
}

echo "Analyzing image usage..."

# Process all images
while IFS= read -r -d '' image_path; do
    total_images=$((total_images + 1))

    if check_image_usage "$image_path"; then
        used_images=$((used_images + 1))
        used_list+=("$image_path")
    else
        unused_images=$((unused_images + 1))
        unused_list+=("$image_path")
    fi

    # Progress indicator
    if [ $((total_images % 10)) -eq 0 ]; then
        echo "  Processed $total_images images..."
    fi

done < <(find "$IMAGES_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o -iname "*.svg" -o -iname "*.webp" \) -print0)

# Summary
echo "" >> "$temp_file"
echo "📈 Summary:" >> "$temp_file"
echo "===========" >> "$temp_file"
echo "Total images: $total_images" >> "$temp_file"
echo "Used images: $used_images" >> "$temp_file"
echo "Unused images: $unused_images" >> "$temp_file"
echo "Usage rate: $(( (used_images * 100) / total_images ))%" >> "$temp_file"

if [ $unused_images -gt 0 ]; then
    echo "" >> "$temp_file"
    echo "🗑️  Unused Images List:" >> "$temp_file"
    echo "======================" >> "$temp_file"
    for unused_img in "${unused_list[@]}"; do
        echo "  - $unused_img" >> "$temp_file"
    done

    # Calculate size of unused images
    total_size=0
    for unused_img in "${unused_list[@]}"; do
        if [ -f "$unused_img" ]; then
            size=$(stat -f%z "$unused_img" 2>/dev/null || stat -c%s "$unused_img" 2>/dev/null || echo 0)
            total_size=$((total_size + size))
        fi
    done

    # Convert bytes to human readable
    if [ $total_size -gt 1048576 ]; then
        size_mb=$((total_size / 1048576))
        echo "" >> "$temp_file"
        echo "💾 Total size of unused images: ${size_mb}MB" >> "$temp_file"
    elif [ $total_size -gt 1024 ]; then
        size_kb=$((total_size / 1024))
        echo "" >> "$temp_file"
        echo "💾 Total size of unused images: ${size_kb}KB" >> "$temp_file"
    else
        echo "" >> "$temp_file"
        echo "💾 Total size of unused images: ${total_size} bytes" >> "$temp_file"
    fi

    echo "" >> "$temp_file"
    echo "💡 Commands to remove unused images:" >> "$temp_file"
    echo "====================================" >> "$temp_file"
    echo "" >> "$temp_file"
    echo "# Remove all unused images at once:" >> "$temp_file"
    echo "rm -f \\" >> "$temp_file"
    for unused_img in "${unused_list[@]}"; do
        echo "  \"$unused_img\" \\" >> "$temp_file"
    done
    # Remove the last backslash
    sed -i '$ s/ \\$//' "$temp_file"

    echo "" >> "$temp_file"
    echo "# Or remove them one by one (safer):" >> "$temp_file"
    for unused_img in "${unused_list[@]}"; do
        echo "# rm \"$unused_img\"" >> "$temp_file"
    done

    echo "" >> "$temp_file"
    echo "# Move unused images to a backup directory:" >> "$temp_file"
    echo "mkdir -p unused_images_backup" >> "$temp_file"
    for unused_img in "${unused_list[@]}"; do
        backup_path="unused_images_backup/$(basename "$unused_img")"
        echo "mv \"$unused_img\" \"$backup_path\"" >> "$temp_file"
    done
fi

# Display results
cat "$temp_file"

# Save to file
cp "$temp_file" "$OUTPUT_FILE"
echo ""
echo "📁 Results saved to: $OUTPUT_FILE"

# Cleanup
rm "$temp_file"

if [ $unused_images -eq 0 ]; then
    echo "🎉 Great! All images are being used."
    exit 0
else
    echo "⚠️  Found $unused_images unused images out of $total_images total images."
    exit 1
fi
