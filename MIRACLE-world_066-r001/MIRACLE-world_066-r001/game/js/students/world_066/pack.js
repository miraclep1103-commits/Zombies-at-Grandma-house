// BEGINNER PROJECT: MIRACLE | r001 | engine 2.14.0
// Teacher-supplied starter code; not evidence that the student wrote this code.
// Play first, describe the controls and goal, then prompt and log one asset.
// Keep IDs fixed. Teacher helps with one small explained change at a time.
// manifest = identity; home = room; dialogue = guide; level = game rules.
// STUDENT TEMPLATE: Museum Escape. Replace the setting and characters with your idea.
// Same optional pursuit module, with different movement. All coordinates below are pixels except home tiles.
registerStudentPack({
  "schemaVersion": 1,
  "manifest": {
    "id": "world_066",
    "name": "MIRACLE — Starter Project",
    "author": "Teacher starter for MIRACLE",
    "description": "Find the key and escape a pursuing threat.",
    "iconColor": "purple",
    "position": {"x":704,"y":384},
    "width": 32,
    "height": 32,
    "levelId": "world_066_level",
    "rewardId": "key_world_066"
  },
  "home": {
    "tileSize": 32,
    "width": 20,
    "height": 12,
    "spawnTile": {
      "x": 5,
      "y": 8
    },
    "interactables": [
      {
        "type": "npc",
        "id": "coach",
        "name": "Mechanic",
        "dialogueKey": "mission",
        "tileX": 4,
        "tileY": 2
      },
      {
        "type": "portal",
        "id": "mission",
        "name": "Museum Escape",
        "levelId": "world_066_level",
        "tileX": 14,
        "tileY": 4,
        "width": 48,
        "height": 48
      },
      {
        "type": "savePoint",
        "id": "save",
        "name": "Save",
        "tileX": 12,
        "tileY": 8
      },
      {
        "type": "submitPoint",
        "id": "review",
        "name": "Review",
        "tileX": 16,
        "tileY": 8
      },
      {
        "type": "exit",
        "id": "exit",
        "name": "Exit",
        "tileX": 4,
        "tileY": 9,
        "width": 64,
        "height": 32
      }
    ]
  },
  "dialogue": {
    "mission": {
      "speaker": "Guide",
      "lines": [
        "hello Find the key and reach the gold exit before time expires.",
        "Move with WASD/arrows. Space jumps.",
        "The threat chases when it sees you. Cover blocks its view.",
        "Q flashes a nearby threat, stunning it briefly. The flash must recharge.",
        "Stand fully inside a green refuge and hold H to hide. Release H to move.",
        "Hiding does not stop the escape clock. R retries; Escape returns home."
      ]
    }
  },
  "level": {
    "id": "world_066_level",
    "mode": "platformer",
    "name": "Museum Escape",
    "width": 960,
    "height": 640,
    "spawn": {
      "x": 96,
      "y": 532
    },
    "solids": [
      {
        "x": 0,
        "y": 560,
        "width": 960,
        "height": 80
      }
    ],
    "hazards": [],
    "collectibles": [
      {
        "id": "escape_key",
        "label": "Exit key",
        "x": 600,
        "y": 532,
        "width": 24,
        "height": 24
      }
    ],
    "objectives": [
      {
        "id": "find_key",
        "label": "Find the exit key",
        "collect": [
          "escape_key"
        ]
      }
    ],
    "doors": [
      {
        "id": "exit_gate",
        "label": "Exit gate",
        "x": 820,
        "y": 480,
        "width": 24,
        "height": 80,
        "requires": [
          "find_key"
        ]
      }
    ],
    "goal": {
      "x": 880,
      "y": 532,
      "width": 32,
      "height": 28,
      "requires": [
        "find_key"
      ]
    },
    // Seconds measure time; speed measures pixels/second. Keep threats slower than the player initially.
    "pursuit": {
      "seconds": 90,
      "stunCooldown": 4,
      "stunSeconds": 1.5,
      "stunRadius": 120,
      "memorySeconds": 2.5,
      // The entire player must fit inside. Hold H; the escape clock still runs.
      "hidingSpots": [
        {
          "id": "refuge",
          "x": 300,
          "y": 504,
          "width": 80,
          "height": 56
        }
      ],
      // A grounded pursuer cannot jump gaps; a top-down pursuer slides against walls.
      "enemies": [
        {
          "id": "pursuer",
          "x": 460,
          "y": 532,
          "width": 28,
          "height": 28,
          "speed": 125,
          "noticeRadius": 360
        }
      ]
    }
  }
});
