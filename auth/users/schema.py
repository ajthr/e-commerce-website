#!/usr/bin/python
# -*- coding: utf-8 -*-
from flask_marshmallow import Schema
from marshmallow import fields


class UserSchema(Schema):

    id = fields.String(required=True)
    email = fields.String(required=True)
    name = fields.String()
    bio = fields.String()


user_schema = UserSchema()
