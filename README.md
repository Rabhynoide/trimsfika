# Trims FIKA

## Version
* Prod : 3.9.4
* Dev : 3.9.5

## Instalaltion
### Build prod

sudo docker build --no-cache --label FIKA-PROD -t fika-prod .

### Build dev

sudo docker build --no-cache --label FIKA-DEV -t fika-dev .

### Create container prod

sudo docker run --pull=never -v /"local path to server"/:/opt/server -p 6969:6969 -p 6970:6970 -p 6971:6971 -p 6972:6972 -it --name fika-prod --log-opt max-size=10m --log-opt max-file=3 fika-prod

### Create container dev

sudo docker run --pull=never -v /"local path to server"/:/opt/server -p 6969:6969 -p 6970:6970 -p 6971:6971 -p 6972:6972 -it --name fika-dev --log-opt max-size=10m --log-opt max-file=3 fika-dev

## Mods list

Mod | Version Prod | Compatible SPT | Version Dev | Compatible SPT
------------- | ------------- | ------------- | -------------
OpticRework | 1.2.2 | |
BRNVG - N-15 Adapter | 1.0.1 | |
SPTQuestingBots | 0.7.0 | |
Fontaine FOV Fix | 2.1.1 | |
SPT Realism Mod | 1.4.1 | |
SWAG + DONUTS | 3.5.1 | |
LootingBots-ServerMod | 1.3.5 | |
True Items Redone | 1.2.1 | |
Fika server | 2.2.6 | |
SAIN | 3.0.5 | |