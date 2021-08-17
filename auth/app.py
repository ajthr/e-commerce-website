from config import app, db, settings

from users.routes import users_blueprint

# register blueprints
app.register_blueprint(users_blueprint)

if __name__ == '__main__':
    with app.app_context():
        db.create_all()
        app.run(host="0.0.0.0")
