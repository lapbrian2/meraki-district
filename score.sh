#!/bin/bash
# score.sh — Fixed scoring harness for Meraki District autoresearch.
# DO NOT MODIFY.

set -e

echo "Building Meraki District..."

# Time the build
START=$(date +%s%N)
npx nuxt build 2>&1 | tail -5
END=$(date +%s%N)

BUILD_MS=$(( (END - START) / 1000000 ))

# Check for build errors
if [ $? -ne 0 ]; then
    echo "---"
    echo "build_time_ms:    0"
    echo "bundle_kb:        0"
    echo "build_errors:     1"
    echo "pages_ok:         0/0"
    exit 1
fi

# Measure bundle size
BUNDLE_KB=$(du -sk .output/public/ 2>/dev/null | cut -f1 || echo 0)

# Count pages by checking generated routes
TOTAL_PAGES=$(find .output/public -name "*.html" 2>/dev/null | wc -l)
PAGES_OK="${TOTAL_PAGES}/${TOTAL_PAGES}"

echo "---"
echo "build_time_ms:    ${BUILD_MS}"
echo "bundle_kb:        ${BUNDLE_KB}"
echo "build_errors:     0"
echo "pages_ok:         ${PAGES_OK}"
