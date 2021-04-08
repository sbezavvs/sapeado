# Sapeado
Sapeado es una herramienta abierta y libre para la consulta de presencia de datos personales en leaks de datos.

## Uso

La herramienta se encuentra publicada en [Sapeado](https://sapeado.truever.co/) de forma pública y gratuita.

## Configuración del servidor

Para la instalación de los paquetes necesarios, ejecute el comando:

```bash
pip install -r requirements.txt
```

En este repositorio no se proporcionan las tablas con datos de las filtraciones. Esta información está disponible en foros de internet y se recomienda su uso responsable.

Si desea ejecutar el proyecto de forma local, es necesario configurar una base de datos PostgreSQL y modificar las variables de entorno de acuerdo con la información de la conexión.

```bash
export DB_HOST='<HOST_ADDRESS>'
export DB_USER='<DB_USER_NAME>'
export DB_PASS='<DB_PASSWORD>'
export DB_NAME='<DB_NAME>'
```

Para ejecutar en el entorno de Google App Engine, configure las variables de entorno en el archivo *app.yaml*

```yaml
env_variables:
    CLOUD_SQL_CONNECTION_NAME='<MY-PROJECT>:<INSTANCE-REGION>:<INSTANCE-NAME>'
    DB_USER='<DB_USER_NAME>'
    DB_PASS='<DB_PASSWORD>'
    DB_NAME='<DB_NAME>'
```

## Contribuciones
Las pull requests son bienvenidas. Para cambios importantes, abra un issue primero para discutir las modificaciones propuestass.

Asegúrese de actualizar la documentación según corresponda. 

## License
[GNU GPLv3](https://choosealicense.com/licenses/gpl-3.0/)