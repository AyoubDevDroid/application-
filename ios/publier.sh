#!/bin/zsh
# Met les 6 applis en vente (gratuites : France, Belgique, Suisse, Luxembourg) puis les soumet à la validation d'Apple.
# À lancer sur le Mac, APRÈS avoir déclaré « aucune donnée collectée » dans App Store Connect → Confidentialité de l'app.
#   zsh ios/publier.sh            → prix + pays, puis vérification (rien n'est soumis)
#   zsh ios/publier.sh --soumettre → idem, puis soumission des 6 applis à Apple
export PATH=/opt/homebrew/bin:$PATH
APPS=(6819306789:maths-6e 6819306894:maths-5e 6819306824:maths-4e 6819306492:maths-3e 6819306985:electricien 6819307020:froid-clim)

for p in $APPS; do
  a=${p%%:*}; s=${p##*:}
  echo "\n=== $s ($a)"
  asc pricing availability create --app $a --territory "FRA,BEL,CHE,LUX" --available true --available-in-new-territories false --output table 2>&1 | tail -3
  asc pricing schedule create --app $a --free --base-territory FRA --start-date $(date +%F) --output table 2>&1 | tail -3
  asc review doctor --app $a --output table 2>&1 | grep -A8 "BLOCKING ISSUES" || echo "✓ rien de bloquant"
done

if [[ "$1" == "--soumettre" ]]; then
  for p in $APPS; do
    a=${p%%:*}; s=${p##*:}
    b=$(asc builds list --app $a --output json 2>/dev/null | grep -oE '"id":"[0-9a-f-]{36}"' | head -1 | cut -d'"' -f4)
    echo "\n=== Soumission $s"
    asc review submit --app $a --version 1.0.0 --build-id $b --confirm --output table 2>&1 | tail -4
  done
fi
echo FIN
