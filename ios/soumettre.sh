#!/usr/bin/env bash
# Soumet une version iOS à l examen avec asc (clé API) : crée la version si besoin, note de version fr-FR, build, envoi.
#   bash ios/soumettre.sh APP_ID BUILD VERSION "Note de version"
APP=$1; NUM=$2; VER=$3; NOTES=$4
BID=$(asc builds list --app $APP --output json | python -c "
import json,sys
d=json.load(sys.stdin)['data']
for b in d:
    a=b['attributes']
    if str(a.get('version'))=='$NUM' and a.get('processingState')=='VALID': print(b['id']); break")
[ -z "$BID" ] && { echo "build $NUM pas encore prêt"; exit 2; }
VID=$(asc versions list --app $APP --output json | python -c "
import json,sys
for v in json.load(sys.stdin)['data']:
    if v['attributes']['versionString']=='$VER': print(v['id']); break")
if [ -z "$VID" ]; then
  VID=$(asc versions create --app $APP --version $VER --copy-metadata-from 1.0.0 --release-type AFTER_APPROVAL --output json | grep -oE '"id":"[^"]+"' | head -1 | cut -d'"' -f4)
fi
echo "version $VER = $VID, build $NUM = $BID"
asc localizations update --version "$VID" --locale fr-FR --whats-new "$NOTES" --output json > /dev/null && echo "note OK"
OUT=$(asc review submit --app $APP --version $VER --build $BID --confirm --output json 2>&1)
SUB=$(echo "$OUT" | grep -oE 'review submission [0-9a-f-]{36} does not contain' | cut -d' ' -f3)
if [ -n "$SUB" ]; then sleep 5; asc review submissions-submit --id $SUB --confirm --output json 2>&1 | grep -oE '"state":"[^"]+"'; else echo "$OUT" | tail -c 300; echo; fi
asc versions list --app $APP --output table | sed -n 4p
