# CONCEPTOS CLAVES

## Comandos importantes

crear proyecto angula: ng new cataleg-elements --routing --style=scss --ssr=false
gnerar interface para nuestro modelo: ng generate interface models/<element>
crear componente: ng generate component components/<nombre_elemento> --standalone

### Instalar JSON server

npm install -g json-server
json-server --watch tools/api/cataleg.json --port 4301 --delay 600


## Flujo de datos en Servicios

Component CatalegPage crida servei ElementService.obtenirPopulars()
Servei fa petició HTTP a l'API
Adaptador transforma resposta JSON → model ElementCataleg
Component rep dades via signal i actualitza la vista
Formulari de cerca valida entrada i filtra elements
Preferits s'emmagatzemen a localStorage amb notes dinàmiques


## Adaptdors
Avantatges dels adaptadors com a funcions pures: Faciliten les proves unitàries i la reutilització.