#!/bin/bash
set -euo pipefail
BASE=/private/tmp/claude-501/-Users-peterschuster-code-drums-practice-grooves/70dc092e-83fe-4a8e-872a-ff9fb2f8b090/scratchpad
SHOTS=$BASE/shots
OUT=$BASE/appstore
TMP=$BASE/tmp
mkdir -p "$OUT" "$TMP"

W=1320; H=2868
DW=950                     # device width
DX=$(( (W - DW) / 2 ))
DY=640
RADIUS=58
FONT=/System/Library/Fonts/SFNS.ttf

# ---- shared background ----
magick -size ${W}x${H} gradient:'#191310-#070707' "$TMP/bg_base.png"
magick -size 1500x1500 radial-gradient:'#e07b00-#000000' -evaluate multiply 0.20 "$TMP/glow.png"
magick "$TMP/bg_base.png" "$TMP/glow.png" -gravity north -geometry +0-520 \
  -compose screen -composite "$TMP/bg.png"

compose_one () {
  local src="$1" out="$2" head="$3" sub="$4"
  local dh
  # resize screenshot to device width, get resulting height
  magick "$src" -resize ${DW}x "$TMP/shot.png"
  dh=$(magick identify -format "%h" "$TMP/shot.png")

  # rounded-corner mask
  magick -size ${DW}x${dh} xc:black -fill white \
    -draw "roundrectangle 0,0,$((DW-1)),$((dh-1)),$RADIUS,$RADIUS" "$TMP/mask.png"
  magick "$TMP/shot.png" "$TMP/mask.png" -alpha off -compose CopyOpacity -composite "$TMP/rounded.png"

  # thin border for definition
  magick "$TMP/rounded.png" -fill none -stroke '#3d3a37' -strokewidth 4 \
    -draw "roundrectangle 2,2,$((DW-3)),$((dh-3)),$RADIUS,$RADIUS" "$TMP/device.png"

  # background + device + text
  magick "$TMP/bg.png" "$TMP/device.png" -geometry +${DX}+${DY} -compose over -composite \
    -font "$FONT" -gravity north \
    -fill white -stroke white -strokewidth 1.6 -pointsize 84 -annotate +0+190 "$head" \
    -stroke none -fill '#9a9a9a' -pointsize 46 -annotate +0+330 "$sub" \
    "$out"
  echo "wrote $out"
}

compose_one "$SHOTS/01-library.png" "$OUT/1-library.png" \
  "A library worth practising" "Rock, funk, punk and jazz — 24 grooves"
compose_one "$SHOTS/02-practice-list.png" "$OUT/2-practice-list.png" \
  "Build your practice list" "Track what you have already worked on"
compose_one "$SHOTS/05-session.png" "$OUT/3-session.png" \
  "Run the whole session" "By repeats or by the clock, hands free"
compose_one "$SHOTS/03-notation.png" "$OUT/4-notation.png" \
  "Read real drum notation" "Beaming, accents and ghost notes"
compose_one "$SHOTS/04-highway.png" "$OUT/5-highway.png" \
  "Or watch the highway" "See every note before it lands"
