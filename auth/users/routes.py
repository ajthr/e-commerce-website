#!/usr/bin/python
# -*- coding: utf-8 -*-
import os
import uuid
import jwt
import smtplib
import ssl
import datetime
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart

from flask import Blueprint, request, make_response

from config import db
from users.models import User
from users.schema import user_schema

users_blueprint = Blueprint('users', __name__)

private_key = open('private.key', 'r').read()
public_key = open('public.key', 'r').read()


def authenticate(email, name):
    user = User.query.filter_by(email=email).first()
    if user == None:
        user_id = uuid.uuid4().hex
        while User.query.filter_by(id=user_id).first() != None:
            user_id = uuid.uuid4().hex
        new_user = User(id=user_id, email=email, name=name)
        db.session.add(new_user)
        db.session.commit()
        token = jwt.encode({'id': user_id}, private_key,
                           algorithm='RS256')
        resp = make_response('', 200)
        resp.set_cookie('__SESSION_ID', token, samesite='strict',
                        secure=True, httponly=True)
        return resp
    token = jwt.encode({'id': user.id}, private_key, algorithm='RS256')
    resp = make_response('', 200)
    resp.set_cookie('__SESSION_ID', token, samesite='strict',
                    secure=True, httponly=True)
    return resp


def smtp_server(receiver_email, subject, html_content):
    sender_email = 'developserver7@gmail.com'
    password = os.environ.get('EMAIL_PWD')
    message = MIMEMultipart('alternative')
    message['Subject'] = subject
    message['From'] = sender_email
    message['To'] = receiver_email
    text = MIMEText(html_content, 'html')
    message.attach(text)
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL('smtp.gmail.com', 465, context=context) as \
        server:
        server.login(sender_email, password)
        server.sendmail(sender_email, receiver_email,
                        message.as_string())
    return make_response('', 200)


@users_blueprint.route('/', methods=['GET'])
def user_data():
    session_id = request.cookies.get('__SESSION_ID')
    if session_id != None:
        try:
            user_id = jwt.decode(session_id, public_key,
                                 algorithms=['RS256'])['id']
            user = User.query.filter_by(id=user_id).first()
            if user != None:
                return (user_schema.dump(user), 200)
        except:
            return make_response('', 401)
    return make_response('', 401)


@users_blueprint.route('/isauthenticated/', methods=['GET'])
def check_user():
    session_id = request.cookies.get('__SESSION_ID')
    if session_id != None:
        try:
            user_id = jwt.decode(session_id, public_key,
                                 algorithms=['RS256'])['id']
            if User.query.filter_by(id=user_id).first() != None:
                return make_response('', 200)
        except:
            return make_response('', 401)
    return make_response('', 204)


@users_blueprint.route('/openid/', methods=['POST'])
def social_login():
    session_id = request.cookies.get('__SESSION_ID')
    if session_id is None:
        return authenticate(request.json['email'], request.json['name'])
    return make_response('', 200)


@users_blueprint.route('/sendmail/', methods=['POST'])
def email_login():
    try:
        session_id = request.cookies.get('__SESSION_ID')
        if session_id is None:
            receiver_email = request.json['email']
            token = jwt.encode({'email': receiver_email,
                            'exp': datetime.datetime.utcnow()
                            + datetime.timedelta(seconds=30)},
                            private_key, algorithm='RS256')
            subject = 'Email Verification'
            content = \
                """\
                    <html>
                    <body>
                        <p>
                        Click the below link to verify to your email
                        <a href="http://localhost/login/email_verification/?token=""" \
                + token + """ \
                        ">Login</a>
                        </p>
                    </body>
                    </html>
                    """
            return smtp_server(receiver_email, subject, content)
        return make_response('', 200)
    except:
        return make_response('', 500)

@users_blueprint.route('/verifyemail/', methods=['POST'])
def verify_email():
    token = request.json['token'].strip()
    try:
        payload = jwt.decode(token, public_key, algorithms=['RS256'])
        return authenticate(payload['email'], payload['email'].split('@'
                            )[0])
    except:
        return make_response('', 401)


@users_blueprint.route('/logout/', methods=['POST'])
def logout_user():
    session_id = request.cookies.get('__SESSION_ID')
    if session_id is not None:
        try:
            user_id = jwt.decode(session_id, public_key,
                                 algorithms=['RS256'])['id']
            if User.query.filter_by(id=user_id).first() != None:
                resp = make_response('', 200)
                resp.delete_cookie('__SESSION_ID')
                return resp
        except:
            return make_response('', 401)
    return make_response('', 204)


@users_blueprint.route('/update/', methods=['POST'])
def update_user():
    session_id = request.cookies.get('__SESSION_ID')
    name = request.json['name']
    if session_id is not None:
        try:
            user_id = jwt.decode(session_id, public_key,
                                 algorithms=['RS256'])['id']
            user = User.query.filter_by(id=user_id).first()
            if user is not None:
                if name is not None:
                    user.name = name
                    db.session.commit()
                return make_response('', 200)
        except:
            return make_response('', 401)
    return make_response('', 401)
