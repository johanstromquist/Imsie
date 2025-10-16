#!/usr/bin/env python3
"""
Fix all dialogue scenes by removing invalid 'context' field.
"""

import re

# List of files and scenes to fix
fixes = [
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-1-hero-origins.ts",
        "scene_id": "scene-ch1-7-meeting-isolde"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-2-fateful-potion.ts",
        "scene_id": "scene-ch2-3-identity-discovered"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-2-fateful-potion.ts",
        "scene_id": "scene-ch2-10-brangien"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-3-secret-love.ts",
        "scene_id": "scene-ch3-2-garden-meeting"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-3-secret-love.ts",
        "scene_id": "scene-ch3-7-mark-confronts"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-3-secret-love.ts",
        "scene_id": "scene-ch3-11-rescue-lepers"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-4-exile-second-isolde.ts",
        "scene_id": "scene-ch4-3-isolde-returns"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-4-exile-second-isolde.ts",
        "scene_id": "scene-ch4-7-meeting-second-isolde"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-4-exile-second-isolde.ts",
        "scene_id": "scene-ch4-11-kaherdin-truth"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-5-tragic-end.ts",
        "scene_id": "scene-ch5-2-dialogue-kaherdin"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-5-tragic-end.ts",
        "scene_id": "scene-ch5-7-dialogue-departure"
    },
    {
        "file": "src/adventures/tristan-isolde/chapters/chapter-5-tragic-end.ts",
        "scene_id": "scene-ch5-12-dialogue-arrives"
    },
]

def fix_file(filepath):
    """Remove context fields from dialogue scenes in a file."""
    with open(filepath, 'r') as f:
        content = f.read()

    # Pattern to match context field in dialogue scenes
    # Matches: context: `...`,\n\n      dialogueTree:
    pattern = r"(\s+)context: `[^`]+`,\s+dialogueTree:"
    replacement = r"\1dialogueTree:"

    new_content = re.sub(pattern, replacement, content)

    if new_content != content:
        with open(filepath, 'w') as f:
            f.write(new_content)
        return True
    return False

# Fix all files
fixed_files = set()
for fix in fixes:
    filepath = fix["file"]
    if fix_file(filepath):
        fixed_files.add(filepath)

print(f"Fixed {len(fixed_files)} files:")
for f in sorted(fixed_files):
    print(f"  - {f}")
