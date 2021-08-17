
import os
import click
from flask import Flask
from flask_sqlalchemy import SQLAlchemy
from flask_migrate import Migrate
from flask_marshmallow import Marshmallow

from config import settings, utils

app = Flask(__name__)

# app config
app.config["DEBUG"] = settings.DEBUG
app.config['SQLALCHEMY_DATABASE_URI'] = settings.SQLALCHEMY_DATABASE_URI
app.config['SQLALCHEMY_TRACK_MODIFICATIONS'] = settings.SQLALCHEMY_TRACK_MODIFICATIONS

db = SQLAlchemy(app)
migrate = Migrate(app, db)
ma = Marshmallow(app)


@app.cli.command("make")
def flask_make():
    """Creates a new migration repository."""
    # flask db init performs the same task. But raises error if the folder is already present.
    if os.path.isdir("migrations"):
        click.echo("migrations folder already exist. skipping...")
    else:
        os.system("flask db init")


@app.cli.command("migrate")
def flask_migrate():
    """Autogenerate a new revision file and Upgrade to a later version."""
    utils.wait_for_db(db)
    if os.path.isdir("migrations"):
        os.system("flask db migrate")
        os.system("flask db upgrade")
    else:
        click.echo("Error: Path doesn't exist: '{}/migrations'. Please use the 'make' command to create a new scripts folder.".format(os.getcwd()))


@app.cli.command("test")
def flask_test():
    """Run tests for all apps."""
    os.system("python -m unittest discover")


@app.cli.command("deploy")
@click.option("-h", "--host", "host", default="0.0.0.0")
@click.option("-p", "--port", "port", default=5000)
@click.option("-w", "--workers", "workers", default=1)
def flask_deploy(host, port, workers):
    os.system("gunicorn -w {} -b {}:{} app:app".format(workers, host, port))
