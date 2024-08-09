# trimsfika
Build prod
sudo docker build --no-cache --label FIKA-PROD -t fika-prod .

Build dev
sudo docker build --no-cache --label FIKA-DEV -t fika-dev .

Create container prod
sudo docker run --pull=never -v /"local path to server"/:/opt/server -p 6969:6969 -p 6970:6970 -p 6971:6971 -p 6972:6972 -it --name fika-prod --log-opt max-size=10m --log-opt max-file=3 fika-prod

Create container dev
sudo docker run --pull=never -v /"local path to server"/:/opt/server -p 6969:6969 -p 6970:6970 -p 6971:6971 -p 6972:6972 -it --name fika-dev --log-opt max-size=10m --log-opt max-file=3 fika-dev