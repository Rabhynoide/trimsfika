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
### Server

| Mod | Version Prod | Compatible SPT | Version Dev | Compatible SPT | Link |
| ---      | ---      | ---      | ---      | ---      | ---      |
| OpticRework | 1.2.2 | 3.0.0-3.3.0 (OK 3.9.4) | 1.2.2 | 3.0.0-3.3.0 (OK 3.9.4) | https://hub.sp-tarkov.com/files/file/1327-eft-scope-and-red-dot-sight-overhaul-by-geff-hannigan-reupload/ |
| BRNVG - N-15 Adapter | 1.5.6 | 3.9.3 (OK 3.9.4) | 1.5.6 | 3.9.3 (OK 3.9.4) | https://hub.sp-tarkov.com/files/file/1303-borkel-s-realistic-night-vision-goggles-nvgs-and-t-7/ |
| SPTQuestingBots | 0.7.0 | 3.9.X (OK 3.9.4) | 0.7.0 | 3.9.X (OK 3.9.4) | https://hub.sp-tarkov.com/files/file/1534-questing-bots/ |
| Fontaine FOV Fix | 2.1.3 | 3.9.3 (OK 3.9.4) | 2.1.3 | 3.9.3 (OK 3.9.4) | https://hub.sp-tarkov.com/files/file/942-fontaine-s-fov-fix-variable-optics/ |
| SPT Realism Mod | 1.4.1 | 3.9.4 | 1.4.2 | 3.9.5 | https://hub.sp-tarkov.com/files/file/606-spt-realism-mod/ |
| SWAG + DONUTS | 3.5.1 | 3.9.X (OK 3.9.4) | 3.5.1 | 3.9.X (OK 3.9.4) | https://hub.sp-tarkov.com/files/file/878-swag-donuts-dynamic-spawn-waves-and-custom-spawn-points/ |
| LootingBots-ServerMod | 1.3.5 | 3.9.0 (OK 3.9.4) | 1.3.5 | 3.9.0 (OK 3.9.4) | https://hub.sp-tarkov.com/files/file/1096-looting-bots/ |
| True Items Redone | 1.2.1 | 3.9.4 | |
| Fika server | 2.2.6 | 3.9.4 | 2.2.7 | ? |
| SAIN | 3.0.5 | 3.9.X | 3.1.0 | 3.9.X | https://hub.sp-tarkov.com/files/file/1062-sain-solarint-s-ai-modifications-full-ai-combat-system-replacement/ |

### Client