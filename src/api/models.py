from flask_sqlalchemy import SQLAlchemy

db = SQLAlchemy()

class User(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    email = db.Column(db.String(120), unique=True, nullable=False)
    password = db.Column(db.String(80), unique=False, nullable=False)
    first_name = db.Column(db.String(120), unique=False, nullable=False)
    last_name = db.Column(db.String(120), unique=False, nullable=False)
    favorite_cocktails = db.relationship('FavoriteCocktail', backref='user', lazy=True)
    

    def __repr__(self):
        return self.first_name

    def serialize(self):
        return {
            "id": self.id,
            "email": self.email,
            "first_name": self.first_name,
            "last_name": self.last_name, 
            "favorite_cocktails": list(map(lambda favorite: favorite.serialize(), self.favorite_cocktails))
            # do not serialize the password, its a security breach
        }


class Cocktail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(120), unique=False, nullable=False)
    first_step = db.Column(db.String(120), unique=False, nullable=False)
    second_step = db.Column(db.String(120), unique=False, nullable=False)
    third_step = db.Column(db.String(120), unique=False, nullable=True)
    fourth_step = db.Column(db.String(120), unique=False, nullable=True)
    fifth_step = db.Column(db.String(120), unique=False, nullable=True)
    ingredients = db.Column(db.String(120), unique=False, nullable=False)
    measurements = db.Column(db.String(120), unique=False, nullable=False)
    garnishes = db.Column(db.String(120), unique=False, nullable=False)
    glassware = db.Column(db.String(120), unique=False, nullable=False)
    favorite_cocktails = db.relationship('FavoriteCocktail', backref='cocktail', lazy=True)
   
    def __repr__(self):
        return self.name

    def serialize(self):
        return {
            "id": self.id,
            "name": self.name,
            "first_step": self.first_step,
            "second_step": self.second_step,
            "third_step": self.third_step,
            "fourth_step": self.fourth_step,
            "fifth_step": self.fifth_step,
            "ingredients": self.ingredients,
            "measurements": self.measurements,
            "garnishes": self.garnishes,
            "glassware": self.glassware
        }

class FavoriteCocktail(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey('user.id'), nullable=False)
    cocktail_id = db.Column(db.Integer, db.ForeignKey('cocktail.id'), nullable=False)
   
    def serialize(self):
        return {
            "id": self.id,
            "user_id": self.user_id,
            "cocktail_id": self.cocktail_id
        }