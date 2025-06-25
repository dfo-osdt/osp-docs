#!/bin/bash

# Script to find unused images in VuePress documentation
# Usage: ./find-unused-images.sh

set -e

IMAGES_DIR="docs/.vuepress/public/images"
DOCS_DIR="docs"
OUTPUT_FILE="unused-images.txt"

echo "🔍 Finding unused images in VuePress documentation..."
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
unused_list=()

# Create temporary file for results
temp_file=$(mktemp)

echo "📊 Analysis Results:" > "$temp_file"
echo "===================" >> "$temp_file"
echo "" >> "$temp_file"

# Find all images and check if they're referenced
while IFS= read -r -d '' image_path; do
    total_images=$((total_images + 1))

    # Get relative path from public directory
    rel_path="${image_path#*public/}"

    # Get just the filename
    filename=$(basename "$image_path")

    # Search for references in markdown files
    # Check for various possible reference patterns in VuePress:
    # - /images/path/to/image.png (most common in VuePress)
    # - ./images/path/to/image.png
    # - images/path/to/image.png
    # - just the filename: image.png

    found=false

    # Search recursively in all markdown files
    if find "$DOCS_DIR" -name "*.md" -exec grep -l "/$rel_path\|\./$rel_path\|$rel_path\|$filename" {} \; 2>/dev/null | head -1 | grep -q "."; then
        found=true
    fi

    if [ "$found" = false ]; then
        unused_images=$((unused_images + 1))
        unused_list+=("$image_path")
        echo "❌ UNUSED: $rel_path" >> "$temp_file"
    else
        echo "✅ USED: $rel_path" >> "$temp_file"
    fi

done < <(find "$IMAGES_DIR" -type f \( -iname "*.png" -o -iname "*.jpg" -o -iname "*.jpeg" -o -iname "*.gif" -o -iname "*.svg" -o -iname "*.webp" \) -print0)

# Summary
echo "" >> "$temp_file"
echo "📈 Summary:" >> "$temp_file"
echo "===========" >> "$temp_file"
echo "Total images: $total_images" >> "$temp_file"
echo "Used images: $((total_images - unused_images))" >> "$temp_file"
echo "Unused images: $unused_images" >> "$temp_file"

if [ $unused_images -gt 0 ]; then
    echo "" >> "$temp_file"
    echo "🗑️  Unused Images List:" >> "$temp_file"
    echo "======================" >> "$temp_file"
    for unused_img in "${unused_list[@]}"; do
        echo "  - $unused_img" >> "$temp_file"
    done

    echo "" >> "$temp_file"
    echo "💡 To remove unused images, you can run:" >> "$temp_file"
    echo "   rm -f \\" >> "$temp_file"
    for unused_img in "${unused_list[@]}"; do
        echo "     \"$unused_img\" \\" >> "$temp_file"
    done
    # Remove the last backslash
    sed -i '$ s/ \\$//' "$temp_file"
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
    echo "⚠️  Found $unused_images unused images."
    exit 1
fi
