#!/bin/bash

TMP_DIR="$HOME/.cache/dunst"
TMP_COVER_PATH="$TMP_DIR/$DUNST_SUMMARY.png"

if [ ! -d "$TMP_DIR" ]; then
	mkdir -p "$TMP_DIR"
fi

ART_FROM_SPOTIFY="$(playerctl -p %any,spotify metadata mpris:artUrl | sed -e 's/open.spotify.com/i.scdn.co/g')"

if [[ $(playerctl -p spotify,%any,firefox,chromium,brave,mpd metadata mpris:artUrl) ]]; then
	curl -s "$ART_FROM_SPOTIFY" --output "$TMP_COVER_PATH"
fi

