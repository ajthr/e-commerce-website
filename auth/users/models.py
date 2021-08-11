#!/usr/bin/python
# -*- coding: utf-8 -*-
from config import db


class User(db.Model):

    __tablename__ = 'users'
    id = db.Column(db.String(32), primary_key=True)
    email = db.Column(db.String(255), unique=True, nullable=False)
    name = db.Column(db.String(64))
